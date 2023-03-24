export interface MetadataCommonResponseDto<Data = any> {
  /** 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 */
  statusCode: number;

  /** 描述信息 */
  message: string;

  /** 细分错误码，可通过此错误码得到具体的错误类型。 */
  apiCode?: number;

  /** 请求 ID。当请求失败时会返回。 */
  requestId?: string;

  /** 响应数据 */
  data: Data;
}

export enum ParentKey {
  "应用" = "applications",
  "身份源管理" = "connections",
  "组织机构" = "users",
  "权限管理" = "access-control",
  "安全设置" = "safety-management",
  "品牌化" = "global-branding-setting",
  "自动化" = "extensibility",
  "审计日志" = "logs",
}

export enum ModelType {
  UEBA = "ueba",

  USER = "user",

  POST = "post",

  GROUP = "group",

  DEPARTMENT = "department",

  ORGANIZATION = "organization",

  /** 自定义功能 */
  CUSTOM = "custom",
}

export enum FieldType {
  /** 单行文本 */
  Text = 1,

  /** 多行文本 */
  Textarea = 2,

  /** 数字 */
  Number = 3,

  /** 布尔类型 */
  Boolean = 4,

  /** 日期 */
  Date = 5,

  /** 枚举 */
  Enum = 6,

  /** 关联类型 */
  Relation = 7,
}

export interface ModelInfo {
  /** 功能标识符 */
  id: string;

  userPoolId: string;

  /** 功能名称 */
  name: string;

  /** 功能描述 */
  description: string;

  /** 功能是否启用 */
  enable: string;

  /** 父级菜单 key */
  parentKey: string;

  /** 创建时间 */
  createdAt: string;

  /** 更新时间 */
  updatedAt: string;

  /** 功能类型 */
  type: ModelType;

  /** 字段序 */
  fieldOrder: string[];

  /** 详情页配置 */
  config: Record<string, any>;
}

export interface DropDownItem {
  key: string;
  label: string;
}

export enum ValueFormat {
  /** 原始数据 */
  None = 0,

  /** 保留一位小数 */
  Float1 = 31,

  /** 保留两位小数 */
  Float2 = 32,

  /** 保留三位小数 */
  Float3 = 33,

  /** 保留四位小数 */
  Float4 = 34,

  /** 千分位 */
  Thousandth = 35,

  /** 带小数的千分位 */
  ThousandthDecimals = 36,

  /** 百分比 */
  Percentage = 37,

  /** 带小数的百分比 */
  PercentageDecimals = 38,

  /** 2023/01/30 14:00:00 */
  "YYYY/MM/DD/ HH:mm:ss" = 50,

  /** 2023/01/30 */
  "YYYY/MM/DD" = 51,

  /** 2023/01/30 14:00 */
  "YYYY/MM/DDHH:mm" = 52,

  /** 2023-01-30 */
  "YYYY-MM-DD" = 53,

  /** 2023-01-30 14:00 */
  "YYYY-MM-DDHH:mm" = 54,

  /** 01-30*/
  "MM-DD" = 55,

  /** 01/30/2023 */
  "MM/DD/YYYY" = 56,

  /** 30/01/2023 */
  "DD/MM/YYYY" = 57,
}

export interface ModelFieldInfo {
  /** 字段 id */
  id: string;

  /** 自定义功能 id */
  modelId: string;

  /** 字段名称 */
  name: string;

  /** 字段 key */
  key: string;

  /** 字段类型 */
  type: FieldType;

  /** 在列表页是否展示 */
  show: boolean;

  /** 是否可编辑 */
  editable: boolean;

  /** 帮助说明 */
  help: string;

  /** 默认值 */
  default: string;

  /** 是否必填 */
  require: string;

  /** 是否唯一 */
  unique: string;

  /** 文本类型的最大长度 */
  maxLength: number;

  /** 数字和日期类型的最大值 */
  max: number;

  /** 数字和日期类型的最小值 */
  min: number;

  /** 文本类型的正则校验规则 */
  regexp: string;

  /** 格式化类型 */
  format: ValueFormat;

  /** 枚举类型下拉菜单选项 */
  dropDown: DropDownItem[];

  /** 字段是否支持模糊搜索，仅文本类型可开启 */
  fuzzySearch: boolean;

  /** 关联的功能 id，仅关联字段可选 */
  relationType: string;

  /** 关联类型是否多选 */
  relationMultiple: string;

  /** 关联类型的关联数据在列表页展示的属性 key */
  relationShowKey: string;

  /** 关联类型的数据可选范围 */
  relationOptionalRange: string;
}

export type CreateModelDto = Pick<ModelInfo, "name" | "parentKey"> &
  Partial<Pick<ModelInfo, "description" | "enable">>;

export type UpdateModelDto = Partial<
  Pick<
    ModelInfo,
    | "name"
    | "description"
    | "enable"
    | "parentKey"
    | "type"
    | "fieldOrder"
    | "config"
  >
>;

export type CreateModelFieldDto = Required<
  Pick<
    ModelFieldInfo,
    | "name"
    | "key"
    | "type"
    | "show"
    | "editable"
    | "require"
    | "unique"
    | "format"
  >
> &
  Partial<
    Pick<
      ModelFieldInfo,
      | "help"
      | "default"
      | "maxLength"
      | "max"
      | "min"
      | "regexp"
      | "dropDown"
      | "fuzzySearch"
      | "relationType"
      | "relationMultiple"
      | "relationShowKey"
      | "relationOptionalRange"
    >
  >;

export type UpdateModelFieldDto = Partial<
  Pick<
    ModelFieldInfo,
    | "name"
    | "show"
    | "editable"
    | "help"
    | "default"
    | "maxLength"
    | "max"
    | "min"
    | "regexp"
    | "dropDown"
    | "fuzzySearch"
    | "relationType"
    | "relationMultiple"
    | "relationShowKey"
    | "relationOptionalRange"
  >
>;

export enum CONJUNCTION {
  AND = "and",
  OR = "or",
}

export enum OPERATOR {
  /** 等于 */
  EQ = "eq",

  /** 不等于 */
  NE = "ne",

  /** 包含 */
  CO = "co",

  /** 大于 */
  GT = "gt",

  /** 小于 */
  LT = "lt",

  /** 数组包含 */
  IN = "in",
}

export interface MetadataSearchQuery {
  /** 模糊搜索关键字 */
  keywords?: string;

  /** 连词 */
  conjunction: CONJUNCTION;

  /** 条件列表 */
  conditions: {
    /** 字段 id */
    key: string;

    /** 值 */
    value: BaseType | BaseType[];

    /** 关系条件 */
    operator: OPERATOR;
  }[];

  /** 限定关联关系搜索范围 */
  scope?: {
    /** 关联自定义功能 id */
    modelId: string;

    /** 关联数据行 id */
    id: string;
  };
}

export interface FilterOptions {
  /** 返回值的 key 使用 field.key 还是 field.id，默认为 false */
  showFieldId?: boolean;

  /** 预览关联关系数据，开启后返回前三条，默认为 false */
  previewRelation?: boolean;

  /** 高级搜索条件 */
  query: MetadataSearchQuery;

  /** 分页配置 */
  paginateOpt: {
    /** 每页条数 */
    limit?: number;

    /** 页码 */
    page?: number;
  };
}

export interface PaginateRes<T> {
  /** 记录总数 */
  totalCount: number;

  /** 当前页 */
  list: T[];
}

export type BaseType = string | number | boolean | BaseType[];

export interface ReserveKey {
  /** 唯一标识 */
  id: string;

  /** 创建时间 */
  metaCreateTime: number;

  /** 更新时间 */
  metaUpdateTime: number;

  /** 创建人 */
  metaCreateUser: string;

  /** 更新人 */
  metaUpdateUser: string;
}

export type BehaviorResult =
  | "Login_failed_by_account"
  | "Login_failed_by_password"
  | string;

export interface UEBAInfo {
  /** 应用 ID */
  appId: string;

  /** 当前业务事件发生时的时间戳 */
  timestamp: number;

  /** 用户请求时的 ip 信息 */
  ip: string;

  /** User Agent */
  ua: string;

  /** 用户唯一标识 */
  originalIdentity: string;

  /** 行为类型 */
  behaviorType?: string;

  /** 行为类型 */
  behaviorResult?: BehaviorResult;

  /** 操作类型 */
  actionType?: string;

  /** 认证方式 */
  loginType?: string;
}

export interface AutoParseUEBAInfo {
  /** UA 设备类型 */
  deviceType: string;

  /** UA 系统类型 */
  systemType: string;

  /** UA 浏览器类型 */
  browserType: string;

  /** IP 国家 */
  country: string;

  /** IP 省份 */
  province: string;

  /** IP 城市 */
  city: string;

  /** 请求时间 */
  requestDate: string;
}
