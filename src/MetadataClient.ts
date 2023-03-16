import { ManagementHttpClient } from './ManagementHttpClient';
import { MetadataClientOptions } from './MetadataClientOptions';
import Axios from 'axios';
import { DEFAULT_OPTIONS } from './ManagementClientOptions';
import { AutoParseUEBAInfo, BaseType, MetadataCommonResponseDto, ReserveKey, UEBAInfo } from './models/MetadataDto';
import { domainC14n } from './utils';
import { UAParser } from 'ua-parser-js';
import { Reader } from '@maxmind/geoip2-node';
import * as path from 'path';

const reader = Reader.open(path.join(__dirname, '../GeoLite2-City.mmdb'));

export class MetadataClient {
  private httpClient: ManagementHttpClient;
  private options: MetadataClientOptions;

  constructor(options: MetadataClientOptions) {
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
    private modelId: string,
  ) {}

  public create<
    MetadataDataType = Record<string, BaseType>
  >(data: MetadataDataType): Promise<MetadataCommonResponseDto<MetadataDataType & ReserveKey>> {
    return this.httpClient.request({
      method: 'POST',
      url: '/api/v3/metadata/create-line',
      data: {
        modelId: this.modelId,
        data,
      },
    });
  }
}

class UEBAModel extends MetadataModel {
  constructor(httpClient: ManagementHttpClient, modelId: string) {
    super(httpClient, modelId);
  }

  public async upload<CustomUEBAInfo extends UEBAInfo>(info: CustomUEBAInfo) {
    return this.create<CustomUEBAInfo & AutoParseUEBAInfo>({
      ...this.parseUa(info.ua),
      ...(await this.parseIp(info.ip)),
      ...info,
    });
  }

  private parseUa(ua: string) {
    const parser = new UAParser(ua);
    return {
      device: parser.getDevice().type || 'pc',
      system: parser.getOS().name || '',
      browser: parser.getBrowser().name || '',
    };
  }

  private async parseIp(ip: string) {
    const res = (await reader).city(ip);
    return {
      country: res.country?.names['zh-CN'] || '',
      province: res.subdivisions
        ? res.subdivisions[0].names['zh-CN'] || ''
        : '',
      city: res.city?.names['zh-CN'] || '',
    };
  }
}

