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
        id: modelId,
      },
    });
  }

  /**
   * 获取全部自定义功能
   */
  public getAllModelInfo() {
    return this.httpClient.request<MetadataCommonResponseDto<ModelInfo[]>>({
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
      url: "/api/v3/metadata/remove-model",
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
  public getUebaModel(modelId?: string) {
    return new UEBAModel(this.httpClient, modelId);
  }
}

/**
 * 自定义功能模块
 */
export class MetadataModel {
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
    return this.httpClient.request<MetadataCommonResponseDto<ModelFieldInfo[]>>(
      {
        method: "GET",
        url: "/api/v3/metadata/list-field",
        params: {
          modelId: this.modelId,
        },
      }
    );
  }

  /**
   * 高级搜索
   */
  public filter<MetadataDataType = Record<string, BaseType>>(
    options: FilterOptions
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<PaginateRes<MetadataDataType>>
    >({
      method: "POST",
      url: "/api/v3/metadata/filter",
      data: {
        ...options,
        modelId: this.modelId,
      },
    });
  }

  /**
   * 创建行
   */
  public createRow<MetadataDataType = Record<string, BaseType>>(
    data: MetadataDataType
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<MetadataDataType & ReserveKey>
    >({
      method: "POST",
      url: "/api/v3/metadata/create-row",
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
  public getRow<MetadataDataType = Record<string, BaseType>>(id: string) {
    return this.httpClient.request<
      MetadataCommonResponseDto<MetadataDataType & ReserveKey>
    >({
      method: "GET",
      url: "/api/v3/metadata/get-row",
      params: {
        modelId: this.modelId,
        rowId: id,
      },
    });
  }

  /**
   * 更新行
   * @param id 行 id
   * @param updates 更新信息
   */
  public updateRow<MetadataDataType = Record<string, BaseType>>(
    id: string,
    updates: Partial<MetadataDataType>
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<Partial<MetadataDataType & ReserveKey>>
    >({
      method: "POST",
      url: "/api/v3/metadata/update-row",
      data: {
        modelId: this.modelId,
        rowId: id,
        data: updates,
      },
    });
  }

  /**
   * 批量删除行
   */
  public removeRow(idList: string[]) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-row",
      data: {
        modelId: this.modelId,
        rowIdList: idList,
      },
    });
  }

  /**
   * 创建行关联关系
   * @param fieldId 字段 id
   * @param rowId 行 id
   * @param value 关联数据的 id
   */
  public createRowRelation(
    fieldId: string,
    rowId: string,
    value: string | string[]
  ) {
    if (!Array.isArray(value)) {
      value = [value];
    }
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/create-row-relation",
      data: {
        modelId: this.modelId,
        fieldId,
        rowId,
        valueList: value,
      },
    });
  }

  /**
   * 获取行关联关系
   * @param fieldId 字段 id
   * @param rowId 行 id
   * @param value 关联数据的 id
   */
  public getRowRelation(
    fieldId: string,
    rowId: string,
    paginateOpt: {
      limit?: number;
      page?: number;
    } = {}
  ) {
    return this.httpClient.request<
      MetadataCommonResponseDto<PaginateRes<string>>
    >({
      method: "GET",
      url: "/api/v3/metadata/get-row-relation",
      params: {
        modelId: this.modelId,
        fieldId,
        rowId,
        ...paginateOpt,
      },
    });
  }

  /**
   * 删除行关联关系
   * @param fieldId 字段 id
   * @param rowId 行 id
   * @param value 关联数据 id
   */
  public removeRowRelation(fieldId: string, rowId: string, value: string) {
    return this.httpClient.request<MetadataCommonResponseDto>({
      method: "POST",
      url: "/api/v3/metadata/remove-row-relation",
      data: {
        modelId: this.modelId,
        fieldId,
        rowId,
        value,
      },
    });
  }
}

class UEBAModel {
  constructor(
    private httpClient: ManagementHttpClient,
    private modelId?: string
  ) {}

  public async capture<CustomUEBAInfo extends UEBAInfo>(data: CustomUEBAInfo) {
    return this.httpClient.request<
      MetadataCommonResponseDto<
        Omit<CustomUEBAInfo, "timestamp"> & AutoParseUEBAInfo
      >
    >({
      method: "POST",
      url: "/api/v3/metadata/ueba/capture",
      data: {
        modelId: this.modelId,
        data,
      },
    });
  }
}
