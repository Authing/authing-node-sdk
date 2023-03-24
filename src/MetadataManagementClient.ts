import { ManagementHttpClient } from "./ManagementHttpClient";
import { MetadataManagementClientOptions } from "./MetadataManagementClientOptions";
import Axios from "axios";
import { DEFAULT_OPTIONS } from "./ManagementClientOptions";
import {
  AutoParseUEBAInfo,
  BaseType,
  CreateModelDto,
  CreateModelFieldDto,
  FilterOptions,
  MetadataCommonResponseDto,
  ModelFieldInfo,
  ModelInfo,
  PaginateRes,
  ReserveKey,
  UEBAInfo,
  UpdateModelDto,
  UpdateModelFieldDto,
} from "./models/MetadataDto";
import { domainC14n } from "./utils";
import { UAParser } from "ua-parser-js";
import { Reader } from "@maxmind/geoip2-node";
import * as path from "path";
import moment from "moment";

const reader = Reader.open(path.join(__dirname, "../GeoLite2-City.mmdb"));

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
      throw new Error("accessKeyId is required");
    }

    if (!this.options.accessKeySecret) {
      throw new Error("accessKeySecret is required");
    }
  }

  /**
   * 创建自定义功能
   */
  public createModel(data: CreateModelDto) {
    return this.httpClient.request<MetadataCommonResponseDto<ModelInfo>>({
      method: "POST",
      url: "/api/v3/metadata/create-model",
      data,
    });
  }

  /**
   * 获取自定义功能信息
   * @param modelId 功能标识符
   */
  public getModelInfo(modelId: string) {
    return this.httpClient.request<MetadataCommonResponseDto<ModelInfo>>({
      method: "GET",
      url: "/api/v3/metadata/get-model",
      params: {
        modelId,
      },
    });
  }

  /**
   * 获取全部自定义功能
   */
  public getAllModelInfo() {
    return this.httpClient.request<
      MetadataCommonResponseDto<{ list: ModelInfo[] }>
    >({
      method: "GET",
      url: "/api/v3/metadata/list-model",
    });
  }

  /**
   * 更新自定义功能配置
   * @param modelId 功能标识符
   * @param info 更新信息
   */
  public updateModel(modelId: string, info: UpdateModelDto) {
    return this.httpClient.request<MetadataCommonResponseDto<ModelInfo>>({
      method: "POST",
      url: "/api/v3/metadata/update-model",
      data: {
        ...info,
        id: modelId,
      },
    });
  }

  /**
   * 删除自定义功能
   * @param modelId 功能标识符
   */
  public removeModel(modelId: string) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/update-model",
      data: {
        id: modelId,
      },
    });
  }

  /**
   * 获取自定义功能实例
   * @param modelId 功能标识符
   */
  public getModel(modelId: string) {
    return new MetadataModel(this.httpClient, modelId);
  }

  /**
   * 获取 UEBA 功能实例
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

  /**
   * 创建功能字段
   */
  public createField(data: CreateModelFieldDto) {
    return this.httpClient.request<MetadataCommonResponseDto<ModelFieldInfo>>({
      method: "POST",
      url: "/api/v3/metadata/create-field",
      data: {
        ...data,
        modelId: this.modelId,
      },
    });
  }

  /**
   * 更新功能字段
   * @param fieldId 字段 id
   * @param data 更新信息
   */
  public updateField(fieldId: string, data: UpdateModelFieldDto) {
    return this.httpClient.request<MetadataCommonResponseDto<ModelFieldInfo>>({
      method: "POST",
      url: "/api/v3/metadata/update-field",
      data: {
        ...data,
        modelId: this.modelId,
        id: fieldId,
      },
    });
  }

  /**
   * 删除功能字段
   * @param fieldId 字段 id
   */
  public removeField(fieldId: string) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-field",
      data: {
        modelId: this.modelId,
        id: fieldId,
      },
    });
  }

  /**
   * 获取全部功能字段
   */
  public getAllField() {
    return this.httpClient.request<
      MetadataCommonResponseDto<{ list: ModelFieldInfo[] }>
    >({
      method: "GET",
      url: "/api/v3/metadata/list-field",
      params: {
        modelId: this.modelId,
      },
    });
  }

  /**
   * 高级搜索
   */
  public filter(options: FilterOptions) {
    return this.httpClient.request<
      MetadataCommonResponseDto<PaginateRes<Record<string, any>>>
    >({
      method: "POST",
      url: "/api/v3/metadata/filter",
      data: options,
    });
  }

  /**
   * 创建行
   */
  public createLine<MetadataDataType = Record<string, BaseType>>(
    data: MetadataDataType
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<MetadataDataType & ReserveKey>
    >({
      method: "POST",
      url: "/api/v3/metadata/create-line",
      data: {
        modelId: this.modelId,
        data,
      },
    });
  }

  /**
   * 获取单行
   * @param id 行 id
   */
  public getLine<MetadataDataType = Record<string, BaseType>>(id: string) {
    return this.httpClient.request<
      MetadataCommonResponseDto<MetadataDataType & ReserveKey>
    >({
      method: "GET",
      url: "/api/v3/metadata/get-line",
      params: {
        modelId: this.modelId,
        lineId: id,
      },
    });
  }

  /**
   * 更新行
   * @param id 行 id
   * @param updates 更新信息
   */
  public updateLine<MetadataDataType = Record<string, BaseType>>(
    id: string,
    updates: Partial<MetadataDataType>
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<Partial<MetadataDataType & ReserveKey>>
    >({
      method: "POST",
      url: "/api/v3/metadata/update-line",
      data: {
        modelId: this.modelId,
        lineId: id,
        updates,
      },
    });
  }

  /**
   * 批量删除行
   */
  public removeLine(idList: string[]) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-line",
      data: {
        modelId: this.modelId,
        lineIdList: idList,
      },
    });
  }

  /**
   * 创建行关联关系
   * @param fieldId 字段 id
   * @param lineId 行 id
   * @param value 关联数据的 id
   */
  public createLineRelation(
    fieldId: string,
    lineId: string,
    value: string | string[]
  ) {
    if (!Array.isArray(value)) {
      value = [value];
    }
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-line",
      data: {
        modelId: this.modelId,
        fieldId,
        lineId,
        valueList: value,
      },
    });
  }

  /**
   * 获取行关联关系
   * @param fieldId 字段 id
   * @param lineId 行 id
   * @param value 关联数据的 id
   */
  public getLineRelation(
    fieldId: string,
    lineId: string,
    paginateOpt: {
      limit?: number;
      page?: number;
    } = {}
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<PaginateRes<string>>
    >({
      method: "POST",
      url: "/api/v3/metadata/get-line-relation",
      data: {
        modelId: this.modelId,
        fieldId,
        lineId,
        ...paginateOpt,
      },
    });
  }

  /**
   * 删除行关联关系
   * @param fieldId 字段 id
   * @param lineId 行 id
   * @param value 关联数据 id
   */
  public removeLineRelation(fieldId: string, lineId: string, value: string) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-line-relation",
      data: {
        modelId: this.modelId,
        fieldId,
        lineId,
        value,
      },
    });
  }
}

class UEBAModel extends MetadataModel {
  constructor(httpClient: ManagementHttpClient, modelId: string) {
    super(httpClient, modelId);
  }

  public async capture<CustomUEBAInfo extends UEBAInfo>(info: CustomUEBAInfo) {
    return super.createLine<
      Omit<CustomUEBAInfo, "timestamp"> & AutoParseUEBAInfo
    >({
      requestDate: moment(info.timestamp).format("YYYY-MM-DD HH:mm:ss"),
      ...this.parseUa(info.ua),
      ...(await this.parseIp(info.ip)),
      ...info,
    });
  }

  public async getHistory<CustomUEBAInfo extends UEBAInfo>(id: string) {
    return super.getLine<CustomUEBAInfo>(id);
  }

  private parseUa(ua: string) {
    const parser = new UAParser(ua);
    return {
      deviceType: parser.getDevice().type || "pc",
      systemType: parser.getOS().name || "",
      browserType: parser.getBrowser().name || "",
    };
  }

  private async parseIp(ip: string) {
    try {
      const res = (await reader).city(ip);
      return {
        country: res.country?.names["zh-CN"] || "",
        province: res.subdivisions
          ? res.subdivisions[0].names["zh-CN"] || ""
          : "",
        city: res.city?.names["zh-CN"] || "",
      };
    } catch (error) {
      return {
        country: "",
        province: "",
        city: "",
      };
    }
  }
}
