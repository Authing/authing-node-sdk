/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetManagementAccessTokenDto } from "./models/GetManagementAccessTokenDto";
import type { GetManagementTokenRespDto } from "./models/GetManagementTokenRespDto";
import type { AddApplicationPermissionRecord } from "./models/AddApplicationPermissionRecord";
import type { AddDepartmentMembersReqDto } from "./models/AddDepartmentMembersReqDto";
import type { AddGroupMembersReqDto } from "./models/AddGroupMembersReqDto";
import type { AdminAuditLogRespDto } from "./models/AdminAuditLogRespDto";
import type { ApplicationPaginatedRespDto } from "./models/ApplicationPaginatedRespDto";
import type { ApplicationSimpleInfoSingleRespDto } from "./models/ApplicationSimpleInfoSingleRespDto";
import type { ApplicationSingleRespDto } from "./models/ApplicationSingleRespDto";
import type { AppListRespDto } from "./models/AppListRespDto";
import type { AssignRoleDto } from "./models/AssignRoleDto";
import type { AssociationExtIdpDto } from "./models/AssociationExtIdpDto";
import type { AuthorizedResourceListRespDto } from "./models/AuthorizedResourceListRespDto";
import type { AuthorizedResourcePaginatedRespDto } from "./models/AuthorizedResourcePaginatedRespDto";
import type { AuthorizeResourcesDto } from "./models/AuthorizeResourcesDto";
import type { CancelSyncRiskOperationDto } from "./models/CancelSyncRiskOperationDto";
import type { CancelSyncRiskOperationsRespDto } from "./models/CancelSyncRiskOperationsRespDto";
import type { CheckDomainAvailable } from "./models/CheckDomainAvailable";
import type { CheckDomainAvailableSecretRespDto } from "./models/CheckDomainAvailableSecretRespDto";
import type { CheckSessionStatusDto } from "./models/CheckSessionStatusDto";
import type { CheckSessionStatusRespDto } from "./models/CheckSessionStatusRespDto";
import type { CommonResponseDto } from "./models/CommonResponseDto";
import type { ConfigEmailProviderDto } from "./models/ConfigEmailProviderDto";
import type { CreateApplicationDto } from "./models/CreateApplicationDto";
import type { CreateDepartmentReqDto } from "./models/CreateDepartmentReqDto";
import type { CreateExtIdpConnDto } from "./models/CreateExtIdpConnDto";
import type { CreateExtIdpDto } from "./models/CreateExtIdpDto";
import type { CreateGroupBatchReqDto } from "./models/CreateGroupBatchReqDto";
import type { CreateGroupReqDto } from "./models/CreateGroupReqDto";
import type { CreateNamespaceDto } from "./models/CreateNamespaceDto";
import type { CreateNamespacesBatchDto } from "./models/CreateNamespacesBatchDto";
import type { CreateOrganizationReqDto } from "./models/CreateOrganizationReqDto";
import type { CreateRoleDto } from "./models/CreateRoleDto";
import type { CreateRolesBatch } from "./models/CreateRolesBatch";
import type { CreateSyncTaskDto } from "./models/CreateSyncTaskDto";
import type { CreateUserBatchReqDto } from "./models/CreateUserBatchReqDto";
import type { CreateUserReqDto } from "./models/CreateUserReqDto";
import type { CustomFieldListRespDto } from "./models/CustomFieldListRespDto";
import type { DeleteApplicationDto } from "./models/DeleteApplicationDto";
import type { DeleteApplicationPermissionRecord } from "./models/DeleteApplicationPermissionRecord";
import type { DeleteDepartmentReqDto } from "./models/DeleteDepartmentReqDto";
import type { DeleteExtIdpConnDto } from "./models/DeleteExtIdpConnDto";
import type { DeleteExtIdpDto } from "./models/DeleteExtIdpDto";
import type { DeleteGroupsReqDto } from "./models/DeleteGroupsReqDto";
import type { DeleteNamespaceDto } from "./models/DeleteNamespaceDto";
import type { DeleteNamespacesBatchDto } from "./models/DeleteNamespacesBatchDto";
import type { DeleteOrganizationReqDto } from "./models/DeleteOrganizationReqDto";
import type { DeleteRoleDto } from "./models/DeleteRoleDto";
import type { DeleteUsersBatchDto } from "./models/DeleteUsersBatchDto";
import type { DepartmentListRespDto } from "./models/DepartmentListRespDto";
import type { DepartmentPaginatedRespDto } from "./models/DepartmentPaginatedRespDto";
import type { DepartmentSingleRespDto } from "./models/DepartmentSingleRespDto";
import type { EmailProviderDto } from "./models/EmailProviderDto";
import type { EmailTemplateSingleItemRespDto } from "./models/EmailTemplateSingleItemRespDto";
import type { EnableExtIdpConnDto } from "./models/EnableExtIdpConnDto";
import type { ExtIdpConnDetailSingleRespDto } from "./models/ExtIdpConnDetailSingleRespDto";
import type { ExtIdpDetailSingleRespDto } from "./models/ExtIdpDetailSingleRespDto";
import type { ExtIdpListPaginatedRespDto } from "./models/ExtIdpListPaginatedRespDto";
import type { ExtIdpSingleRespDto } from "./models/ExtIdpSingleRespDto";
import type { GetAdminAuditLogsDto } from "./models/GetAdminAuditLogsDto";
import type { GetApplicationPermissionStrategyRespDto } from "./models/GetApplicationPermissionStrategyRespDto";
import type { GetApplicationSecretRespDto } from "./models/GetApplicationSecretRespDto";
import type { GetAuthorizedTargetRespDto } from "./models/GetAuthorizedTargetRespDto";
import type { GetAuthorizedTargetsDto } from "./models/GetAuthorizedTargetsDto";
import type { GetCustomDataRespDto } from "./models/GetCustomDataRespDto";
import type { GetEmailTemplatesRespDto } from "./models/GetEmailTemplatesRespDto";
import type { GetUserActionLogsDto } from "./models/GetUserActionLogsDto";
import type { GroupListRespDto } from "./models/GroupListRespDto";
import type { GroupPaginatedRespDto } from "./models/GroupPaginatedRespDto";
import type { GroupSingleRespDto } from "./models/GroupSingleRespDto";
import type { HasAnyRoleReqDto } from "./models/HasAnyRoleReqDto";
import type { HasAnyRoleRespDto } from "./models/HasAnyRoleRespDto";
import type { IdentityListRespDto } from "./models/IdentityListRespDto";
import type { ImportOtpReqDto } from "./models/ImportOtpReqDto";
import type { IsActionAllowedDto } from "./models/IsActionAllowedDto";
import type { IsActionAllowedRespDtp } from "./models/IsActionAllowedRespDtp";
import type { IsSuccessRespDto } from "./models/IsSuccessRespDto";
import type { IsUserExistsReqDto } from "./models/IsUserExistsReqDto";
import type { IsUserExistsRespDto } from "./models/IsUserExistsRespDto";
import type { IsUserInDepartmentRespDto } from "./models/IsUserInDepartmentRespDto";
import type { KickUsersDto } from "./models/KickUsersDto";
import type { ListApplicationActiveUsersDto } from "./models/ListApplicationActiveUsersDto";
import type { ListArchivedUsersSingleRespDto } from "./models/ListArchivedUsersSingleRespDto";
import type { ListUsersRequestDto } from "./models/ListUsersRequestDto";
import type { MFASettingsDto } from "./models/MFASettingsDto";
import type { MFASettingsRespDto } from "./models/MFASettingsRespDto";
import type { NamespaceListRespDto } from "./models/NamespaceListRespDto";
import type { NamespaceRespDto } from "./models/NamespaceRespDto";
import type { OrganizationListRespDto } from "./models/OrganizationListRespDto";
import type { OrganizationPaginatedRespDto } from "./models/OrganizationPaginatedRespDto";
import type { OrganizationSingleRespDto } from "./models/OrganizationSingleRespDto";
import type { PreviewEmailTemplateDto } from "./models/PreviewEmailTemplateDto";
import type { PreviewEmailTemplateRespDto } from "./models/PreviewEmailTemplateRespDto";
import type { PrincipalAuthenticationInfoPaginatedRespDto } from "./models/PrincipalAuthenticationInfoPaginatedRespDto";
import type { RefreshApplicationSecretDto } from "./models/RefreshApplicationSecretDto";
import type { RefreshApplicationSecretRespDto } from "./models/RefreshApplicationSecretRespDto";
import type { RemoveDepartmentMembersReqDto } from "./models/RemoveDepartmentMembersReqDto";
import type { RemoveGroupMembersReqDto } from "./models/RemoveGroupMembersReqDto";
import type { ResetUserPrincipalAuthenticationInfoDto } from "./models/ResetUserPrincipalAuthenticationInfoDto";
import type { ResignUserBatchReqDto } from "./models/ResignUserBatchReqDto";
import type { ResignUserReqDto } from "./models/ResignUserReqDto";
import type { ResignUserRespDto } from "./models/ResignUserRespDto";
import type { RevokeRoleDto } from "./models/RevokeRoleDto";
import type { RoleAuthorizedResourcePaginatedRespDto } from "./models/RoleAuthorizedResourcePaginatedRespDto";
import type { RoleDepartmentListPaginatedRespDto } from "./models/RoleDepartmentListPaginatedRespDto";
import type { RolePaginatedRespDto } from "./models/RolePaginatedRespDto";
import type { RoleSingleRespDto } from "./models/RoleSingleRespDto";
import type { SearchDepartmentsReqDto } from "./models/SearchDepartmentsReqDto";
import type { SecuritySettingsRespDto } from "./models/SecuritySettingsRespDto";
import type { SetCustomDataReqDto } from "./models/SetCustomDataReqDto";
import type { SetCustomFieldsReqDto } from "./models/SetCustomFieldsReqDto";
import type { SetUserBaseFieldsReqDto } from "./models/SetUserBaseFieldsReqDto";
import type { SetUserDepartmentsDto } from "./models/SetUserDepartmentsDto";
import type { SyncJobPaginatedRespDto } from "./models/SyncJobPaginatedRespDto";
import type { SyncJobSingleRespDto } from "./models/SyncJobSingleRespDto";
import type { SyncRiskOperationPaginatedRespDto } from "./models/SyncRiskOperationPaginatedRespDto";
import type { SyncTaskPaginatedRespDto } from "./models/SyncTaskPaginatedRespDto";
import type { SyncTaskSingleRespDto } from "./models/SyncTaskSingleRespDto";
import type { TriggerSyncRiskOperationDto } from "./models/TriggerSyncRiskOperationDto";
import type { TriggerSyncRiskOperationsRespDto } from "./models/TriggerSyncRiskOperationsRespDto";
import type { TriggerSyncTaskDto } from "./models/TriggerSyncTaskDto";
import type { TriggerSyncTaskRespDto } from "./models/TriggerSyncTaskRespDto";
import type { UpdateApplicationPermissionStrategyDataDto } from "./models/UpdateApplicationPermissionStrategyDataDto";
import type { UpdateDepartmentReqDto } from "./models/UpdateDepartmentReqDto";
import type { UpdateEmailTemplateDto } from "./models/UpdateEmailTemplateDto";
import type { UpdateExtIdpConnDto } from "./models/UpdateExtIdpConnDto";
import type { UpdateExtIdpDto } from "./models/UpdateExtIdpDto";
import type { UpdateGroupReqDto } from "./models/UpdateGroupReqDto";
import type { UpdateNamespaceDto } from "./models/UpdateNamespaceDto";
import type { UpdateNamespaceRespDto } from "./models/UpdateNamespaceRespDto";
import type { UpdateOrganizationReqDto } from "./models/UpdateOrganizationReqDto";
import type { UpdateRoleDto } from "./models/UpdateRoleDto";
import type { UpdateSecuritySettingsDto } from "./models/UpdateSecuritySettingsDto";
import type { UpdateSyncTaskDto } from "./models/UpdateSyncTaskDto";
import type { UpdateUserBatchReqDto } from "./models/UpdateUserBatchReqDto";
import type { UpdateUserReqDto } from "./models/UpdateUserReqDto";
import type { UserActionLogRespDto } from "./models/UserActionLogRespDto";
import type { UserDepartmentPaginatedRespDto } from "./models/UserDepartmentPaginatedRespDto";
import type { UserIdListRespDto } from "./models/UserIdListRespDto";
import type { UserListRespDto } from "./models/UserListRespDto";
import type { UserLoggedInAppsListRespDto } from "./models/UserLoggedInAppsListRespDto";
import type { UserLoggedInIdentitiesRespDto } from "./models/UserLoggedInIdentitiesRespDto";
import type { UserLoginHistoryPaginatedRespDto } from "./models/UserLoginHistoryPaginatedRespDto";
import type { UserMfaSingleRespDto } from "./models/UserMfaSingleRespDto";
import type { UserPaginatedRespDto } from "./models/UserPaginatedRespDto";
import type { UserSingleRespDto } from "./models/UserSingleRespDto";
import type { AssociationResourceDto } from "./models/AssociationResourceDto";
import type { CreateResourceDto } from "./models/CreateResourceDto";
import type { CreateResourcesBatchDto } from "./models/CreateResourcesBatchDto";
import type { DeleteResourceDto } from "./models/DeleteResourceDto";
import type { DeleteResourcesBatchDto } from "./models/DeleteResourcesBatchDto";
import type { ResourceListRespDto } from "./models/ResourceListRespDto";
import type { ResourcePaginatedRespDto } from "./models/ResourcePaginatedRespDto";
import type { ResourceRespDto } from "./models/ResourceRespDto";
import type { UpdateResourceDto } from "./models/UpdateResourceDto";
import type { CreatePipelineFunctionDto } from "./models/CreatePipelineFunctionDto";
import type { DeletePipelineFunctionDto } from "./models/DeletePipelineFunctionDto";
import type { PipelineFunctionPaginatedRespDto } from "./models/PipelineFunctionPaginatedRespDto";
import type { PipelineFunctionSingleRespDto } from "./models/PipelineFunctionSingleRespDto";
import type { ReUploadPipelineFunctionDto } from "./models/ReUploadPipelineFunctionDto";
import type { UpdatePipelineFunctionDto } from "./models/UpdatePipelineFunctionDto";
import type { UpdatePipelineOrderDto } from "./models/UpdatePipelineOrderDto";
import type { CreateWebhookDto } from "./models/CreateWebhookDto";
import type { CreateWebhookRespDto } from "./models/CreateWebhookRespDto";
import type { DeleteWebhookDto } from "./models/DeleteWebhookDto";
import type { DeleteWebhookRespDto } from "./models/DeleteWebhookRespDto";
import type { GetWebhookRespDto } from "./models/GetWebhookRespDto";
import type { GetWebhooksRespDto } from "./models/GetWebhooksRespDto";
import type { ListWebhookLogs } from "./models/ListWebhookLogs";
import type { ListWebhookLogsRespDto } from "./models/ListWebhookLogsRespDto";
import type { TriggerWebhookDto } from "./models/TriggerWebhookDto";
import type { TriggerWebhookRespDto } from "./models/TriggerWebhookRespDto";
import type { UpdateWebhookDto } from "./models/UpdateWebhookDto";
import type { UpdateWebhooksRespDto } from "./models/UpdateWebhooksRespDto";
import type { WebhookEventListRespDto } from "./models/WebhookEventListRespDto";

import {
  DEFAULT_OPTIONS,
  ManagementClientOptions,
} from "./ManagementClientOptions";
import { ManagementHttpClient } from "./ManagementHttpClient";
import { domainC14n } from "./utils";
import Axios, { AxiosRequestConfig } from "axios";

export class ManagementClient {
  private httpClient: ManagementHttpClient;
  private options: ManagementClientOptions;
  constructor(options: ManagementClientOptions) {
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

  public async makeRequest(params: AxiosRequestConfig) {
    return await this.httpClient.request(params);
  }

  /**
   * @summary 获取 Management API Token
   * @description 通过 AccessKey ID 与 AccessKey Secret 获取 Management API Token，此 Token 可以用来操作 Management API。
   * @returns GetManagementTokenRespDto
   */
  public async getManagementToken(
    requestBody: GetManagementAccessTokenDto
  ): Promise<GetManagementTokenRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-management-token",
      data: requestBody,
    });
  }

  /**
   * @summary 获取/搜索用户列表
   * @description
   * 此接口用于获取用户列表，支持模糊搜索，以及通过用户基础字段、用户自定义字段、用户所在部门、用户历史登录应用等维度筛选用户。
   *
   * ### 模糊搜素示例
   *
   * 模糊搜索默认会从 `phone`, `email`, `name`, `username`, `nickname` 五个字段对用户进行模糊搜索，你也可以通过设置 `options.fuzzySearchOn`
   * 决定模糊匹配的字段范围：
   *
   * ```json
   * {
   * "query": "北京",
   * "options": {
   * "fuzzySearchOn": [
   * "address"
   * ]
   * }
   * }
   * ```
   *
   * ### 高级搜索示例
   *
   * 你可以通过 `advancedFilter` 进行高级搜索，高级搜索支持通过用户的基础信息、自定义数据、所在部门、用户来源、登录应用、外部身份源信息等维度对用户进行筛选。
   * **且这些筛选条件可以任意组合。**
   *
   * #### 筛选状态为禁用的用户
   *
   * 用户状态（`status`）为字符串类型，可选值为 `Activated` 和 `Suspended`：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "status",
   * "operator": "EQUAL",
   * "value": "Suspended"
   * }
   * ]
   * }
   * ```
   *
   * #### 筛选邮箱中包含 `@example.com` 的用户
   *
   * 用户邮箱（`email`）为字符串类型，可以进行模糊搜索：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "email",
   * "operator": "CONTAINS",
   * "value": "@example.com"
   * }
   * ]
   * }
   * ```
   *
   * #### 根据用户登录次数筛选
   *
   * 筛选登录次数大于 10 的用户：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "loginsCount",
   * "operator": "GREATER",
   * "value": 10
   * }
   * ]
   * }
   * ```
   *
   * 筛选登录次数在 10 - 100 次的用户：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "loginsCount",
   * "operator": "BETWEEN",
   * "value": [10, 100]
   * }
   * ]
   * }
   * ```
   *
   * #### 根据用户上次登录时间进行筛选
   *
   * 筛选最近 7 天内登录过的用户：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "lastLoginTime",
   * "operator": "GREATER",
   * "value": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
   * }
   * ]
   * }
   * ```
   *
   * 筛选在某一段时间内登录过的用户：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "lastLoginTime",
   * "operator": "BETWEEN",
   * "value": [
   * new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
   * new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
   * ]
   * }
   * ]
   * }
   * ```
   *
   * #### 根据用户曾经登录过的应用筛选
   *
   * 筛选出曾经登录过应用 `appId1` 或者 `appId2` 的用户：
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "loggedInApps",
   * "operator": "IN",
   * "value": [
   * "appId1",
   * "appId2"
   * ]
   * }
   * ]
   * }
   * ```
   *
   * #### 根据用户所在部门进行筛选
   *
   * ```json
   * {
   * "advancedFilter": [
   * {
   * "field": "department",
   * "operator": "IN",
   * "value": [
   * {
   * "organizationCode": "steamory",
   * "departmentId": "root",
   * "departmentIdType": "department_id",
   * "includeChildrenDepartments": true
   * }
   * ]
   * }
   * ]
   * }
   * ```
   *
   *
   * @returns UserPaginatedRespDto
   */
  public async listUsers(
    requestBody: ListUsersRequestDto
  ): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/list-users",
      data: requestBody,
    });
  }

  /**
   * @deprecated
   * @summary 获取用户列表
   * @description 获取用户列表接口，支持分页，可以选择获取自定义数据、identities 等。
   * @returns UserPaginatedRespDto
   */
  public async listUsersLegacy({
    page = 1,
    limit = 10,
    status,
    updatedAtStart,
    updatedAtEnd,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 账户当前状态，如 已停用、已离职、正常状态、已归档 **/
    status?:
      | "Suspended"
      | "Resigned"
      | "Activated"
      | "Archived"
      | "Deactivated";
    /** 用户创建、修改开始时间，为精确到秒的 UNIX 时间戳；支持获取从某一段时间之后的增量数据 **/
    updatedAtStart?: number;
    /** 用户创建、修改终止时间，为精确到秒的 UNIX 时间戳；支持获取某一段时间内的增量数据。默认为当前时间 **/
    updatedAtEnd?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-users",
      params: {
        page: page,
        limit: limit,
        status: status,
        updatedAtStart: updatedAtStart,
        updatedAtEnd: updatedAtEnd,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 获取用户信息
   * @description 通过用户 ID，获取用户详情，可以选择获取自定义数据、identities、选择指定用户 ID 类型等。
   * @returns UserSingleRespDto
   */
  public async getUser({
    userId,
    userIdType = "user_id",
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 用户 ID **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user",
      params: {
        userId: userId,
        userIdType: userIdType,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 批量获取用户信息
   * @description 通过用户 ID 列表，批量获取用户信息，可以选择获取自定义数据、identities、选择指定用户 ID 类型等。
   * @returns UserListRespDto
   */
  public async getUserBatch({
    userIds,
    userIdType = "user_id",
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 用户 ID 数组 **/
    userIds: Array<string>;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-batch",
      params: {
        userIds: userIds,
        userIdType: userIdType,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 获取用户的外部身份源
   * @description 通过用户 ID，获取用户的外部身份源、选择指定用户 ID 类型。
   * @returns IdentityListRespDto
   */
  public async getUserIdentities({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<IdentityListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-identities",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 获取用户角色列表
   * @description 通过用户 ID，获取用户角色列表，可以选择所属权限分组 code、选择指定用户 ID 类型等。
   * @returns RolePaginatedRespDto
   */
  public async getUserRoles({
    userId,
    userIdType = "user_id",
    namespace,
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 所属权限分组的 code **/
    namespace?: string;
  }): Promise<RolePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-roles",
      params: {
        userId: userId,
        userIdType: userIdType,
        namespace: namespace,
      },
    });
  }

  /**
   * @summary 获取用户实名认证信息
   * @description 通过用户 ID，获取用户实名认证信息，可以选择指定用户 ID 类型。
   * @returns PrincipalAuthenticationInfoPaginatedRespDto
   */
  public async getUserPrincipalAuthenticationInfo({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<PrincipalAuthenticationInfoPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-principal-authentication-info",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 删除用户实名认证信息
   * @description 通过用户 ID，删除用户实名认证信息，可以选择指定用户 ID 类型等。
   * @returns IsSuccessRespDto
   */
  public async resetUserPrincipalAuthenticationInfo(
    requestBody: ResetUserPrincipalAuthenticationInfoDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reset-user-principal-authentication-info",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户部门列表
   * @description 通过用户 ID，获取用户部门列表，支持分页，可以选择获取自定义数据、选择指定用户 ID 类型、增序或降序等。
   * @returns UserDepartmentPaginatedRespDto
   */
  public async getUserDepartments({
    userId,
    userIdType = "user_id",
    page = 1,
    limit = 10,
    withCustomData = false,
    sortBy = "JoinDepartmentAt",
    orderBy = "Desc",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符 **/
    sortBy?:
      | "DepartmentCreatedAt"
      | "JoinDepartmentAt"
      | "DepartmentName"
      | "DepartmemtCode";
    /** 增序或降序 **/
    orderBy?: "Asc" | "Desc";
  }): Promise<UserDepartmentPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-departments",
      params: {
        userId: userId,
        userIdType: userIdType,
        page: page,
        limit: limit,
        withCustomData: withCustomData,
        sortBy: sortBy,
        orderBy: orderBy,
      },
    });
  }

  /**
   * @summary 设置用户所在部门
   * @description 通过用户 ID，设置用户所在部门，可以选择指定用户 ID 类型等。
   * @returns IsSuccessRespDto
   */
  public async setUserDepartments(
    requestBody: SetUserDepartmentsDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-user-departments",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户分组列表
   * @description 通过用户 ID，获取用户分组列表，可以选择指定用户 ID 类型等。
   * @returns GroupPaginatedRespDto
   */
  public async getUserGroups({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<GroupPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-groups",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 删除用户
   * @description 通过用户 ID 列表，删除用户，支持批量删除，可以选择指定用户 ID 类型等。
   * @returns IsSuccessRespDto
   */
  public async deleteUsersBatch(
    requestBody: DeleteUsersBatchDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-users-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户 MFA 绑定信息
   * @description 通过用户 ID，获取用户 MFA 绑定信息，可以选择指定用户 ID 类型等。
   * @returns UserMfaSingleRespDto
   */
  public async getUserMfaInfo({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<UserMfaSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-mfa-info",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 获取已归档的用户列表
   * @description 获取已归档的用户列表，支持分页，可以筛选开始时间等。
   * @returns ListArchivedUsersSingleRespDto
   */
  public async listArchivedUsers({
    page = 1,
    limit = 10,
    startAt,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 开始时间，为精确到秒的 UNIX 时间戳，默认不指定 **/
    startAt?: number;
  }): Promise<ListArchivedUsersSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-archived-users",
      params: {
        page: page,
        limit: limit,
        startAt: startAt,
      },
    });
  }

  /**
   * @summary 强制下线用户
   * @description 通过用户 ID、App ID 列表，强制让用户下线，可以选择指定用户 ID 类型等。
   * @returns IsSuccessRespDto
   */
  public async kickUsers(requestBody: KickUsersDto): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/kick-users",
      data: requestBody,
    });
  }

  /**
   * @summary 判断用户是否存在
   * @description 根据条件判断用户是否存在，可以筛选用户名、邮箱、手机号、第三方外部 ID 等。
   * @returns IsUserExistsRespDto
   */
  public async isUserExists(
    requestBody: IsUserExistsReqDto
  ): Promise<IsUserExistsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/is-user-exists",
      data: requestBody,
    });
  }

  /**
   * @summary 创建用户
   * @description 创建用户，邮箱、手机号、用户名必须包含其中一个，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份创建用户因此不需要进行手机号验证码检验等安全检测。
   * @returns UserSingleRespDto
   */
  public async createUser(
    requestBody: CreateUserReqDto
  ): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-user",
      data: requestBody,
    });
  }

  /**
   * @summary 批量创建用户
   * @description 批量创建用户，邮箱、手机号、用户名必须包含其中一个，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份批量创建用户因此不需要进行手机号验证码检验等安全检测。
   * @returns UserListRespDto
   */
  public async createUsersBatch(
    requestBody: CreateUserBatchReqDto
  ): Promise<UserListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-users-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 修改用户资料
   * @description 通过用户 ID，修改用户资料，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份修改用户资料因此不需要进行手机号验证码检验等安全检测。
   * @returns UserSingleRespDto
   */
  public async updateUser(
    requestBody: UpdateUserReqDto
  ): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-user",
      data: requestBody,
    });
  }

  /**
   * @summary 修改用户资料
   * @description 通过用户 ID，修改用户资料，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份修改用户资料因此不需要进行手机号验证码检验等安全检测。
   * @returns UserListRespDto
   */
  public async updateUserBatch(
    requestBody: UpdateUserBatchReqDto
  ): Promise<UserListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-user-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户可访问的应用
   * @description 通过用户 ID，获取用户可访问的应用，可以选择指定用户 ID 类型等。
   * @returns AppListRespDto
   */
  public async getUserAccessibleApps({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<AppListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-accessible-apps",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 获取用户授权的应用
   * @description 通过用户 ID，获取用户授权的应用，可以选择指定用户 ID 类型等。
   * @returns AppListRespDto
   */
  public async getUserAuthorizedApps({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<AppListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-authorized-apps",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 判断用户是否有某个角色
   * @description 通过用户 ID，判断用户是否有某个角色，支持传入多个角色，可以选择指定用户 ID 类型等。
   * @returns HasAnyRoleRespDto
   */
  public async hasAnyRole(
    requestBody: HasAnyRoleReqDto
  ): Promise<HasAnyRoleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/has-any-role",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户的登录历史记录
   * @description 通过用户 ID，获取用户登录历史记录，支持分页，可以选择指定用户 ID 类型、应用 ID、开始与结束时间戳等。
   * @returns UserLoginHistoryPaginatedRespDto
   */
  public async getUserLoginHistory({
    userId,
    userIdType = "user_id",
    appId,
    clientIp,
    start,
    end,
    page = 1,
    limit = 10,
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 应用 ID **/
    appId?: string;
    /** 客户端 IP **/
    clientIp?: string;
    /** 开始时间戳（毫秒） **/
    start?: number;
    /** 结束时间戳（毫秒） **/
    end?: number;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<UserLoginHistoryPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-login-history",
      params: {
        userId: userId,
        userIdType: userIdType,
        appId: appId,
        clientIp: clientIp,
        start: start,
        end: end,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 获取用户曾经登录过的应用
   * @description 通过用户 ID，获取用户曾经登录过的应用，可以选择指定用户 ID 类型等。
   * @returns UserLoggedInAppsListRespDto
   */
  public async getUserLoggedinApps({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<UserLoggedInAppsListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-loggedin-apps",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 获取用户曾经登录过的身份源
   * @description 通过用户 ID，获取用户曾经登录过的身份源，可以选择指定用户 ID 类型等。
   * @returns UserLoggedInIdentitiesRespDto
   */
  public async getUserLoggedinIdentities({
    userId,
    userIdType = "user_id",
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
  }): Promise<UserLoggedInIdentitiesRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-logged-in-identities",
      params: {
        userId: userId,
        userIdType: userIdType,
      },
    });
  }

  /**
   * @summary 用户离职
   * @description 通过用户 ID，对用户进行离职操作
   * @returns ResignUserRespDto
   */
  public async resignUser(
    requestBody: ResignUserReqDto
  ): Promise<ResignUserRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/resign-user",
      data: requestBody,
    });
  }

  /**
   * @summary 批量用户离职
   * @description 通过用户 ID，对用户进行离职操作
   * @returns ResignUserRespDto
   */
  public async resignUserBatch(
    requestBody: ResignUserBatchReqDto
  ): Promise<ResignUserRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/resign-user-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户被授权的所有资源
   * @description 通过用户 ID，获取用户被授权的所有资源，可以选择指定用户 ID 类型等，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合。
   * @returns AuthorizedResourcePaginatedRespDto
   */
  public async getUserAuthorizedResources({
    userId,
    userIdType = "user_id",
    namespace,
    resourceType,
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     * - `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。
     * 示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。
     *  **/
    userIdType?:
      | "user_id"
      | "external_id"
      | "phone"
      | "email"
      | "username"
      | "identity";
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 资源类型，如 数据、API、菜单、按钮 **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
  }): Promise<AuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-authorized-resources",
      params: {
        userId: userId,
        userIdType: userIdType,
        namespace: namespace,
        resourceType: resourceType,
      },
    });
  }

  /**
   * @summary 检查某个用户在应用下是否具备 Session 登录态
   * @description 检查某个用户在应用下是否具备 Session 登录态
   * @returns CheckSessionStatusRespDto
   */
  public async checkSessionStatus(
    requestBody: CheckSessionStatusDto
  ): Promise<CheckSessionStatusRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/check-session-status",
      data: requestBody,
    });
  }

  /**
   * @summary 导入用户的 OTP
   * @description 导入用户的 OTP
   * @returns CommonResponseDto
   */
  public async importOtp(
    requestBody: ImportOtpReqDto
  ): Promise<CommonResponseDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/import-otp",
      data: requestBody,
    });
  }

  /**
   * @summary 获取组织机构详情
   * @description 获取组织机构详情
   * @returns OrganizationSingleRespDto
   */
  public async getOrganization({
    organizationCode,
    withCustomData = false,
  }: {
    /** 组织 Code（organizationCode） **/
    organizationCode: string;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<OrganizationSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-organization",
      params: {
        organizationCode: organizationCode,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 批量获取组织机构详情
   * @description 批量获取组织机构详情
   * @returns OrganizationListRespDto
   */
  public async getOrganizationsBatch({
    organizationCodeList,
    withCustomData = false,
  }: {
    /** 组织 Code（organizationCode）列表 **/
    organizationCodeList: Array<string>;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<OrganizationListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-organization-batch",
      params: {
        organizationCodeList: organizationCodeList,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 获取顶层组织机构列表
   * @description 获取顶层组织机构列表，支持分页。
   * @returns OrganizationPaginatedRespDto
   */
  public async listOrganizations({
    page = 1,
    limit = 10,
    fetchAll = false,
    withCustomData = false,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 拉取所有 **/
    fetchAll?: boolean;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<OrganizationPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-organizations",
      params: {
        page: page,
        limit: limit,
        fetchAll: fetchAll,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 创建顶层组织机构
   * @description 创建组织机构，会创建一个只有一个节点的组织机构，可以选择组织描述信息、根节点自定义 ID、多语言等。
   * @returns OrganizationSingleRespDto
   */
  public async createOrganization(
    requestBody: CreateOrganizationReqDto
  ): Promise<OrganizationSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-organization",
      data: requestBody,
    });
  }

  /**
   * @summary 修改顶层组织机构
   * @description 通过组织 code，修改顶层组织机构，可以选择部门描述、新组织 code、组织名称等。
   * @returns OrganizationSingleRespDto
   */
  public async updateOrganization(
    requestBody: UpdateOrganizationReqDto
  ): Promise<OrganizationSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-organization",
      data: requestBody,
    });
  }

  /**
   * @summary 删除组织机构
   * @description 通过组织 code，删除组织机构树。
   * @returns IsSuccessRespDto
   */
  public async deleteOrganization(
    requestBody: DeleteOrganizationReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-organization",
      data: requestBody,
    });
  }

  /**
   * @summary 搜索顶层组织机构列表
   * @description 通过搜索关键词，搜索顶层组织机构列表，支持分页。
   * @returns OrganizationPaginatedRespDto
   */
  public async searchOrganizations({
    keywords,
    page = 1,
    limit = 10,
    withCustomData = false,
  }: {
    /** 搜索关键词，如组织机构名称 **/
    keywords: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<OrganizationPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/search-organizations",
      params: {
        keywords: keywords,
        page: page,
        limit: limit,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 获取部门信息
   * @description 通过组织 code 以及 部门 ID 或 部门 code，获取部门信息，可以获取自定义数据。
   * @returns DepartmentSingleRespDto
   */
  public async getDepartment({
    organizationCode,
    departmentId,
    departmentCode,
    departmentIdType = "department_id",
    withCustomData = false,
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。 **/
    departmentId?: string;
    /** 部门 code。departmentId 和 departmentCode 必传其一。 **/
    departmentCode?: string;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-department",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        departmentCode: departmentCode,
        departmentIdType: departmentIdType,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 创建部门
   * @description 通过组织 code、部门名称、父部门 ID，创建部门，可以设置多种参数。
   * @returns DepartmentSingleRespDto
   */
  public async createDepartment(
    requestBody: CreateDepartmentReqDto
  ): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-department",
      data: requestBody,
    });
  }

  /**
   * @summary 修改部门
   * @description 通过组织 code、部门 ID，修改部门，可以设置多种参数。
   * @returns DepartmentSingleRespDto
   */
  public async updateDepartment(
    requestBody: UpdateDepartmentReqDto
  ): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-department",
      data: requestBody,
    });
  }

  /**
   * @summary 删除部门
   * @description 通过组织 code、部门 ID，删除部门。
   * @returns IsSuccessRespDto
   */
  public async deleteDepartment(
    requestBody: DeleteDepartmentReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-department",
      data: requestBody,
    });
  }

  /**
   * @summary 搜索部门
   * @description 通过组织 code、搜索关键词，搜索部门，可以搜索组织名称等。
   * @returns DepartmentListRespDto
   */
  public async searchDepartments(
    requestBody: SearchDepartmentsReqDto
  ): Promise<DepartmentListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/search-departments",
      data: requestBody,
    });
  }

  /**
   * @summary 获取子部门列表
   * @description 通过组织 code、部门 ID，获取子部门列表，可以选择获取自定义数据、虚拟组织等。
   * @returns DepartmentPaginatedRespDto
   */
  public async listChildrenDepartments({
    organizationCode,
    departmentId,
    departmentIdType = "department_id",
    excludeVirtualNode = false,
    onlyVirtualNode = false,
    withCustomData = false,
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 需要获取的部门 ID **/
    departmentId: string;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否要排除虚拟组织 **/
    excludeVirtualNode?: boolean;
    /** 是否只包含虚拟组织 **/
    onlyVirtualNode?: boolean;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<DepartmentPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-children-departments",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        departmentIdType: departmentIdType,
        excludeVirtualNode: excludeVirtualNode,
        onlyVirtualNode: onlyVirtualNode,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 获取部门成员列表
   * @description 通过组织 code、部门 ID、排序，获取部门成员列表，支持分页，可以选择获取自定义数据、identities 等。
   * @returns UserPaginatedRespDto
   */
  public async listDepartmentMembers({
    organizationCode,
    departmentId,
    sortBy = "JoinDepartmentAt",
    orderBy = "Desc",
    departmentIdType = "department_id",
    includeChildrenDepartments = false,
    page = 1,
    limit = 10,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID，根部门传 `root` **/
    departmentId: string;
    /** 排序依据 **/
    sortBy?: "Default" | "JoinDepartmentAt";
    /** 增序还是倒序 **/
    orderBy?: "Asc" | "Desc";
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否包含子部门的成员 **/
    includeChildrenDepartments?: boolean;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-department-members",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        sortBy: sortBy,
        orderBy: orderBy,
        departmentIdType: departmentIdType,
        includeChildrenDepartments: includeChildrenDepartments,
        page: page,
        limit: limit,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 获取部门直属成员 ID 列表
   * @description 通过组织 code、部门 ID，获取部门直属成员 ID 列表。
   * @returns UserIdListRespDto
   */
  public async listDepartmentMemberIds({
    organizationCode,
    departmentId,
    departmentIdType = "department_id",
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID，根部门传 `root` **/
    departmentId: string;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
  }): Promise<UserIdListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-department-member-ids",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        departmentIdType: departmentIdType,
      },
    });
  }

  /**
   * @summary 搜索部门下的成员
   * @description 通过组织 code、部门 ID、搜索关键词，搜索部门下的成员，支持分页，可以选择获取自定义数据、identities 等。
   * @returns UserPaginatedRespDto
   */
  public async searchDepartmentMembers({
    organizationCode,
    departmentId,
    keywords,
    page = 1,
    limit = 10,
    departmentIdType = "department_id",
    includeChildrenDepartments = false,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID，根部门传 `root` **/
    departmentId: string;
    /** 搜索关键词，如成员名称 **/
    keywords: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否包含子部门的成员 **/
    includeChildrenDepartments?: boolean;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/search-department-members",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        keywords: keywords,
        page: page,
        limit: limit,
        departmentIdType: departmentIdType,
        includeChildrenDepartments: includeChildrenDepartments,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 部门下添加成员
   * @description 通过部门 ID、组织 code，添加部门下成员。
   * @returns IsSuccessRespDto
   */
  public async addDepartmentMembers(
    requestBody: AddDepartmentMembersReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/add-department-members",
      data: requestBody,
    });
  }

  /**
   * @summary 部门下删除成员
   * @description 通过部门 ID、组织 code，删除部门下成员。
   * @returns IsSuccessRespDto
   */
  public async removeDepartmentMembers(
    requestBody: RemoveDepartmentMembersReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/remove-department-members",
      data: requestBody,
    });
  }

  /**
   * @summary 获取父部门信息
   * @description 通过组织 code、部门 ID，获取父部门信息，可以选择获取自定义数据等。
   * @returns DepartmentSingleRespDto
   */
  public async getParentDepartment({
    organizationCode,
    departmentId,
    departmentIdType = "department_id",
    withCustomData = false,
  }: {
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID **/
    departmentId: string;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
  }): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-parent-department",
      params: {
        organizationCode: organizationCode,
        departmentId: departmentId,
        departmentIdType: departmentIdType,
        withCustomData: withCustomData,
      },
    });
  }

  /**
   * @summary 判断用户是否在某个部门下
   * @description 通过组织 code、部门 ID，判断用户是否在某个部门下，可以选择包含子部门。
   * @returns IsUserInDepartmentRespDto
   */
  public async isUserInDepartment({
    userId,
    organizationCode,
    departmentId,
    departmentIdType = "department_id",
    includeChildrenDepartments = false,
  }: {
    /** 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。 **/
    userId: string;
    /** 组织 code **/
    organizationCode: string;
    /** 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。 **/
    departmentId: string;
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: "department_id" | "open_department_id";
    /** 是否包含子部门 **/
    includeChildrenDepartments?: boolean;
  }): Promise<IsUserInDepartmentRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/is-user-in-department",
      params: {
        userId: userId,
        organizationCode: organizationCode,
        departmentId: departmentId,
        departmentIdType: departmentIdType,
        includeChildrenDepartments: includeChildrenDepartments,
      },
    });
  }

  /**
   * @summary 获取分组详情
   * @description 通过分组 code，获取分组详情。
   * @returns GroupSingleRespDto
   */
  public async getGroup({
    code,
  }: {
    /** 分组 code **/
    code: string;
  }): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-group",
      params: {
        code: code,
      },
    });
  }

  /**
   * @summary 获取分组列表
   * @description 获取分组列表，支持分页。
   * @returns GroupPaginatedRespDto
   */
  public async listGroups({
    keywords,
    page = 1,
    limit = 10,
  }: {
    /** 搜索分组 code 或分组名称 **/
    keywords?: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<GroupPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-groups",
      params: {
        keywords: keywords,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 创建分组
   * @description 创建分组，一个分组必须包含分组名称与唯一标志符 code，且必须为一个合法的英文标志符，如 developers。
   * @returns GroupSingleRespDto
   */
  public async createGroup(
    requestBody: CreateGroupReqDto
  ): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-group",
      data: requestBody,
    });
  }

  /**
   * @summary 批量创建分组
   * @description 批量创建分组，一个分组必须包含分组名称与唯一标志符 code，且必须为一个合法的英文标志符，如 developers。
   * @returns GroupListRespDto
   */
  public async createGroupsBatch(
    requestBody: CreateGroupBatchReqDto
  ): Promise<GroupListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-groups-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 修改分组
   * @description 通过分组 code，修改分组，可以修改此分组的 code。
   * @returns GroupSingleRespDto
   */
  public async updateGroup(
    requestBody: UpdateGroupReqDto
  ): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-group",
      data: requestBody,
    });
  }

  /**
   * @summary 批量删除分组
   * @description 通过分组 code，批量删除分组。
   * @returns IsSuccessRespDto
   */
  public async deleteGroupsBatch(
    requestBody: DeleteGroupsReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-groups-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 添加分组成员
   * @description 添加分组成员，成员以用户 ID 数组形式传递。
   * @returns IsSuccessRespDto
   */
  public async addGroupMembers(
    requestBody: AddGroupMembersReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/add-group-members",
      data: requestBody,
    });
  }

  /**
   * @summary 批量移除分组成员
   * @description 批量移除分组成员，成员以用户 ID 数组形式传递。
   * @returns IsSuccessRespDto
   */
  public async removeGroupMembers(
    requestBody: RemoveGroupMembersReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/remove-group-members",
      data: requestBody,
    });
  }

  /**
   * @summary 获取分组成员列表
   * @description 通过分组 code，获取分组成员列表，支持分页，可以获取自定义数据、identities、部门 ID 列表。
   * @returns UserPaginatedRespDto
   */
  public async listGroupMembers({
    code,
    page = 1,
    limit = 10,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
  }: {
    /** 分组 code **/
    code: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
  }): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-group-members",
      params: {
        code: code,
        page: page,
        limit: limit,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
      },
    });
  }

  /**
   * @summary 获取分组被授权的资源列表
   * @description 通过分组 code，获取分组被授权的资源列表，可以通过资源类型、权限分组 code 筛选。
   * @returns AuthorizedResourceListRespDto
   */
  public async getGroupAuthorizedResources({
    code,
    namespace,
    resourceType,
  }: {
    /** 分组 code **/
    code: string;
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 资源类型 **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
  }): Promise<AuthorizedResourceListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-group-authorized-resources",
      params: {
        code: code,
        namespace: namespace,
        resourceType: resourceType,
      },
    });
  }

  /**
   * @summary 获取角色详情
   * @description 通过权限分组内角色 code，获取角色详情。
   * @returns RoleSingleRespDto
   */
  public async getRole({
    code,
    namespace,
  }: {
    /** 权限分组内角色的唯一标识符 **/
    code: string;
    /** 所属权限分组的 code **/
    namespace?: string;
  }): Promise<RoleSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-role",
      params: {
        code: code,
        namespace: namespace,
      },
    });
  }

  /**
   * @summary 分配角色
   * @description 通过权限分组内角色 code，分配角色，被分配者可以是用户或部门。
   * @returns IsSuccessRespDto
   */
  public async assignRole(
    requestBody: AssignRoleDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/assign-role",
      data: requestBody,
    });
  }

  /**
   * @summary 移除分配的角色
   * @description 通过权限分组内角色 code，移除分配的角色，被分配者可以是用户或部门。
   * @returns IsSuccessRespDto
   */
  public async revokeRole(
    requestBody: RevokeRoleDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/revoke-role",
      data: requestBody,
    });
  }

  /**
   * @summary 获取角色被授权的资源列表
   * @description 通过权限分组内角色 code，获取角色被授权的资源列表。
   * @returns RoleAuthorizedResourcePaginatedRespDto
   */
  public async getRoleAuthorizedResources({
    code,
    namespace,
    resourceType,
  }: {
    /** 权限分组内角色的唯一标识符 **/
    code: string;
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 资源类型，如 数据、API、按钮、菜单 **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
  }): Promise<RoleAuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-role-authorized-resources",
      params: {
        code: code,
        namespace: namespace,
        resourceType: resourceType,
      },
    });
  }

  /**
   * @summary 获取角色成员列表
   * @description 通过权限分组内内角色 code，获取角色成员列表，支持分页，可以选择或获取自定义数据、identities 等。
   * @returns UserPaginatedRespDto
   */
  public async listRoleMembers({
    code,
    page = 1,
    limit = 10,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
    namespace,
  }: {
    /** 权限分组内角色的唯一标识符 **/
    code: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否获取自定义数据 **/
    withCustomData?: boolean;
    /** 是否获取 identities **/
    withIdentities?: boolean;
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean;
    /** 所属权限分组的 code **/
    namespace?: string;
  }): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-role-members",
      params: {
        page: page,
        limit: limit,
        withCustomData: withCustomData,
        withIdentities: withIdentities,
        withDepartmentIds: withDepartmentIds,
        code: code,
        namespace: namespace,
      },
    });
  }

  /**
   * @summary 获取角色的部门列表
   * @description 通过权限分组内角色 code，获取角色的部门列表，支持分页。
   * @returns RoleDepartmentListPaginatedRespDto
   */
  public async listRoleDepartments({
    code,
    namespace,
    page = 1,
    limit = 10,
  }: {
    /** 权限分组内角色的唯一标识符 **/
    code: string;
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<RoleDepartmentListPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-role-departments",
      params: {
        code: code,
        namespace: namespace,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 创建角色
   * @description 通过权限分组内角色 code，创建角色，可以选择权限分组、角色描述等。
   * @returns RoleSingleRespDto
   */
  public async createRole(
    requestBody: CreateRoleDto
  ): Promise<RoleSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-role",
      data: requestBody,
    });
  }

  /**
   * @summary 获取角色列表
   * @description 获取角色列表，支持分页。
   * @returns RolePaginatedRespDto
   */
  public async listRoles({
    keywords,
    namespace = "default",
    page = 1,
    limit = 10,
  }: {
    /** 搜索角色 code **/
    keywords?: string;
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<RolePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-roles",
      params: {
        keywords: keywords,
        namespace: namespace,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 删除角色
   * @description 删除角色，可以批量删除。
   * @returns IsSuccessRespDto
   */
  public async deleteRolesBatch(
    requestBody: DeleteRoleDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-roles-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 批量创建角色
   * @description 批量创建角色，可以选择权限分组、角色描述等。
   * @returns IsSuccessRespDto
   */
  public async createRolesBatch(
    requestBody: CreateRolesBatch
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-roles-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 修改角色
   * @description 通过权限分组内角色新旧 code，修改角色，可以选择角色描述等。
   * @returns IsSuccessRespDto
   */
  public async updateRole(
    requestBody: UpdateRoleDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-role",
      data: requestBody,
    });
  }

  /**
   * @summary 获取身份源列表
   * @description 获取身份源列表，可以指定 租户 ID 筛选。
   * @returns ExtIdpListPaginatedRespDto
   */
  public async listExtIdp({
    tenantId,
    appId,
  }: {
    /** 租户 ID **/
    tenantId?: string;
    /** 应用 ID **/
    appId?: string;
  }): Promise<ExtIdpListPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-ext-idp",
      params: {
        tenantId: tenantId,
        appId: appId,
      },
    });
  }

  /**
   * @summary 获取身份源详情
   * @description 通过 身份源 ID，获取身份源详情，可以指定 租户 ID 筛选。
   * @returns ExtIdpDetailSingleRespDto
   */
  public async getExtIdp({
    id,
    tenantId,
    appId,
    type,
  }: {
    /** 身份源 ID **/
    id: string;
    /** 租户 ID **/
    tenantId?: string;
    /** 应用 ID **/
    appId?: string;
    /** 身份源类型 **/
    type?: any;
  }): Promise<ExtIdpDetailSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-ext-idp",
      params: {
        tenantId: tenantId,
        appId: appId,
        id: id,
        type: type,
      },
    });
  }

  /**
   * @summary 创建身份源
   * @description 创建身份源，可以设置身份源名称、连接类型、租户 ID 等。
   * @returns ExtIdpSingleRespDto
   */
  public async createExtIdp(
    requestBody: CreateExtIdpDto
  ): Promise<ExtIdpSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-ext-idp",
      data: requestBody,
    });
  }

  /**
   * @summary 更新身份源配置
   * @description 更新身份源配置，可以设置身份源 ID 与 名称。
   * @returns ExtIdpSingleRespDto
   */
  public async updateExtIdp(
    requestBody: UpdateExtIdpDto
  ): Promise<ExtIdpSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-ext-idp",
      data: requestBody,
    });
  }

  /**
   * @summary 删除身份源
   * @description 通过身份源 ID，删除身份源。
   * @returns IsSuccessRespDto
   */
  public async deleteExtIdp(
    requestBody: DeleteExtIdpDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-ext-idp",
      data: requestBody,
    });
  }

  /**
   * @summary 在某个已有身份源下创建新连接
   * @description 在某个已有身份源下创建新连接，可以设置身份源图标、是否只支持登录等。
   * @returns ExtIdpConnDetailSingleRespDto
   */
  public async createExtIdpConn(
    requestBody: CreateExtIdpConnDto
  ): Promise<ExtIdpConnDetailSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-ext-idp-conn",
      data: requestBody,
    });
  }

  /**
   * @summary 更新身份源连接
   * @description 更新身份源连接，可以设置身份源图标、是否只支持登录等。
   * @returns ExtIdpConnDetailSingleRespDto
   */
  public async updateExtIdpConn(
    requestBody: UpdateExtIdpConnDto
  ): Promise<ExtIdpConnDetailSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-ext-idp-conn",
      data: requestBody,
    });
  }

  /**
   * @summary 删除身份源连接
   * @description 通过身份源连接 ID，删除身份源连接。
   * @returns IsSuccessRespDto
   */
  public async deleteExtIdpConn(
    requestBody: DeleteExtIdpConnDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-ext-idp-conn",
      data: requestBody,
    });
  }

  /**
   * @summary 身份源连接开关
   * @description 身份源连接开关，可以打开或关闭身份源连接。
   * @returns IsSuccessRespDto
   */
  public async changeConnState(
    requestBody: EnableExtIdpConnDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/enable-ext-idp-conn",
      data: requestBody,
    });
  }

  /**
   * @summary 租户关联身份源
   * @description 租户可以关联或取消关联身份源连接。
   * @returns IsSuccessRespDto
   */
  public async changeAssociationState(
    requestBody: AssociationExtIdpDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/association-ext-idp",
      data: requestBody,
    });
  }

  /**
   * @summary 租户控制台获取身份源列表
   * @description 在租户控制台内获取身份源列表，可以根据 应用 ID 筛选。
   * @returns ExtIdpListPaginatedRespDto
   */
  public async listTenantExtIdp({
    tenantId,
    appId,
    type,
    page,
    limit,
  }: {
    /** 租户 ID **/
    tenantId?: string;
    /** 应用 ID **/
    appId?: string;
    /** 身份源类型 **/
    type?: any;
    /** 页码 **/
    page?: string;
    /** 每页获取的数据量 **/
    limit?: string;
  }): Promise<ExtIdpListPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-tenant-ext-idp",
      params: {
        tenantId: tenantId,
        appId: appId,
        type: type,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 身份源下应用的连接详情
   * @description 在身份源详情页获取应用的连接情况
   * @returns ExtIdpListPaginatedRespDto
   */
  public async extIdpConnStateByApps({
    id,
    tenantId,
    appId,
    type,
  }: {
    /** 身份源 ID **/
    id: string;
    /** 租户 ID **/
    tenantId?: string;
    /** 应用 ID **/
    appId?: string;
    /** 身份源类型 **/
    type?: any;
  }): Promise<ExtIdpListPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/ext-idp-conn-apps",
      params: {
        tenantId: tenantId,
        appId: appId,
        id: id,
        type: type,
      },
    });
  }

  /**
   * @summary 获取用户内置字段列表
   * @description 获取用户内置的字段列表
   * @returns CustomFieldListRespDto
   */
  public async getUserBaseFields(): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-base-fields",
    });
  }

  /**
   * @summary 修改用户内置字段配置
   * @description 修改用户内置字段配置，内置字段不允许修改数据类型、唯一性。
   * @returns CustomFieldListRespDto
   */
  public async setUserBaseFields(
    requestBody: SetUserBaseFieldsReqDto
  ): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-user-base-fields",
      data: requestBody,
    });
  }

  /**
   * @summary 获取自定义字段列表
   * @description 通过主体类型，获取用户、部门或角色的自定义字段列表。
   * @returns CustomFieldListRespDto
   */
  public async getCustomFields({
    targetType,
  }: {
    /** 主体类型，目前支持用户、角色、分组、部门 **/
    targetType: "USER" | "ROLE" | "GROUP" | "DEPARTMENT";
  }): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-custom-fields",
      params: {
        targetType: targetType,
      },
    });
  }

  /**
   * @summary 创建/修改自定义字段定义
   * @description 创建/修改用户、部门或角色自定义字段定义，如果传入的 key 不存在则创建，存在则更新。
   * @returns CustomFieldListRespDto
   */
  public async setCustomFields(
    requestBody: SetCustomFieldsReqDto
  ): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-custom-fields",
      data: requestBody,
    });
  }

  /**
   * @summary 设置自定义字段的值
   * @description 给用户、角色或部门设置自定义字段的值，如果存在则更新，不存在则创建。
   * @returns IsSuccessRespDto
   */
  public async setCustomData(
    requestBody: SetCustomDataReqDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-custom-data",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户、分组、角色、组织机构的自定义字段值
   * @description 通过筛选条件，获取用户、分组、角色、组织机构的自定义字段值。
   * @returns GetCustomDataRespDto
   */
  public async getCustomData({
    targetType,
    targetIdentifier,
    namespace,
  }: {
    /** 主体类型，目前支持用户、角色、分组、部门 **/
    targetType: "USER" | "ROLE" | "GROUP" | "DEPARTMENT";
    /** 目标对象唯一标志符 **/
    targetIdentifier: string;
    /** 所属权限分组的 code，当 targetType 为角色的时候需要填写，否则可以忽略 **/
    namespace?: string;
  }): Promise<GetCustomDataRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-custom-data",
      params: {
        targetType: targetType,
        targetIdentifier: targetIdentifier,
        namespace: namespace,
      },
    });
  }

  /**
   * @summary 创建权限分组
   * @description 创建权限分组，可以设置分组名称与描述信息。
   * @returns NamespaceRespDto
   */
  public async createNamespace(
    requestBody: CreateNamespaceDto
  ): Promise<NamespaceRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-namespace",
      data: requestBody,
    });
  }

  /**
   * @summary 批量创建权限分组
   * @description 批量创建权限分组，可以分别设置分组名称与描述信息。
   * @returns IsSuccessRespDto
   */
  public async createNamespacesBatch(
    requestBody: CreateNamespacesBatchDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-namespaces-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 获取权限分组详情
   * @description 通过权限分组唯一标志符，获取权限分组详情。
   * @returns NamespaceRespDto
   */
  public async getNamespace({
    code,
  }: {
    /** 权限分组唯一标志符 **/
    code: string;
  }): Promise<NamespaceRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-namespace",
      params: {
        code: code,
      },
    });
  }

  /**
   * @summary 批量获取权限分组详情
   * @description 分别通过权限分组唯一标志符，批量获取权限分组详情。
   * @returns NamespaceListRespDto
   */
  public async getNamespacesBatch({
    codeList,
  }: {
    /** 资源 code 列表，批量可以使用逗号分隔 **/
    codeList: Array<string>;
  }): Promise<NamespaceListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-namespaces-batch",
      params: {
        codeList: codeList,
      },
    });
  }

  /**
   * @summary 修改权限分组信息
   * @description 修改权限分组信息，可以修改名称、描述信息以及新的唯一标志符。
   * @returns UpdateNamespaceRespDto
   */
  public async updateNamespace(
    requestBody: UpdateNamespaceDto
  ): Promise<UpdateNamespaceRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-namespace",
      data: requestBody,
    });
  }

  /**
   * @summary 删除权限分组信息
   * @description 通过权限分组唯一标志符，删除权限分组信息。
   * @returns IsSuccessRespDto
   */
  public async deleteNamespace(
    requestBody: DeleteNamespaceDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-namespace",
      data: requestBody,
    });
  }

  /**
   * @summary 批量删除权限分组
   * @description 分别通过权限分组唯一标志符，批量删除权限分组。
   * @returns IsSuccessRespDto
   */
  public async deleteNamespacesBatch(
    requestBody: DeleteNamespacesBatchDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-namespaces-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 授权资源
   * @description 将一个/多个资源授权给用户、角色、分组、组织机构等主体，且可以分别指定不同的操作权限。
   * @returns IsSuccessRespDto
   */
  public async authorizeResources(
    requestBody: AuthorizeResourcesDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/authorize-resources",
      data: requestBody,
    });
  }

  /**
   * @summary 获取某个主体被授权的资源列表
   * @description 根据筛选条件，获取某个主体被授权的资源列表。
   * @returns AuthorizedResourcePaginatedRespDto
   */
  public async getAuthorizedResources({
    targetType,
    targetIdentifier,
    namespace,
    resourceType,
    resourceList,
    withDenied = false,
  }: {
    /** 目标对象类型 **/
    targetType: "USER" | "ROLE" | "GROUP" | "DEPARTMENT";
    /** 目标对象唯一标志符 **/
    targetIdentifier: string;
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 限定资源类型，如数据、API、按钮、菜单 **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
    /** 限定查询的资源列表，如果指定，只会返回所指定的资源列表。 **/
    resourceList?: Array<string>;
    /** 是否获取被拒绝的资源 **/
    withDenied?: boolean;
  }): Promise<AuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-authorized-resources",
      params: {
        namespace: namespace,
        targetType: targetType,
        targetIdentifier: targetIdentifier,
        resourceType: resourceType,
        resourceList: resourceList,
        withDenied: withDenied,
      },
    });
  }

  /**
   * @summary 判断用户是否对某个资源的某个操作有权限
   * @description 判断用户是否对某个资源的某个操作有权限。
   * @returns IsActionAllowedRespDtp
   */
  public async isActionAllowed(
    requestBody: IsActionAllowedDto
  ): Promise<IsActionAllowedRespDtp> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/is-action-allowed",
      data: requestBody,
    });
  }

  /**
   * @summary 获取资源被授权的主体
   * @description 获取资源被授权的主体
   * @returns GetAuthorizedTargetRespDto
   */
  public async getAuthorizedTargets(
    requestBody: GetAuthorizedTargetsDto
  ): Promise<GetAuthorizedTargetRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-authorized-targets",
      data: requestBody,
    });
  }

  /**
   * @summary 获取同步任务详情
   * @description 获取同步任务详情
   * @returns SyncTaskSingleRespDto
   */
  public async getSyncTask({
    syncTaskId,
  }: {
    /** 同步任务 ID **/
    syncTaskId: number;
  }): Promise<SyncTaskSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-sync-task",
      params: {
        syncTaskId: syncTaskId,
      },
    });
  }

  /**
   * @summary 获取同步任务列表
   * @description 获取同步任务列表
   * @returns SyncTaskPaginatedRespDto
   */
  public async listSyncTasks({
    page = 1,
    limit = 10,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<SyncTaskPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-sync-tasks",
      params: {
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 创建同步任务
   * @description 创建同步任务
   * @returns SyncTaskPaginatedRespDto
   */
  public async createSyncTask(
    requestBody: CreateSyncTaskDto
  ): Promise<SyncTaskPaginatedRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-sync-task",
      data: requestBody,
    });
  }

  /**
   * @summary 修改同步任务
   * @description 修改同步任务
   * @returns SyncTaskPaginatedRespDto
   */
  public async updateSyncTask(
    requestBody: UpdateSyncTaskDto
  ): Promise<SyncTaskPaginatedRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-sync-task",
      data: requestBody,
    });
  }

  /**
   * @summary 执行同步任务
   * @description 执行同步任务
   * @returns TriggerSyncTaskRespDto
   */
  public async triggerSyncTask(
    requestBody: TriggerSyncTaskDto
  ): Promise<TriggerSyncTaskRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/trigger-sync-task",
      data: requestBody,
    });
  }

  /**
   * @summary 获取同步作业详情
   * @description 获取同步作业详情
   * @returns SyncJobSingleRespDto
   */
  public async getSyncJob({
    syncJobId,
  }: {
    /** 同步作业 ID **/
    syncJobId: number;
  }): Promise<SyncJobSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-sync-job",
      params: {
        syncJobId: syncJobId,
      },
    });
  }

  /**
   * @summary 获取同步作业详情
   * @description 获取同步作业详情
   * @returns SyncJobPaginatedRespDto
   */
  public async listSyncJobs({
    syncTaskId,
    page = 1,
    limit = 10,
    syncTrigger,
  }: {
    /** 同步任务 ID **/
    syncTaskId: number;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 同步任务触发类型：
     * - `manually`: 手动触发执行
     * - `timed`: 定时触发
     * - `automatic`: 根据事件自动触发
     *  **/
    syncTrigger?: "manually" | "timed" | "automatic";
  }): Promise<SyncJobPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-sync-jobs",
      params: {
        syncTaskId: syncTaskId,
        page: page,
        limit: limit,
        syncTrigger: syncTrigger,
      },
    });
  }

  /**
   * @summary 获取同步作业详情
   * @description 获取同步作业详情
   * @returns TriggerSyncTaskRespDto
   */
  public async listSyncJobLogs({
    syncJobId,
    page = 1,
    limit = 10,
    success,
    action,
    objectType,
  }: {
    /** 同步作业 ID **/
    syncJobId: number;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 根据是否操作成功进行筛选 **/
    success?: boolean;
    /** 根据操作类型进行筛选：
     * - `CreateUser`: 创建用户
     * - `UpdateUser`: 修改用户信息
     * - `DeleteUser`: 删除用户
     * - `UpdateUserIdentifier`: 修改用户唯一标志符
     * - `ChangeUserDepartment`: 修改用户部门
     * - `CreateDepartment`: 创建部门
     * - `UpdateDepartment`: 修改部门信息
     * - `DeleteDepartment`: 删除部门
     * - `MoveDepartment`: 移动部门
     * - `UpdateDepartmentLeader`: 同步部门负责人
     * - `CreateGroup`: 创建分组
     * - `UpdateGroup`: 修改分组
     * - `DeleteGroup`: 删除分组
     * - `Updateless`: 无更新
     *  **/
    action?:
      | "CreateUser"
      | "UpdateUser"
      | "DeleteUser"
      | "UpdateUserIdentifier"
      | "ChangeUserDepartment"
      | "CreateDepartment"
      | "UpdateDepartment"
      | "DeleteDepartment"
      | "MoveDepartment"
      | "UpdateDepartmentLeader"
      | "CreateGroup"
      | "UpdateGroup"
      | "DeleteGroup"
      | "Updateless";
    /** 操作对象类型:
     * - `department`: 部门
     * - `user`: 用户
     *  **/
    objectType?: "DEPARTMENT" | "USER";
  }): Promise<TriggerSyncTaskRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-sync-job-logs",
      params: {
        syncJobId: syncJobId,
        page: page,
        limit: limit,
        success: success,
        action: action,
        objectType: objectType,
      },
    });
  }

  /**
   * @summary 获取同步风险操作列表
   * @description 获取同步风险操作列表
   * @returns SyncRiskOperationPaginatedRespDto
   */
  public async listSyncRiskOperations({
    syncTaskId,
    page = 1,
    limit = 10,
    status,
    objectType,
  }: {
    /** 同步任务 ID **/
    syncTaskId: number;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 根据执行状态筛选 **/
    status?: Array<"PENDING" | "SUCCESS" | "FAILED" | "CANCELED" | "EXECUTING">;
    /** 根据操作对象类型，默认获取所有类型的记录：
     * - `department`: 部门
     * - `user`: 用户
     *  **/
    objectType?: Array<"DEPARTMENT" | "USER">;
  }): Promise<SyncRiskOperationPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-sync-risk-operations",
      params: {
        syncTaskId: syncTaskId,
        page: page,
        limit: limit,
        status: status,
        objectType: objectType,
      },
    });
  }

  /**
   * @summary 执行同步风险操作
   * @description 执行同步风险操作
   * @returns TriggerSyncRiskOperationsRespDto
   */
  public async triggerSyncRiskOperations(
    requestBody: TriggerSyncRiskOperationDto
  ): Promise<TriggerSyncRiskOperationsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/trigger-sync-risk-operations",
      data: requestBody,
    });
  }

  /**
   * @summary 取消同步风险操作
   * @description 取消同步风险操作
   * @returns CancelSyncRiskOperationsRespDto
   */
  public async cancelSyncRiskOperation(
    requestBody: CancelSyncRiskOperationDto
  ): Promise<CancelSyncRiskOperationsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/cancel-sync-risk-operation",
      data: requestBody,
    });
  }

  /**
   * @summary 获取用户行为日志
   * @description 可以选择请求 ID、客户端 IP、用户 ID、应用 ID、开始时间戳、请求是否成功、分页参数去获取用户行为日志
   * @returns UserActionLogRespDto
   */
  public async getUserActionLogs(
    requestBody: GetUserActionLogsDto
  ): Promise<UserActionLogRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-user-action-logs",
      data: requestBody,
    });
  }

  /**
   * @summary 获取管理员操作日志
   * @description 可以选择请求 ID、客户端 IP、操作类型、资源类型、管理员用户 ID、请求是否成功、开始时间戳、结束时间戳、分页来获取管理员操作日志接口
   * @returns AdminAuditLogRespDto
   */
  public async getAdminAuditLogs(
    requestBody: GetAdminAuditLogsDto
  ): Promise<AdminAuditLogRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-admin-audit-logs",
      data: requestBody,
    });
  }

  /**
   * @summary 获取邮件模版列表
   * @description 获取邮件模版列表
   * @returns GetEmailTemplatesRespDto
   */
  public async getEmailTemplates(): Promise<GetEmailTemplatesRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-email-templates",
    });
  }

  /**
   * @summary 修改邮件模版
   * @description 修改邮件模版
   * @returns EmailTemplateSingleItemRespDto
   */
  public async updateEmailTemplate(
    requestBody: UpdateEmailTemplateDto
  ): Promise<EmailTemplateSingleItemRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-email-template",
      data: requestBody,
    });
  }

  /**
   * @summary 预览邮件模版
   * @description 预览邮件模版
   * @returns PreviewEmailTemplateRespDto
   */
  public async previewEmailTemplate(
    requestBody: PreviewEmailTemplateDto
  ): Promise<PreviewEmailTemplateRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/preview-email-template",
      data: requestBody,
    });
  }

  /**
   * @summary 获取第三方邮件服务配置
   * @description 获取第三方邮件服务配置
   * @returns EmailProviderDto
   */
  public async getEmailProvider(): Promise<EmailProviderDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-email-provier",
    });
  }

  /**
   * @summary 配置第三方邮件服务
   * @description 配置第三方邮件服务
   * @returns EmailProviderDto
   */
  public async configEmailProvider(
    requestBody: ConfigEmailProviderDto
  ): Promise<EmailProviderDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/config-email-provier",
      data: requestBody,
    });
  }

  /**
   * @summary 获取应用详情
   * @description 通过应用 ID，获取应用详情。
   * @returns ApplicationSingleRespDto
   */
  public async getApplication({
    appId,
  }: {
    /** 应用 ID **/
    appId: string;
  }): Promise<ApplicationSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application",
      params: {
        appId: appId,
      },
    });
  }

  /**
   * @summary 获取应用列表
   * @description 获取应用列表
   * @returns ApplicationPaginatedRespDto
   */
  public async listApplications({
    page = 1,
    limit = 10,
    isIntegrateApp = false,
    isSelfBuiltApp = false,
    ssoEnabled = false,
    keyword,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否为集成应用 **/
    isIntegrateApp?: boolean;
    /** 是否为自建应用 **/
    isSelfBuiltApp?: boolean;
    /** 是否开启单点登录 **/
    ssoEnabled?: boolean;
    /** 模糊搜索字符串 **/
    keyword?: boolean;
  }): Promise<ApplicationPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-application",
      params: {
        page: page,
        limit: limit,
        isIntegrateApp: isIntegrateApp,
        isSelfBuiltApp: isSelfBuiltApp,
        ssoEnabled: ssoEnabled,
        keyword: keyword,
      },
    });
  }

  /**
   * @summary 获取应用简单信息
   * @description 通过应用 ID，获取应用简单信息。
   * @returns ApplicationSimpleInfoSingleRespDto
   */
  public async getApplicationSimpleInfo({
    appId,
  }: {
    /** 应用 ID **/
    appId: string;
  }): Promise<ApplicationSimpleInfoSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application-simple-info",
      params: {
        appId: appId,
      },
    });
  }

  /**
   * @summary 获取应用简单信息列表
   * @description 获取应用简单信息列表
   * @returns ApplicationSimpleInfoSingleRespDto
   */
  public async listApplicationSimpleInfo({
    page = 1,
    limit = 10,
    isIntegrateApp = false,
    isSelfBuiltApp = false,
    ssoEnabled = false,
    keyword,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
    /** 是否为集成应用 **/
    isIntegrateApp?: boolean;
    /** 是否为自建应用 **/
    isSelfBuiltApp?: boolean;
    /** 是否开启单点登录 **/
    ssoEnabled?: boolean;
    /** 模糊搜索字符串 **/
    keyword?: boolean;
  }): Promise<ApplicationSimpleInfoSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-application-simple-info",
      params: {
        page: page,
        limit: limit,
        isIntegrateApp: isIntegrateApp,
        isSelfBuiltApp: isSelfBuiltApp,
        ssoEnabled: ssoEnabled,
        keyword: keyword,
      },
    });
  }

  /**
   * @summary 创建应用
   * @description 创建应用
   * @returns ApplicationPaginatedRespDto
   */
  public async createApplication(
    requestBody: CreateApplicationDto
  ): Promise<ApplicationPaginatedRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-application",
      data: requestBody,
    });
  }

  /**
   * @summary 删除应用
   * @description 通过应用 ID，删除应用。
   * @returns IsSuccessRespDto
   */
  public async deleteApplication(
    requestBody: DeleteApplicationDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-application",
      data: requestBody,
    });
  }

  /**
   * @summary 获取应用密钥
   * @description 获取应用密钥
   * @returns GetApplicationSecretRespDto
   */
  public async getApplicationSecret({
    appId,
  }: {
    /** 应用 ID **/
    appId: string;
  }): Promise<GetApplicationSecretRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application-secret",
      params: {
        appId: appId,
      },
    });
  }

  /**
   * @summary 刷新应用密钥
   * @description 刷新应用密钥
   * @returns RefreshApplicationSecretRespDto
   */
  public async refreshApplicationSecret(
    requestBody: RefreshApplicationSecretDto
  ): Promise<RefreshApplicationSecretRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/refresh-application-secret",
      data: requestBody,
    });
  }

  /**
   * @summary 获取应用当前登录用户
   * @description 获取应用当前处于登录状态的用户
   * @returns UserPaginatedRespDto
   */
  public async listApplicationActiveUsers(
    requestBody: ListApplicationActiveUsersDto
  ): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/list-application-active-users",
      data: requestBody,
    });
  }

  /**
   * @summary 获取应用默认访问授权策略
   * @description 获取应用默认访问授权策略
   * @returns GetApplicationPermissionStrategyRespDto
   */
  public async getApplicationPermissionStrategy({
    appId,
  }: {
    /** 应用 ID **/
    appId: string;
  }): Promise<GetApplicationPermissionStrategyRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application-permission-strategy",
      params: {
        appId: appId,
      },
    });
  }

  /**
   * @summary 更新应用默认访问授权策略
   * @description 更新应用默认访问授权策略
   * @returns IsSuccessRespDto
   */
  public async updateApplicationPermissionStrategy(
    requestBody: UpdateApplicationPermissionStrategyDataDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-application-permission-strategy",
      data: requestBody,
    });
  }

  /**
   * @summary 授权应用访问权限
   * @description 给用户、分组、组织或角色授权应用访问权限
   * @returns IsSuccessRespDto
   */
  public async authorizeApplicationAccess(
    requestBody: AddApplicationPermissionRecord
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/add-application-permission-record",
      data: requestBody,
    });
  }

  /**
   * @summary 删除应用访问授权记录
   * @description 取消给用户、分组、组织或角色的应用访问权限授权
   * @returns IsSuccessRespDto
   */
  public async revokeApplicationAccess(
    requestBody: DeleteApplicationPermissionRecord
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-application-permission-record",
      data: requestBody,
    });
  }

  /**
   * @summary 检测域名是否可用
   * @description 检测域名是否可用于创建新应用或更新应用域名
   * @returns CheckDomainAvailableSecretRespDto
   */
  public async checkDomainAvailable(
    requestBody: CheckDomainAvailable
  ): Promise<CheckDomainAvailableSecretRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/check-domain-available",
      data: requestBody,
    });
  }

  /**
   * @summary 获取安全配置
   * @description 无需传参获取安全配置
   * @returns SecuritySettingsRespDto
   */
  public async getSecuritySettings(): Promise<SecuritySettingsRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/update-security-settings",
    });
  }

  /**
   * @summary 修改安全配置
   * @description 可选安全域、Authing Token 有效时间（秒）、验证码长度、验证码尝试次数、用户修改邮箱的安全策略、用户修改手机号的安全策略、Cookie 过期时间设置、是否禁止用户注册、频繁注册检测配置、验证码注册后是否要求用户设置密码、未验证的邮箱登录时是否禁止登录并发送认证邮件、用户自助解锁配置、Authing 登录页面是否开启登录账号选择、APP 扫码登录安全配置进行修改安全配置
   * @returns SecuritySettingsRespDto
   */
  public async updateSecuritySettings(
    requestBody: UpdateSecuritySettingsDto
  ): Promise<SecuritySettingsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-security-settings",
      data: requestBody,
    });
  }

  /**
   * @summary 获取全局多因素认证配置
   * @description 无需传参获取全局多因素认证配置
   * @returns MFASettingsRespDto
   */
  public async getGlobalMfaSettings(): Promise<MFASettingsRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-global-mfa-settings",
    });
  }

  /**
   * @summary 修改全局多因素认证配置
   * @description 传入 MFA 认证因素列表进行修改
   * @returns MFASettingsRespDto
   */
  public async updateGlobalMfaSettings(
    requestBody: MFASettingsDto
  ): Promise<MFASettingsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-global-mfa-settings",
      data: requestBody,
    });
  }

  /**
   * @summary 创建资源
   * @description 创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。
   * @returns ResourceRespDto
   */
  public async createResource(
    requestBody: CreateResourceDto
  ): Promise<ResourceRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-resource",
      data: requestBody,
    });
  }

  /**
   * @summary 批量创建资源
   * @description 批量创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。
   * @returns IsSuccessRespDto
   */
  public async createResourcesBatch(
    requestBody: CreateResourcesBatchDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-resources-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 获取资源详情
   * @description 根据筛选条件，获取资源详情。
   * @returns ResourceRespDto
   */
  public async getResource({
    code,
    namespace,
  }: {
    /** 资源唯一标志符 **/
    code: string;
    /** 所属权限分组的 code **/
    namespace?: string;
  }): Promise<ResourceRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-resource",
      params: {
        code: code,
        namespace: namespace,
      },
    });
  }

  /**
   * @summary 批量获取资源详情
   * @description 根据筛选条件，批量获取资源详情。
   * @returns ResourceListRespDto
   */
  public async getResourcesBatch({
    codeList,
    namespace,
  }: {
    /** 资源 code 列表，批量可以使用逗号分隔 **/
    codeList: Array<string>;
    /** 所属权限分组的 code **/
    namespace?: string;
  }): Promise<ResourceListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-resources-batch",
      params: {
        namespace: namespace,
        codeList: codeList,
      },
    });
  }

  /**
   * @summary 分页获取资源列表
   * @description 根据筛选条件，分页获取资源详情列表。
   * @returns ResourcePaginatedRespDto
   */
  public async listResources({
    namespace,
    type,
    page = 1,
    limit = 10,
  }: {
    /** 所属权限分组的 code **/
    namespace?: string;
    /** 资源类型 **/
    type?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<ResourcePaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-resources",
      params: {
        namespace: namespace,
        type: type,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 修改资源
   * @description 修改资源，可以设置资源的描述、定义的操作类型、URL 标识等。
   * @returns ResourceRespDto
   */
  public async updateResource(
    requestBody: UpdateResourceDto
  ): Promise<ResourceRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-resource",
      data: requestBody,
    });
  }

  /**
   * @summary 删除资源
   * @description 通过资源唯一标志符以及所属权限分组，删除资源。
   * @returns IsSuccessRespDto
   */
  public async deleteResource(
    requestBody: DeleteResourceDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-resource",
      data: requestBody,
    });
  }

  /**
   * @summary 批量删除资源
   * @description 通过资源唯一标志符以及所属权限分组，批量删除资源
   * @returns IsSuccessRespDto
   */
  public async deleteResourcesBatch(
    requestBody: DeleteResourcesBatchDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-resources-batch",
      data: requestBody,
    });
  }

  /**
   * @summary 关联/取消关联应用资源到租户
   * @description 通过资源唯一标识以及权限分组，关联或取消关联资源到租户
   * @returns IsSuccessRespDto
   */
  public async associationResources(
    requestBody: AssociationResourceDto
  ): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/associate-tenant-resource",
      data: requestBody,
    });
  }

  /**
   * @summary 创建 Pipeline 函数
   * @description 创建 Pipeline 函数
   * @returns PipelineFunctionSingleRespDto
   */
  public async createPipelineFunction(
    requestBody: CreatePipelineFunctionDto
  ): Promise<PipelineFunctionSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-pipeline-function",
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Pipeline 函数详情
   * @description 获取 Pipeline 函数详情
   * @returns PipelineFunctionSingleRespDto
   */
  public async getPipelineFunction({
    funcId,
  }: {
    /** Pipeline 函数 ID **/
    funcId: string;
  }): Promise<PipelineFunctionSingleRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-pipeline-function",
      params: {
        funcId: funcId,
      },
    });
  }

  /**
   * @summary 重新上传 Pipeline 函数
   * @description 当 Pipeline 函数上传失败时，重新上传 Pipeline 函数
   * @returns PipelineFunctionSingleRespDto
   */
  public async reuploadPipelineFunction(
    requestBody: ReUploadPipelineFunctionDto
  ): Promise<PipelineFunctionSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reupload-pipeline-function",
      data: requestBody,
    });
  }

  /**
   * @summary 修改 Pipeline 函数
   * @description 修改 Pipeline 函数
   * @returns PipelineFunctionSingleRespDto
   */
  public async updatePipelineFunction(
    requestBody: UpdatePipelineFunctionDto
  ): Promise<PipelineFunctionSingleRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-pipeline-function",
      data: requestBody,
    });
  }

  /**
   * @summary 修改 Pipeline 函数顺序
   * @description 修改 Pipeline 函数顺序
   * @returns CommonResponseDto
   */
  public async updatePipelineOrder(
    requestBody: UpdatePipelineOrderDto
  ): Promise<CommonResponseDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-pipeline-order",
      data: requestBody,
    });
  }

  /**
   * @summary 删除 Pipeline 函数
   * @description 删除 Pipeline 函数
   * @returns CommonResponseDto
   */
  public async deletePipelineFunction(
    requestBody: DeletePipelineFunctionDto
  ): Promise<CommonResponseDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-pipeline-function",
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Pipeline 函数列表
   * @description 获取 Pipeline 函数列表
   * @returns PipelineFunctionPaginatedRespDto
   */
  public async listPipelineFunctions({
    scene,
  }: {
    /** 通过函数的触发场景进行筛选（可选，默认返回所有）：
     * - `PRE_REGISTER`: 注册前
     * - `POST_REGISTER`: 注册后
     * - `PRE_AUTHENTICATION`: 认证前
     * - `POST_AUTHENTICATION`: 认证后
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前
     * - `PRE_COMPLETE_USER_INFO`: 补全用户信息前
     *  **/
    scene:
      | "PRE_REGISTER"
      | "POST_REGISTER"
      | "PRE_AUTHENTICATION"
      | "POST_AUTHENTICATION"
      | "PRE_OIDC_ID_TOKEN_ISSUED"
      | "PRE_OIDC_ACCESS_TOKEN_ISSUED"
      | "PRE_COMPLETE_USER_INFO";
  }): Promise<PipelineFunctionPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-pipeline-function",
      params: {
        scene: scene,
      },
    });
  }

  /**
   * @summary 获取 Pipeline 日志
   * @description 获取 Pipeline
   * @returns PipelineFunctionPaginatedRespDto
   */
  public async getPipelineLogs({
    funcId,
    page = 1,
    limit = 10,
  }: {
    /** Pipeline 函数 ID **/
    funcId: string;
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<PipelineFunctionPaginatedRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-pipeline-logs",
      params: {
        funcId: funcId,
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 创建 Webhook
   * @description 你需要指定 Webhoook 名称、Webhook 回调地址、请求数据格式、用户真实名称来创建 Webhook。还可选是否启用、请求密钥进行创建
   * @returns CreateWebhookRespDto
   */
  public async createWebhook(
    requestBody: CreateWebhookDto
  ): Promise<CreateWebhookRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/create-webhook",
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Webhook 列表
   * @description 获取 Webhook 列表，可选页数、分页大小来获取
   * @returns GetWebhooksRespDto
   */
  public async listWebhooks({
    page = 1,
    limit = 10,
  }: {
    /** 当前页数，从 1 开始 **/
    page?: number;
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number;
  }): Promise<GetWebhooksRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-webhooks",
      params: {
        page: page,
        limit: limit,
      },
    });
  }

  /**
   * @summary 修改 Webhook 配置
   * @description 需要指定 webhookId，可选 Webhoook 名称、Webhook 回调地址、请求数据格式、用户真实名称、是否启用、请求密钥参数进行修改 webhook
   * @returns UpdateWebhooksRespDto
   */
  public async updateWebhook(
    requestBody: UpdateWebhookDto
  ): Promise<UpdateWebhooksRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-webhook",
      data: requestBody,
    });
  }

  /**
   * @summary 删除 Webhook
   * @description 通过指定多个 webhookId，以数组的形式进行 webhook 的删除
   * @returns DeleteWebhookRespDto
   */
  public async deleteWebhook(
    requestBody: DeleteWebhookDto
  ): Promise<DeleteWebhookRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-webhook",
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Webhook 日志
   * @description 通过指定 webhookId，可选 page 和 limit 来获取 webhook 日志
   * @returns ListWebhookLogsRespDto
   */
  public async getWebhookLogs(
    requestBody: ListWebhookLogs
  ): Promise<ListWebhookLogsRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-webhook-logs",
      data: requestBody,
    });
  }

  /**
   * @summary 手动触发 Webhook 执行
   * @description 通过指定 webhookId，可选请求头和请求体进行手动触发 webhook 执行
   * @returns TriggerWebhookRespDto
   */
  public async triggerWebhook(
    requestBody: TriggerWebhookDto
  ): Promise<TriggerWebhookRespDto> {
    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/trigger-webhook",
      data: requestBody,
    });
  }

  /**
   * @summary 获取 Webhook 详情
   * @description 根据指定的 webhookId 获取 webhook 详情
   * @returns GetWebhookRespDto
   */
  public async getWebhook({
    webhookId,
  }: {
    /** Webhook ID **/
    webhookId: string;
  }): Promise<GetWebhookRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-webhook",
      params: {
        webhookId: webhookId,
      },
    });
  }

  /**
   * @summary 获取 Webhook 事件列表
   * @description 返回事件列表和分类列表
   * @returns WebhookEventListRespDto
   */
  public async getWebhookEventList(): Promise<WebhookEventListRespDto> {
    return await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-webhook-event-list",
    });
  }
}
