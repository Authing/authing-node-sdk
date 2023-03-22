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
};

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

export type BehaviorResult = 'Login_failed_by_account' | 'Login_failed_by_password' | string;

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
