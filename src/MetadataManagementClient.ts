import { ManagementHttpClient } from './ManagementHttpClient';
import { MetadataManagementClientOptions } from './MetadataManagementClientOptions';
import Axios from 'axios';
import { DEFAULT_OPTIONS } from './ManagementClientOptions';
import {
  AutoParseUEBAInfo,
  BaseType,
  MetadataCommonResponseDto,
  ReserveKey,
  UEBAInfo,
} from './models/MetadataDto';
import { domainC14n } from './utils';
import { UAParser } from 'ua-parser-js';
import { Reader } from '@maxmind/geoip2-node';
import * as path from 'path';

const reader = Reader.open(path.join(__dirname, '../GeoLite2-City.mmdb'));

export class MetadataManagementClient {
  private httpClient: ManagementHttpClient;
  private options: MetadataManagementClientOptions;

  constructor(options: MetadataManagementClientOptions) {
    // @ts-ignore
    Object.keys(options).forEach((i: any) => !options[i] && delete options[i]);
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    Axios.defaults.baseURL = domainC14n(String(this.options.host));
    this.httpClient = new ManagementHttpClient(this.options);

    if (!this.options.accessKeyId) {
      throw new Error('accessKeyId is required');
    }

    if (!this.options.accessKeySecret) {
      throw new Error('accessKeySecret is required');
    }
  }

  /**
   * 获取自定义功能
   * @param modelId 功能标识符
   */
  public getModel(modelId: string) {
    return new MetadataModel(this.httpClient, modelId);
  }

  /**
   * 获取自定义功能
   * @param modelId 功能标识符
   */
  public getUebaModel(modelId: string) {
    return new UEBAModel(this.httpClient, modelId);
  }
}

/**
 * 自定义功能模块
 */
class MetadataModel {
  constructor(
    private httpClient: ManagementHttpClient,
    private modelId: string
  ) {}

  public create<MetadataDataType = Record<string, BaseType>>(
    data: MetadataDataType
  ): Promise<MetadataCommonResponseDto<MetadataDataType & ReserveKey>> {
    return this.httpClient.request({
      method: 'POST',
      url: '/api/v3/metadata/create-line',
      data: {
        modelId: this.modelId,
        data,
      },
    });
  }

  public get<MetadataDataType = Record<string, BaseType>>(
    id: string
  ): Promise<MetadataCommonResponseDto<MetadataDataType & ReserveKey>> {
    return this.httpClient.request({
      method: 'GET',
      url: '/api/v3/metadata/get-line',
      params: {
        modelId: this.modelId,
        lineId: id,
      },
    });
  }

  public update<MetadataDataType = Record<string, BaseType>>(
    id: string,
    updates: Partial<MetadataDataType>
  ): Promise<MetadataCommonResponseDto<Partial<MetadataDataType & ReserveKey>>> {
    return this.httpClient.request({
      method: 'POST',
      url: '/api/v3/metadata/update-line',
      data: {
        modelId: this.modelId,
        lineId: id,
        updates,
      },
    });
  }

  public remove(idList: string[]): Promise<MetadataCommonResponseDto> {
    return this.httpClient.request({
      method: 'POST',
      url: '/api/v3/metadata/remove-line',
      data: {
        modelId: this.modelId,
        lineIdList: idList,
      },
    });
  }
}

class UEBAModel extends MetadataModel {
  constructor(httpClient: ManagementHttpClient, modelId: string) {
    super(httpClient, modelId);
  }

  public async capture<CustomUEBAInfo extends UEBAInfo>(info: CustomUEBAInfo) {
    return super.create<CustomUEBAInfo & AutoParseUEBAInfo>({
      ...this.parseUa(info.ua),
      ...(await this.parseIp(info.ip)),
      ...this.parseTimestamp(info.timestamp),
      ...info,
    });
  }

  public async getHistory<CustomUEBAInfo extends UEBAInfo>(id: string) {
    return super.get<CustomUEBAInfo>(id);
  }

  private parseUa(ua: string) {
    const parser = new UAParser(ua);
    return {
      device: parser.getDevice().type || 'pc',
      system: parser.getOS().name || '',
      browser: parser.getBrowser().name || '',
    };
  }

  private parseTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    return {
      request_date: `${date.getUTCFullYear()}.${
        date.getMonth() + 1
      }.${date.getDate()}`,
      request_time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };
  }

  private async parseIp(ip: string) {
    try {
      const res = (await reader).city(ip);
      return {
        country: res.country?.names['zh-CN'] || '',
        province: res.subdivisions
          ? res.subdivisions[0].names['zh-CN'] || ''
          : '',
        city: res.city?.names['zh-CN'] || '',
      };
    } catch (error) {
      return {
        country: '',
        province: '',
        city: '',
      };
    }
  }
}
