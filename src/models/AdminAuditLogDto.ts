/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from './GeoIp';
import type { ParsedUserAgent } from './ParsedUserAgent';

export type AdminAuditLogDto = {
    /**
     * 管理员的用户 ID
     */
    adminUserId: string;
    /**
     * 管理员用户头像
     */
    adminUserAvatar: string;
    /**
     * 管理员用户显示名称，按照以下用户字段顺序进行展示：nickname > username > name > givenName > familyName -> email -> phone -> id
     */
    adminUserDisplayName: string;
    /**
     * 客户端 IP，可根据登录时的客户端 IP 进行筛选。默认不传获取所有登录 IP 的登录历史。
     */
    clientIp?: string;
    /**
     * 操作类型：
     * - `create`: 创建
     * - `delete`: 删除
     * - `import`: 导入
     * - `export`: 导出
     * - `update`: 修改
     * - `refresh`: 刷新
     * - `sync`: 同步
     * - `invite`: 邀请
     * - `resign`: 离职
     * - `recover`: 恢复
     * - `disable`: 禁用
     * - `userEnable`: 启用
     *
     */
    operationType: AdminAuditLogDto.operationType;
    /**
     * 事件类型：
     * - `user`: 用户
     * - `userpool`: 用户池
     * - `tenant`: 租户
     * - `userLoginState`: 用户登录态
     * - `userAccountState`: 用户账号状态
     * - `userGroup`: 用户分组
     * - `fieldEncryptState`: 字段加密状态
     * - `syncTask`: 同步任务
     * - `socialConnection`: 社会化身份源
     * - `enterpriseConnection`: 社会化身份源
     * - `customDatabase`: 自定义数据库
     * - `org`: 组织机构
     * - `cooperator`: 协作管理员
     * - `application`: 应用
     * - `resourceNamespace`: 权限分组
     * - `resource`: 资源
     * - `role`: 角色
     * - `roleAssign`: 角色授权
     * - `policy`: 策略
     *
     */
    resourceType: AdminAuditLogDto.resourceType;
    /**
     * 事件详情
     */
    eventDetail?: string;
    /**
     * 具体的操作参数
     */
    operationParam?: string;
    /**
     * 原始值
     */
    originValue?: string;
    /**
     * 新值
     */
    targetValue?: string;
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * User Agent
     */
    userAgent: string;
    /**
     * 解析过后的 User Agent
     */
    parsedUserAgent: ParsedUserAgent;
    /**
     * 地理位置
     */
    geoip: GeoIp;
    /**
     * 时间
     */
    timestamp: string;
    /**
     * 请求 ID
     */
    requestId: string;
};

export namespace AdminAuditLogDto {

    /**
     * 操作类型：
     * - `create`: 创建
     * - `delete`: 删除
     * - `import`: 导入
     * - `export`: 导出
     * - `update`: 修改
     * - `refresh`: 刷新
     * - `sync`: 同步
     * - `invite`: 邀请
     * - `resign`: 离职
     * - `recover`: 恢复
     * - `disable`: 禁用
     * - `userEnable`: 启用
     *
     */
    export enum operationType {
        ALL = 'all',
        CREATE = 'create',
        DELETE = 'delete',
        IMPORT = 'import',
        EXPORT = 'export',
        UPDATE = 'update',
        REFRESH = 'refresh',
        SYNC = 'sync',
        INVITE = 'invite',
        RESIGN = 'resign',
        RECOVER = 'recover',
        DISABLE = 'disable',
        ENABLE = 'enable',
        ACTIVATE = 'activate',
        DEACTIVATE = 'deactivate',
        ADD = 'add',
        REMOVE = 'remove',
        QUERY = 'query',
    }

    /**
     * 事件类型：
     * - `user`: 用户
     * - `userpool`: 用户池
     * - `tenant`: 租户
     * - `userLoginState`: 用户登录态
     * - `userAccountState`: 用户账号状态
     * - `userGroup`: 用户分组
     * - `fieldEncryptState`: 字段加密状态
     * - `syncTask`: 同步任务
     * - `socialConnection`: 社会化身份源
     * - `enterpriseConnection`: 社会化身份源
     * - `customDatabase`: 自定义数据库
     * - `org`: 组织机构
     * - `cooperator`: 协作管理员
     * - `application`: 应用
     * - `resourceNamespace`: 权限分组
     * - `resource`: 资源
     * - `role`: 角色
     * - `roleAssign`: 角色授权
     * - `policy`: 策略
     *
     */
    export enum resourceType {
        ALL = 'all',
        USER = 'user',
        USERPOOL = 'userpool',
        TENANT = 'tenant',
        USER_LOGIN_STATE = 'userLoginState',
        USER_ACCOUNT_STATE = 'userAccountState',
        USER_GROUP = 'userGroup',
        FIELD_ENCRYPT_STATE = 'fieldEncryptState',
        SYNC_TASK = 'syncTask',
        SOCIAL_CONNECTION = 'socialConnection',
        ENTERPRISE_CONNECTION = 'enterpriseConnection',
        CUSTOM_DATABASE = 'customDatabase',
        ORG = 'org',
        COOPERATOR = 'cooperator',
        APPLICATION = 'application',
        RESOURCE_NAMESPACE = 'resourceNamespace',
        RESOURCE = 'resource',
        ROLE = 'role',
        ROLE_ASSIGN = 'roleAssign',
        POLICY = 'policy',
        CUSTOM_DOMAIN = 'customDomain',
        PERMIT_SPACE = 'permitSpace',
        GENERAL_RESOURCE = 'generalResource',
        GENERAL_RESOURCE_AUTHORIZATION = 'generalResourceAuthorization',
        ROLE_SUBJECT = 'roleSubject',
        SUBJECT_OF_ROLE = 'subjectOfRole',
        DATA_RESOURCE = 'dataResource',
        DATA_POLICY = 'dataPolicy',
        AUTHORIZATION = 'authorization',
        USER_AUTHORIZATION = 'userAuthorization',
    }


}
