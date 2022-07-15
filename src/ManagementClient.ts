/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetManagementAccessTokenDto } from './models/GetManagementAccessTokenDto';
import type { GetManagementTokenRespDto } from './models/GetManagementTokenRespDto';
import type { AddDepartmentMembersReqDto } from './models/AddDepartmentMembersReqDto';
import type { AddGroupMembersReqDto } from './models/AddGroupMembersReqDto';
import type { AppListRespDto } from './models/AppListRespDto';
import type { AssignRoleDto } from './models/AssignRoleDto';
import type { AuthorizedResourceListRespDto } from './models/AuthorizedResourceListRespDto';
import type { AuthorizedResourcePaginatedRespDto } from './models/AuthorizedResourcePaginatedRespDto';
import type { AuthorizeResourcesDto } from './models/AuthorizeResourcesDto';
import type { CreateDepartmentReqDto } from './models/CreateDepartmentReqDto';
import type { CreateExtIdpConnDto } from './models/CreateExtIdpConnDto';
import type { CreateExtIdpDto } from './models/CreateExtIdpDto';
import type { CreateGroupBatchReqDto } from './models/CreateGroupBatchReqDto';
import type { CreateGroupReqDto } from './models/CreateGroupReqDto';
import type { CreateNamespaceDto } from './models/CreateNamespaceDto';
import type { CreateNamespacesBatchDto } from './models/CreateNamespacesBatchDto';
import type { CreateOrganizationReqDto } from './models/CreateOrganizationReqDto';
import type { CreateResourceDto } from './models/CreateResourceDto';
import type { CreateResourcesBatchDto } from './models/CreateResourcesBatchDto';
import type { CreateRoleDto } from './models/CreateRoleDto';
import type { CreateRolesBatch } from './models/CreateRolesBatch';
import type { CreateUserBatchReqDto } from './models/CreateUserBatchReqDto';
import type { CreateUserReqDto } from './models/CreateUserReqDto';
import type { CustomFieldListRespDto } from './models/CustomFieldListRespDto';
import type { DeleteDepartmentReqDto } from './models/DeleteDepartmentReqDto';
import type { DeleteExtIdpConnDto } from './models/DeleteExtIdpConnDto';
import type { DeleteExtIdpDto } from './models/DeleteExtIdpDto';
import type { DeleteGroupsReqDto } from './models/DeleteGroupsReqDto';
import type { DeleteNamespaceDto } from './models/DeleteNamespaceDto';
import type { DeleteNamespacesBatchDto } from './models/DeleteNamespacesBatchDto';
import type { DeleteOrganizationReqDto } from './models/DeleteOrganizationReqDto';
import type { DeleteResourceDto } from './models/DeleteResourceDto';
import type { DeleteResourcesBatchDto } from './models/DeleteResourcesBatchDto';
import type { DeleteRoleDto } from './models/DeleteRoleDto';
import type { DeleteUsersBatchDto } from './models/DeleteUsersBatchDto';
import type { DepartmentListRespDto } from './models/DepartmentListRespDto';
import type { DepartmentPaginatedRespDto } from './models/DepartmentPaginatedRespDto';
import type { DepartmentSingleRespDto } from './models/DepartmentSingleRespDto';
import type { EnableExtIdpConnDto } from './models/EnableExtIdpConnDto';
import type { ExtIdpConnDetailSingleRespDto } from './models/ExtIdpConnDetailSingleRespDto';
import type { ExtIdpDetailSingleRespDto } from './models/ExtIdpDetailSingleRespDto';
import type { ExtIdpListPaginatedRespDto } from './models/ExtIdpListPaginatedRespDto';
import type { ExtIdpSingleRespDto } from './models/ExtIdpSingleRespDto';
import type { GetCustomDataRespDto } from './models/GetCustomDataRespDto';
import type { GroupListRespDto } from './models/GroupListRespDto';
import type { GroupPaginatedRespDto } from './models/GroupPaginatedRespDto';
import type { GroupSingleRespDto } from './models/GroupSingleRespDto';
import type { HasAnyRoleReqDto } from './models/HasAnyRoleReqDto';
import type { HasAnyRoleRespDto } from './models/HasAnyRoleRespDto';
import type { IdentityListRespDto } from './models/IdentityListRespDto';
import type { IsActionAllowedDto } from './models/IsActionAllowedDto';
import type { IsActionAllowedRespDtp } from './models/IsActionAllowedRespDtp';
import type { IsSuccessRespDto } from './models/IsSuccessRespDto';
import type { IsUserExistsReqDto } from './models/IsUserExistsReqDto';
import type { IsUserExistsRespDto } from './models/IsUserExistsRespDto';
import type { IsUserInDepartmentRespDto } from './models/IsUserInDepartmentRespDto';
import type { KickUsersDto } from './models/KickUsersDto';
import type { ListArchivedUsersSingleRespDto } from './models/ListArchivedUsersSingleRespDto';
import type { NamespaceListRespDto } from './models/NamespaceListRespDto';
import type { NamespaceRespDto } from './models/NamespaceRespDto';
import type { OrganizationPaginatedRespDto } from './models/OrganizationPaginatedRespDto';
import type { OrganizationSingleRespDto } from './models/OrganizationSingleRespDto';
import type { PrincipalAuthenticationInfoPaginatedRespDto } from './models/PrincipalAuthenticationInfoPaginatedRespDto';
import type { RemoveDepartmentMembersReqDto } from './models/RemoveDepartmentMembersReqDto';
import type { RemoveGroupMembersReqDto } from './models/RemoveGroupMembersReqDto';
import type { ResetUserPrincipalAuthenticationInfoDto } from './models/ResetUserPrincipalAuthenticationInfoDto';
import type { ResourceListRespDto } from './models/ResourceListRespDto';
import type { ResourcePaginatedRespDto } from './models/ResourcePaginatedRespDto';
import type { ResourceRespDto } from './models/ResourceRespDto';
import type { RevokeRoleDto } from './models/RevokeRoleDto';
import type { RoleAuthorizedResourcePaginatedRespDto } from './models/RoleAuthorizedResourcePaginatedRespDto';
import type { RoleDepartmentListPaginatedRespDto } from './models/RoleDepartmentListPaginatedRespDto';
import type { RolePaginatedRespDto } from './models/RolePaginatedRespDto';
import type { RoleSingleRespDto } from './models/RoleSingleRespDto';
import type { SearchDepartmentsReqDto } from './models/SearchDepartmentsReqDto';
import type { SetCustomDataReqDto } from './models/SetCustomDataReqDto';
import type { SetCustomFieldsReqDto } from './models/SetCustomFieldsReqDto';
import type { SetUserDepartmentsDto } from './models/SetUserDepartmentsDto';
import type { UpdateDepartmentReqDto } from './models/UpdateDepartmentReqDto';
import type { UpdateExtIdpConnDto } from './models/UpdateExtIdpConnDto';
import type { UpdateExtIdpDto } from './models/UpdateExtIdpDto';
import type { UpdateGroupReqDto } from './models/UpdateGroupReqDto';
import type { UpdateNamespaceDto } from './models/UpdateNamespaceDto';
import type { UpdateNamespaceRespDto } from './models/UpdateNamespaceRespDto';
import type { UpdateOrganizationReqDto } from './models/UpdateOrganizationReqDto';
import type { UpdateResourceDto } from './models/UpdateResourceDto';
import type { UpdateRoleDto } from './models/UpdateRoleDto';
import type { UpdateUserReqDto } from './models/UpdateUserReqDto';
import type { UserDepartmentPaginatedRespDto } from './models/UserDepartmentPaginatedRespDto';
import type { UserIdListRespDto } from './models/UserIdListRespDto';
import type { UserListRespDto } from './models/UserListRespDto';
import type { UserLoggedInAppsListRespDto } from './models/UserLoggedInAppsListRespDto';
import type { UserLoggedInIdentitiesRespDto } from './models/UserLoggedInIdentitiesRespDto';
import type { UserLoginHistoryPaginatedRespDto } from './models/UserLoginHistoryPaginatedRespDto';
import type { UserMfaSingleRespDto } from './models/UserMfaSingleRespDto';
import type { UserPaginatedRespDto } from './models/UserPaginatedRespDto';
import type { UserSingleRespDto } from './models/UserSingleRespDto';

import { DEFAULT_OPTIONS, ManagementClientOptions } from './ManagementClientOptions';
import { ManagementHttpClient } from './ManagementHttpClient';
import { domainC14n } from './utils';
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
            throw new Error('accessKeyId is required');
        }

        if (!this.options.accessKeySecret) {
            throw new Error(
                'accessKeySecret is required'
            );
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
    public async getManagementToken(requestBody: GetManagementAccessTokenDto,
): Promise<GetManagementTokenRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/get-management-token',
        data: requestBody,
    });
}

/**
 * @summary 获取用户信息
 * @description 通过用户 ID，获取用户详情，可以选择获取自定义数据、identities、选择指定用户 ID 类型等。
 * @returns UserSingleRespDto
 */
public async getUser({
    userId,
    userIdType = 'user_id',
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
}): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user',
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
    userIdType = 'user_id',
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
}: {
    /** 用户 ID 数组 **/
    userIds: Array<string>,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
}): Promise<UserListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-batch',
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
 * @summary 获取用户列表
 * @description 获取用户列表接口，支持分页，可以选择获取自定义数据、identities 等。
 * @returns UserPaginatedRespDto
 */
public async listUsers({
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
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 账户当前状态，如 已停用、已离职、正常状态、已归档 **/
    status?: 'Suspended' | 'Resigned' | 'Activated' | 'Archived',
    /** 用户创建、修改开始时间，为精确到秒的 UNIX 时间戳；支持获取从某一段时间之后的增量数据 **/
    updatedAtStart?: number,
    /** 用户创建、修改终止时间，为精确到秒的 UNIX 时间戳；支持获取某一段时间内的增量数据。默认为当前时间 **/
    updatedAtEnd?: number,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
}): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-users',
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
 * @summary 获取用户的外部身份源
 * @description 通过用户 ID，获取用户的外部身份源、选择指定用户 ID 类型。
 * @returns IdentityListRespDto
 */
public async getUserIdentities({
    userId,
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<IdentityListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-identities',
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
    userIdType = 'user_id',
    namespace,
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 所属权限分组的 code **/
    namespace?: string,
}): Promise<RolePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-roles',
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
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<PrincipalAuthenticationInfoPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-principal-authentication-info',
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
public async resetUserPrincipalAuthenticationInfo(requestBody: ResetUserPrincipalAuthenticationInfoDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/reset-user-principal-authentication-info',
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
    userIdType = 'user_id',
    page = 1,
    limit = 10,
    withCustomData = false,
    sortBy = 'JoinDepartmentAt',
    orderBy = 'Desc',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符 **/
    sortBy?: 'DepartmentCreatedAt' | 'JoinDepartmentAt' | 'DepartmentName' | 'DepartmemtCode',
    /** 增序或降序 **/
    orderBy?: 'Asc' | 'Desc',
}): Promise<UserDepartmentPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-departments',
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
public async setUserDepartments(requestBody: SetUserDepartmentsDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/set-user-departments',
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
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<GroupPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-groups',
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
public async deleteUsersBatch(requestBody: DeleteUsersBatchDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-users-batch',
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
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<UserMfaSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-mfa-info',
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
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 开始时间，为精确到秒的 UNIX 时间戳，默认不指定 **/
    startAt?: number,
}): Promise<ListArchivedUsersSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-archived-users',
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
public async kickUsers(requestBody: KickUsersDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/kick-users',
        data: requestBody,
    });
}

/**
 * @summary 判断用户是否存在
 * @description 根据条件判断用户是否存在，可以筛选用户名、邮箱、手机号、第三方外部 ID 等。
 * @returns IsUserExistsRespDto
 */
public async isUserExists(requestBody: IsUserExistsReqDto,
): Promise<IsUserExistsRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/is-user-exists',
        data: requestBody,
    });
}

/**
 * @summary 创建用户
 * @description 创建用户，邮箱、手机号、用户名必须包含其中一个，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份创建用户因此不需要进行手机号验证码检验等安全检测。
 * @returns UserSingleRespDto
 */
public async createUser(requestBody: CreateUserReqDto,
): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-user',
        data: requestBody,
    });
}

/**
 * @summary 批量创建用户
 * @description 批量创建用户，邮箱、手机号、用户名必须包含其中一个，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份批量创建用户因此不需要进行手机号验证码检验等安全检测。
 * @returns UserListRespDto
 */
public async createUsersBatch(requestBody: CreateUserBatchReqDto,
): Promise<UserListRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-users-batch',
        data: requestBody,
    });
}

/**
 * @summary 修改用户资料
 * @description 通过用户 ID，修改用户资料，邮箱、手机号、用户名、externalId 用户池内唯一，此接口将以管理员身份修改用户资料因此不需要进行手机号验证码检验等安全检测。
 * @returns UserSingleRespDto
 */
public async updateUser(requestBody: UpdateUserReqDto,
): Promise<UserSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-user',
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
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<AppListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-accessible-apps',
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
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<AppListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-authorized-apps',
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
public async hasAnyRole(requestBody: HasAnyRoleReqDto,
): Promise<HasAnyRoleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/has-any-role',
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
    userIdType = 'user_id',
    appId,
    clientIp,
    start,
    end,
    page = 1,
    limit = 10,
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 应用 ID **/
    appId?: string,
    /** 客户端 IP **/
    clientIp?: string,
    /** 开始时间戳（毫秒） **/
    start?: number,
    /** 结束时间戳（毫秒） **/
    end?: number,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<UserLoginHistoryPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-login-history',
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
 * @summary 通过用户 ID，获取用户曾经登录过的应用，可以选择指定用户 ID 类型等。
 * @description 获取用户曾经登录过的应用
 * @returns UserLoggedInAppsListRespDto
 */
public async getUserLoggedinApps({
    userId,
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<UserLoggedInAppsListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-loggedin-apps',
        params: {
            userId: userId,
            userIdType: userIdType,
        },
    });
}

/**
 * @summary 通过用户 ID，获取用户曾经登录过的身份源，可以选择指定用户 ID 类型等。
 * @description 获取用户曾经登录过的身份源
 * @returns UserLoggedInIdentitiesRespDto
 */
public async getUserLoggedinIdentities({
    userId,
    userIdType = 'user_id',
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
}): Promise<UserLoggedInIdentitiesRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-logged-in-identities',
        params: {
            userId: userId,
            userIdType: userIdType,
        },
    });
}

/**
 * @summary 获取用户被授权的所有资源
 * @description 通过用户 ID，获取用户被授权的所有资源，可以选择指定用户 ID 类型等，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合。
 * @returns AuthorizedResourcePaginatedRespDto
 */
public async getUserAuthorizedResources({
    userId,
    userIdType = 'user_id',
    namespace,
    resourceType,
}: {
    /** 用户 ID **/
    userId: string,
    /** 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。 **/
    userIdType?: 'user_id' | 'external_id' | 'phone' | 'email' | 'username',
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 资源类型，如 数据、API、菜单、按钮 **/
    resourceType?: 'DATA' | 'API' | 'MENU' | 'BUTTON',
}): Promise<AuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-user-authorized-resources',
        params: {
            userId: userId,
            userIdType: userIdType,
            namespace: namespace,
            resourceType: resourceType,
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
    code: string,
}): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-group',
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
    page = 1,
    limit = 10,
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<GroupPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-groups',
        params: {
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
public async createGroup(requestBody: CreateGroupReqDto,
): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-group',
        data: requestBody,
    });
}

/**
 * @summary 批量创建分组
 * @description 批量创建分组，一个分组必须包含分组名称与唯一标志符 code，且必须为一个合法的英文标志符，如 developers。
 * @returns GroupListRespDto
 */
public async createGroupsBatch(requestBody: CreateGroupBatchReqDto,
): Promise<GroupListRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-groups-batch',
        data: requestBody,
    });
}

/**
 * @summary 修改分组
 * @description 通过分组 code，修改分组，可以修改此分组的 code。
 * @returns GroupSingleRespDto
 */
public async updateGroup(requestBody: UpdateGroupReqDto,
): Promise<GroupSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-group',
        data: requestBody,
    });
}

/**
 * @summary 批量删除分组
 * @description 通过分组 code，批量删除分组。
 * @returns IsSuccessRespDto
 */
public async deleteGroupsBatch(requestBody: DeleteGroupsReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-groups-batch',
        data: requestBody,
    });
}

/**
 * @summary 添加分组成员
 * @description 添加分组成员，成员以用户 ID 数组形式传递。
 * @returns IsSuccessRespDto
 */
public async addGroupMembers(requestBody: AddGroupMembersReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/add-group-members',
        data: requestBody,
    });
}

/**
 * @summary 批量移除分组成员
 * @description 批量移除分组成员，成员以用户 ID 数组形式传递。
 * @returns IsSuccessRespDto
 */
public async removeGroupMembers(requestBody: RemoveGroupMembersReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/remove-group-members',
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
    code: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
}): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-group-members',
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
    code: string,
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 资源类型 **/
    resourceType?: 'DATA' | 'API' | 'MENU' | 'BUTTON',
}): Promise<AuthorizedResourceListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-group-authorized-resources',
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
    code: string,
    /** 所属权限分组的 code **/
    namespace?: string,
}): Promise<RoleSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-role',
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
public async assignRole(requestBody: AssignRoleDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/assign-role',
        data: requestBody,
    });
}

/**
 * @summary 移除分配的角色
 * @description 通过权限分组内角色 code，移除分配的角色，被分配者可以是用户或部门。
 * @returns IsSuccessRespDto
 */
public async revokeRole(requestBody: RevokeRoleDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/revoke-role',
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
    code: string,
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 资源类型，如 数据、API、按钮、菜单 **/
    resourceType?: 'DATA' | 'API' | 'MENU' | 'BUTTON',
}): Promise<RoleAuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-role-authorized-resources',
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
    code: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
    /** 所属权限分组的 code **/
    namespace?: string,
}): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-role-members',
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
    code: string,
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<RoleDepartmentListPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-role-departments',
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
public async createRole(requestBody: CreateRoleDto,
): Promise<RoleSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-role',
        data: requestBody,
    });
}

/**
 * @summary 获取角色列表
 * @description 获取角色列表，支持分页。
 * @returns RolePaginatedRespDto
 */
public async listRoles({
    namespace = 'default',
    page = 1,
    limit = 10,
}: {
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<RolePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-roles',
        params: {
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
public async deleteRolesBatch(requestBody: DeleteRoleDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-roles-batch',
        data: requestBody,
    });
}

/**
 * @summary 批量创建角色
 * @description 批量创建角色，可以选择权限分组、角色描述等。
 * @returns IsSuccessRespDto
 */
public async createRolesBatch(requestBody: CreateRolesBatch,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-roles-batch',
        data: requestBody,
    });
}

/**
 * @summary 修改角色
 * @description 通过权限分组内角色新旧 code，修改角色，可以选择角色描述等。
 * @returns IsSuccessRespDto
 */
public async updateRole(requestBody: UpdateRoleDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-role',
        data: requestBody,
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
}: {
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 拉取所有 **/
    fetchAll?: boolean,
}): Promise<OrganizationPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-organizations',
        params: {
            page: page,
            limit: limit,
            fetchAll: fetchAll,
        },
    });
}

/**
 * @summary 创建顶层组织机构
 * @description 创建组织机构，会创建一个只有一个节点的组织机构，可以选择组织描述信息、根节点自定义 ID、多语言等。
 * @returns OrganizationSingleRespDto
 */
public async createOrganization(requestBody: CreateOrganizationReqDto,
): Promise<OrganizationSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-organization',
        data: requestBody,
    });
}

/**
 * @summary 修改顶层组织机构
 * @description 通过组织 code，修改顶层组织机构，可以选择部门描述、新组织 code、组织名称等。
 * @returns OrganizationSingleRespDto
 */
public async updateOrganization(requestBody: UpdateOrganizationReqDto,
): Promise<OrganizationSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-organization',
        data: requestBody,
    });
}

/**
 * @summary 删除组织机构
 * @description 通过组织 code，删除组织机构树。
 * @returns IsSuccessRespDto
 */
public async deleteOrganization(requestBody: DeleteOrganizationReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-organization',
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
}: {
    /** 搜索关键词，如组织机构名称 **/
    keywords: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<OrganizationPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/search-organizations',
        params: {
            keywords: keywords,
            page: page,
            limit: limit,
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
    departmentIdType = 'department_id',
    withCustomData = false,
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。 **/
    departmentId?: string,
    /** 部门 code。departmentId 和 departmentCode 必传其一。 **/
    departmentCode?: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
}): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-department',
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
public async createDepartment(requestBody: CreateDepartmentReqDto,
): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-department',
        data: requestBody,
    });
}

/**
 * @summary 修改部门
 * @description 通过组织 code、部门 ID，修改部门，可以设置多种参数。
 * @returns DepartmentSingleRespDto
 */
public async updateDepartment(requestBody: UpdateDepartmentReqDto,
): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-department',
        data: requestBody,
    });
}

/**
 * @summary 删除部门
 * @description 通过组织 code、部门 ID，删除部门。
 * @returns IsSuccessRespDto
 */
public async deleteDepartment(requestBody: DeleteDepartmentReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-department',
        data: requestBody,
    });
}

/**
 * @summary 搜索部门
 * @description 通过组织 code、搜索关键词，搜索部门，可以搜索组织名称等。
 * @returns DepartmentListRespDto
 */
public async searchDepartments(requestBody: SearchDepartmentsReqDto,
): Promise<DepartmentListRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/search-departments',
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
    departmentIdType = 'department_id',
    excludeVirtualNode = false,
    onlyVirtualNode = false,
    withCustomData = false,
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 需要获取的部门 ID **/
    departmentId: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否要排除虚拟组织 **/
    excludeVirtualNode?: boolean,
    /** 是否只包含虚拟组织 **/
    onlyVirtualNode?: boolean,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
}): Promise<DepartmentPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-children-departments',
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
    departmentIdType = 'department_id',
    includeChildrenDepartments = false,
    page = 1,
    limit = 10,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
    sortBy = 'JoinDepartmentAt',
    orderBy = 'Desc',
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID，根部门传 `root` **/
    departmentId: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否包含子部门的成员 **/
    includeChildrenDepartments?: boolean,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
    /** 排序依据 **/
    sortBy?: 'Default' | 'JoinDepartmentAt',
    /** 增序还是倒序 **/
    orderBy?: 'Asc' | 'Desc',
}): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-department-members',
        params: {
            organizationCode: organizationCode,
            departmentId: departmentId,
            departmentIdType: departmentIdType,
            includeChildrenDepartments: includeChildrenDepartments,
            page: page,
            limit: limit,
            withCustomData: withCustomData,
            withIdentities: withIdentities,
            withDepartmentIds: withDepartmentIds,
            sortBy: sortBy,
            orderBy: orderBy,
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
    departmentIdType = 'department_id',
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID，根部门传 `root` **/
    departmentId: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
}): Promise<UserIdListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-department-member-ids',
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
    departmentIdType = 'department_id',
    includeChildrenDepartments = false,
    withCustomData = false,
    withIdentities = false,
    withDepartmentIds = false,
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID，根部门传 `root` **/
    departmentId: string,
    /** 搜索关键词，如成员名称 **/
    keywords: string,
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否包含子部门的成员 **/
    includeChildrenDepartments?: boolean,
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
    /** 是否获取 identities **/
    withIdentities?: boolean,
    /** 是否获取部门 ID 列表 **/
    withDepartmentIds?: boolean,
}): Promise<UserPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/search-department-members',
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
public async addDepartmentMembers(requestBody: AddDepartmentMembersReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/add-department-members',
        data: requestBody,
    });
}

/**
 * @summary 部门下删除成员
 * @description 通过部门 ID、组织 code，删除部门下成员。
 * @returns IsSuccessRespDto
 */
public async removeDepartmentMembers(requestBody: RemoveDepartmentMembersReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/remove-department-members',
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
    departmentIdType = 'department_id',
    withCustomData = false,
}: {
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID **/
    departmentId: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否获取自定义数据 **/
    withCustomData?: boolean,
}): Promise<DepartmentSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-parent-department',
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
    departmentIdType = 'department_id',
    includeChildrenDepartments = false,
}: {
    /** 用户 ID **/
    userId: string,
    /** 组织 code **/
    organizationCode: string,
    /** 部门 ID，根部门传 `root`。departmentId 和 departmentCode 必传其一。 **/
    departmentId: string,
    /** 此次调用中使用的部门 ID 的类型 **/
    departmentIdType?: 'department_id' | 'open_department_id',
    /** 是否包含子部门 **/
    includeChildrenDepartments?: boolean,
}): Promise<IsUserInDepartmentRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/is-user-in-department',
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
 * @summary 获取身份源列表
 * @description 获取身份源列表，可以指定 租户 ID 筛选。
 * @returns ExtIdpListPaginatedRespDto
 */
public async listExtIdp({
    tenantId,
}: {
    /** 租户 ID **/
    tenantId?: string,
}): Promise<ExtIdpListPaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-ext-idp',
        params: {
            tenantId: tenantId,
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
}: {
    /** 身份源 ID **/
    id: string,
    /** 租户 ID **/
    tenantId?: string,
}): Promise<ExtIdpDetailSingleRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-ext-idp',
        params: {
            tenantId: tenantId,
            id: id,
        },
    });
}

/**
 * @summary 创建身份源
 * @description 创建身份源，可以设置身份源名称、连接类型、租户 ID 等。
 * @returns ExtIdpSingleRespDto
 */
public async createExtIdp(requestBody: CreateExtIdpDto,
): Promise<ExtIdpSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-ext-idp',
        data: requestBody,
    });
}

/**
 * @summary 更新身份源配置
 * @description 更新身份源配置，可以设置身份源 ID 与 名称。
 * @returns ExtIdpSingleRespDto
 */
public async updateExtIdp(requestBody: UpdateExtIdpDto,
): Promise<ExtIdpSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-ext-idp',
        data: requestBody,
    });
}

/**
 * @summary 删除身份源
 * @description 通过身份源 ID，删除身份源。
 * @returns IsSuccessRespDto
 */
public async deleteExtIdp(requestBody: DeleteExtIdpDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-ext-idp',
        data: requestBody,
    });
}

/**
 * @summary 在某个已有身份源下创建新连接
 * @description 在某个已有身份源下创建新连接，可以设置身份源图标、是否只支持登录等。
 * @returns ExtIdpConnDetailSingleRespDto
 */
public async createExtIdpConn(requestBody: CreateExtIdpConnDto,
): Promise<ExtIdpConnDetailSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-ext-idp-conn',
        data: requestBody,
    });
}

/**
 * @summary 更新身份源连接
 * @description 更新身份源连接，可以设置身份源图标、是否只支持登录等。
 * @returns ExtIdpConnDetailSingleRespDto
 */
public async updateExtIdpConn(requestBody: UpdateExtIdpConnDto,
): Promise<ExtIdpConnDetailSingleRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-ext-idp-conn',
        data: requestBody,
    });
}

/**
 * @summary 删除身份源连接
 * @description 通过身份源连接 ID，删除身份源连接。
 * @returns IsSuccessRespDto
 */
public async deleteExtIdpConn(requestBody: DeleteExtIdpConnDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-ext-idp-conn',
        data: requestBody,
    });
}

/**
 * @summary 身份源连接开关
 * @description 身份源连接开关，可以打开或关闭身份源连接。
 * @returns IsSuccessRespDto
 */
public async changeConnState(requestBody: EnableExtIdpConnDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/enable-ext-idp-conn',
        data: requestBody,
    });
}

/**
 * @summary 获取用户池配置的自定义字段列表
 * @description 通过主体类型，获取用户池配置的自定义字段列表。
 * @returns CustomFieldListRespDto
 */
public async getCustomFields({
    targetType,
}: {
    /** 主体类型，目前支持用户、角色、分组、部门 **/
    targetType: 'USER' | 'ROLE' | 'GROUP' | 'DEPARTMENT',
}): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-custom-fields',
        params: {
            targetType: targetType,
        },
    });
}

/**
 * @summary 创建/修改自定义字段定义
 * @description 创建/修改自定义字段定义，如果传入的 key 不存在则创建，存在则更新。
 * @returns CustomFieldListRespDto
 */
public async setCustomFields(requestBody: SetCustomFieldsReqDto,
): Promise<CustomFieldListRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/set-custom-fields',
        data: requestBody,
    });
}

/**
 * @summary 设置自定义字段的值
 * @description 给用户、角色、部门设置自定义字段的值，如果存在则更新，不存在则创建。
 * @returns IsSuccessRespDto
 */
public async setCustomData(requestBody: SetCustomDataReqDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/set-custom-data',
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
    targetType: 'USER' | 'ROLE' | 'GROUP' | 'DEPARTMENT',
    /** 目标对象唯一标志符 **/
    targetIdentifier: string,
    /** 所属权限分组的 code，当 targetType 为角色的时候需要填写，否则可以忽略 **/
    namespace?: string,
}): Promise<GetCustomDataRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-custom-data',
        params: {
            targetType: targetType,
            targetIdentifier: targetIdentifier,
            namespace: namespace,
        },
    });
}

/**
 * @summary 创建资源
 * @description 创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。
 * @returns ResourceRespDto
 */
public async createResource(requestBody: CreateResourceDto,
): Promise<ResourceRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-resource',
        data: requestBody,
    });
}

/**
 * @summary 批量创建资源
 * @description 批量创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。
 * @returns IsSuccessRespDto
 */
public async createResourcesBatch(requestBody: CreateResourcesBatchDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-resources-batch',
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
    code: string,
    /** 所属权限分组的 code **/
    namespace?: string,
}): Promise<ResourceRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-resource',
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
    codeList: Array<string>,
    /** 所属权限分组的 code **/
    namespace?: string,
}): Promise<ResourceListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-resources-batch',
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
    namespace?: string,
    /** 资源类型 **/
    type?: 'DATA' | 'API' | 'MENU' | 'BUTTON',
    /** 当前页数，从 1 开始 **/
    page?: number,
    /** 每页数目，最大不能超过 50，默认为 10 **/
    limit?: number,
}): Promise<ResourcePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/list-resources',
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
public async updateResource(requestBody: UpdateResourceDto,
): Promise<ResourceRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-resource',
        data: requestBody,
    });
}

/**
 * @summary 删除资源
 * @description 通过资源唯一标志符以及所属权限分组，删除资源。
 * @returns IsSuccessRespDto
 */
public async deleteResource(requestBody: DeleteResourceDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-resource',
        data: requestBody,
    });
}

/**
 * @summary 批量删除资源
 * @description 通过资源唯一标志符以及所属权限分组，批量删除资源
 * @returns IsSuccessRespDto
 */
public async deleteResourcesBatch(requestBody: DeleteResourcesBatchDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-resources-batch',
        data: requestBody,
    });
}

/**
 * @summary 创建权限分组
 * @description 创建权限分组，可以设置分组名称与描述信息。
 * @returns NamespaceRespDto
 */
public async createNamespace(requestBody: CreateNamespaceDto,
): Promise<NamespaceRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-namespace',
        data: requestBody,
    });
}

/**
 * @summary 批量创建权限分组
 * @description 批量创建权限分组，可以分别设置分组名称与描述信息。
 * @returns IsSuccessRespDto
 */
public async createNamespacesBatch(requestBody: CreateNamespacesBatchDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/create-namespaces-batch',
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
    code: string,
}): Promise<NamespaceRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-namespace',
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
    codeList: Array<string>,
}): Promise<NamespaceListRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-namespaces-batch',
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
public async updateNamespace(requestBody: UpdateNamespaceDto,
): Promise<UpdateNamespaceRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/update-namespace',
        data: requestBody,
    });
}

/**
 * @summary 删除权限分组信息
 * @description 通过权限分组唯一标志符，删除权限分组信息。
 * @returns IsSuccessRespDto
 */
public async deleteNamespace(requestBody: DeleteNamespaceDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-namespace',
        data: requestBody,
    });
}

/**
 * @summary 批量删除权限分组
 * @description 分别通过权限分组唯一标志符，批量删除权限分组。
 * @returns IsSuccessRespDto
 */
public async deleteNamespacesBatch(requestBody: DeleteNamespacesBatchDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/delete-namespaces-batch',
        data: requestBody,
    });
}

/**
 * @summary 授权资源
 * @description 将一个/多个资源授权给用户、角色、分组、组织机构等主体，且可以分别指定不同的操作权限。
 * @returns IsSuccessRespDto
 */
public async authorizeResources(requestBody: AuthorizeResourcesDto,
): Promise<IsSuccessRespDto> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/authorize-resources',
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
    targetType: 'USER' | 'ROLE' | 'GROUP' | 'DEPARTMENT',
    /** 目标对象唯一标志符 **/
    targetIdentifier: string,
    /** 所属权限分组的 code **/
    namespace?: string,
    /** 限定资源类型，如数据、API、按钮、菜单 **/
    resourceType?: 'DATA' | 'API' | 'MENU' | 'BUTTON',
    /** 限定查询的资源列表，如果指定，只会返回所指定的资源列表。 **/
    resourceList?: Array<string>,
    /** 是否获取被拒绝的资源 **/
    withDenied?: boolean,
}): Promise<AuthorizedResourcePaginatedRespDto> {
    return await this.httpClient.request({
        method: 'GET',
        url: '/api/v3/get-authorized-resources',
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
public async isActionAllowed(requestBody: IsActionAllowedDto,
): Promise<IsActionAllowedRespDtp> {
    return await this.httpClient.request({
        method: 'POST',
        url: '/api/v3/is-action-allowed',
        data: requestBody,
    });
}

}