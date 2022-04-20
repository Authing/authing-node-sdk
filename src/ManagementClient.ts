/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetManagementAccessTokenDto } from './models/GetManagementAccessTokenDto';
import type { GetManagementTokenRespDto } from './models/GetManagementTokenRespDto';
import type { AppListRespDto } from './models/AppListRespDto';
import type { AuthorizedResourcePaginatedRespDto } from './models/AuthorizedResourcePaginatedRespDto';
import type { CreateUserBatchReqDto } from './models/CreateUserBatchReqDto';
import type { CreateUserReqDto } from './models/CreateUserReqDto';
import type { DeleteUsersBatchDto } from './models/DeleteUsersBatchDto';
import type { GetUserAccessibleAppsReqDto } from './models/GetUserAccessibleAppsReqDto';
import type { GetUserAuthorizedResourcesDto } from './models/GetUserAuthorizedResourcesDto';
import type { GetUserBatchDto } from './models/GetUserBatchDto';
import type { GetUserDepartmentsDto } from './models/GetUserDepartmentsDto';
import type { GetUserDto } from './models/GetUserDto';
import type { GetUserGroupsDto } from './models/GetUserGroupsDto';
import type { GetUserIdentitiesDto } from './models/GetUserIdentitiesDto';
import type { GetUserLoggedInAppsReqDto } from './models/GetUserLoggedInAppsReqDto';
import type { GetUserLoginHistoryDto } from './models/GetUserLoginHistoryDto';
import type { GetUserMfaInfoDto } from './models/GetUserMfaInfoDto';
import type { GetUserPrincipalAuthenticationInfoDto } from './models/GetUserPrincipalAuthenticationInfoDto';
import type { GetUserRolesDto } from './models/GetUserRolesDto';
import type { GroupPaginatedRespDto } from './models/GroupPaginatedRespDto';
import type { HasAnyRoleDto } from './models/HasAnyRoleDto';
import type { HasAnyRoleRespDto } from './models/HasAnyRoleRespDto';
import type { IdentityListRespDto } from './models/IdentityListRespDto';
import type { IsSuccessRespDto } from './models/IsSuccessRespDto';
import type { IsUserExistsReqDto } from './models/IsUserExistsReqDto';
import type { IsUserExistsRespDto } from './models/IsUserExistsRespDto';
import type { KickUsersDto } from './models/KickUsersDto';
import type { ListArchivedUsersDto } from './models/ListArchivedUsersDto';
import type { ListArchivedUsersSingleRespDto } from './models/ListArchivedUsersSingleRespDto';
import type { ListUsersDto } from './models/ListUsersDto';
import type { PrincipalAuthenticationInfoPaginatedRespDto } from './models/PrincipalAuthenticationInfoPaginatedRespDto';
import type { ResetUserPrincipalAuthenticationInfoDto } from './models/ResetUserPrincipalAuthenticationInfoDto';
import type { RolePaginatedRespDto } from './models/RolePaginatedRespDto';
import type { SetUserDepartmentsDto } from './models/SetUserDepartmentsDto';
import type { UpdateUserReqDto } from './models/UpdateUserReqDto';
import type { UserDepartmentPaginatedRespDto } from './models/UserDepartmentPaginatedRespDto';
import type { UserListRespDto } from './models/UserListRespDto';
import type { UserLoggedInAppsListRespDto } from './models/UserLoggedInAppsListRespDto';
import type { UserLoginHistoryPaginatedRespDto } from './models/UserLoginHistoryPaginatedRespDto';
import type { UserMfaSingleRespDto } from './models/UserMfaSingleRespDto';
import type { UserPaginatedRespDto } from './models/UserPaginatedRespDto';
import type { UserSingleRespDto } from './models/UserSingleRespDto';
import type { AddGroupMembersReqDto } from './models/AddGroupMembersReqDto';
import type { AuthorizedResourceListRespDto } from './models/AuthorizedResourceListRespDto';
import type { CreateGroupBatchReqDto } from './models/CreateGroupBatchReqDto';
import type { CreateGroupReqDto } from './models/CreateGroupReqDto';
import type { DeleteGroupsReqDto } from './models/DeleteGroupsReqDto';
import type { GetGroupAuthorizedResourcesDto } from './models/GetGroupAuthorizedResourcesDto';
import type { GetGroupDto } from './models/GetGroupDto';
import type { GroupListRespDto } from './models/GroupListRespDto';
import type { GroupSingleRespDto } from './models/GroupSingleRespDto';
import type { ListGroupMembersDto } from './models/ListGroupMembersDto';
import type { ListGroupsDto } from './models/ListGroupsDto';
import type { RemoveGroupMembersReqDto } from './models/RemoveGroupMembersReqDto';
import type { UpdateGroupReqDto } from './models/UpdateGroupReqDto';
import type { AssignRoleBatchDto } from './models/AssignRoleBatchDto';
import type { AssignRoleDto } from './models/AssignRoleDto';
import type { CreateRoleDto } from './models/CreateRoleDto';
import type { CreateRolesBatch } from './models/CreateRolesBatch';
import type { DeleteRoleDto } from './models/DeleteRoleDto';
import type { GetRoleDto } from './models/GetRoleDto';
import type { ListRoleDepartmentDto } from './models/ListRoleDepartmentDto';
import type { ListRoleDto } from './models/ListRoleDto';
import type { ListRoleMemberDto } from './models/ListRoleMemberDto';
import type { RevokeRoleBatchDto } from './models/RevokeRoleBatchDto';
import type { RevokeRoleDto } from './models/RevokeRoleDto';
import type { RoleAuthorizedResourcesDto } from './models/RoleAuthorizedResourcesDto';
import type { RoleSingleRespDto } from './models/RoleSingleRespDto';
import type { UpdateRoleDto } from './models/UpdateRoleDto';
import type { AddDepartmentMembersReqDto } from './models/AddDepartmentMembersReqDto';
import type { CreateDepartmentReqDto } from './models/CreateDepartmentReqDto';
import type { CreateOrganizationReqDto } from './models/CreateOrganizationReqDto';
import type { DeleteDepartmentReqDto } from './models/DeleteDepartmentReqDto';
import type { DeleteOrganizationReqDto } from './models/DeleteOrganizationReqDto';
import type { DepartmentListRespDto } from './models/DepartmentListRespDto';
import type { DepartmentPaginatedRespDto } from './models/DepartmentPaginatedRespDto';
import type { DepartmentSingleRespDto } from './models/DepartmentSingleRespDto';
import type { GetDepartmentReqDto } from './models/GetDepartmentReqDto';
import type { GetParentDepartmentReqDto } from './models/GetParentDepartmentReqDto';
import type { ListChildrenDepartmentsReqDto } from './models/ListChildrenDepartmentsReqDto';
import type { ListDepartmentMembersReqDto } from './models/ListDepartmentMembersReqDto';
import type { ListOrganizationsReqDto } from './models/ListOrganizationsReqDto';
import type { OrganizationPaginatedRespDto } from './models/OrganizationPaginatedRespDto';
import type { OrganizationSingleRespDto } from './models/OrganizationSingleRespDto';
import type { SearchDepartmentsReqDto } from './models/SearchDepartmentsReqDto';
import type { UpdateDepartmentReqDto } from './models/UpdateDepartmentReqDto';
import type { UpdateOrganizationReqDto } from './models/UpdateOrganizationReqDto';
import type { CreateExtIdpConnDto } from './models/CreateExtIdpConnDto';
import type { CreateExtIdpDto } from './models/CreateExtIdpDto';
import type { DeleteExtIdpConnDto } from './models/DeleteExtIdpConnDto';
import type { DeleteExtIdpDto } from './models/DeleteExtIdpDto';
import type { EnableExtIdpConnDto } from './models/EnableExtIdpConnDto';
import type { ExtIdpConnDetail } from './models/ExtIdpConnDetail';
import type { ExtIdpDto } from './models/ExtIdpDto';
import type { GetExtIdpDto } from './models/GetExtIdpDto';
import type { TenantIdDto } from './models/TenantIdDto';
import type { UpdateExtIdpConnDto } from './models/UpdateExtIdpConnDto';
import type { UpdateExtIdpDto } from './models/UpdateExtIdpDto';
import type { CustomFieldListRespDto } from './models/CustomFieldListRespDto';
import type { GetUserDefinedFieldsDto } from './models/GetUserDefinedFieldsDto';
import type { SetCustomFieldsReqDto } from './models/SetCustomFieldsReqDto';
import type { AuthorizeResourcesDto } from './models/AuthorizeResourcesDto';
import type { CreateNamespaceDto } from './models/CreateNamespaceDto';
import type { CreateNamespacesBatchDto } from './models/CreateNamespacesBatchDto';
import type { CreateResourceDto } from './models/CreateResourceDto';
import type { CreateResourcesBatchDto } from './models/CreateResourcesBatchDto';
import type { DeleteNamespaceDto } from './models/DeleteNamespaceDto';
import type { DeleteNamespacesBatchDto } from './models/DeleteNamespacesBatchDto';
import type { DeleteResourceDto } from './models/DeleteResourceDto';
import type { DeleteResourcesBatchDto } from './models/DeleteResourcesBatchDto';
import type { GetAuthorizedResourcesDto } from './models/GetAuthorizedResourcesDto';
import type { GetNamespaceDto } from './models/GetNamespaceDto';
import type { GetNamespacesBatchDto } from './models/GetNamespacesBatchDto';
import type { GetResourceDto } from './models/GetResourceDto';
import type { GetResourcesBatchDto } from './models/GetResourcesBatchDto';
import type { ListResourcesDto } from './models/ListResourcesDto';
import type { NamespaceDto } from './models/NamespaceDto';
import type { NamespaceListRespDto } from './models/NamespaceListRespDto';
import type { NamespaceRespDto } from './models/NamespaceRespDto';
import type { ResourceDto } from './models/ResourceDto';
import type { ResourceListRespDto } from './models/ResourceListRespDto';
import type { ResourcePaginatedRespDto } from './models/ResourcePaginatedRespDto';
import type { ResourceRespDto } from './models/ResourceRespDto';
import type { UpdateNamespaceDto } from './models/UpdateNamespaceDto';
import type { UpdateResourceDto } from './models/UpdateResourceDto';

import { DEFAULT_OPTIONS, ManagementClientOptions } from './ManagementClientOptions';
import { HttpClient } from './HttpClient';
import Axios from 'axios';


export class ManagementClient {
    private httpClient: HttpClient;
    private options: ManagementClientOptions;
    constructor(options: ManagementClientOptions) {
        // @ts-ignore
        Object.keys(options).forEach((i: any) => !options[i] && delete options[i]);
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        Axios.defaults.baseURL = this.options.host;
        this.httpClient = new HttpClient(this.options);

        if (!this.options.accessKeyId) {
            throw new Error('accessKeyId is required');
        }

        if (!this.options.accessKeySecret) {
            throw new Error(
                'accessKeySecret is required'
            );
        }
    }

    /**
     * @summary 获取 Management API Token
     * @description 获取 Management API Token
     * @param requestBody
     * @returns GetManagementTokenRespDto
     */
    public async getManagementToken(
        requestBody: GetManagementAccessTokenDto,
    ): Promise<GetManagementTokenRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-management-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户信息
     * @description 获取用户信息
     * @param requestBody
     * @returns UserSingleRespDto
     */
    public async getUser(
        requestBody: GetUserDto,
    ): Promise<UserSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量获取用户信息
     * @description 根据用户 id 批量获取用户信息
     * @param requestBody
     * @returns UserListRespDto
     */
    public async getUserBatch(
        requestBody: GetUserBatchDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户列表
     * @description 获取用户列表接口，支持分页
     * @param requestBody
     * @returns UserPaginatedRespDto
     */
    public async listUsers(
        requestBody: ListUsersDto,
    ): Promise<UserPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户的外部身份源
     * @description 获取用户的外部身份源
     * @param requestBody
     * @returns IdentityListRespDto
     */
    public async getUserIdentities(
        requestBody: GetUserIdentitiesDto,
    ): Promise<IdentityListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-identities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户角色列表
     * @description 获取用户角色列表
     * @param requestBody
     * @returns RolePaginatedRespDto
     */
    public async getUserRoles(
        requestBody: GetUserRolesDto,
    ): Promise<RolePaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户实名认证信息
     * @description 获取用户实名认证信息
     * @param requestBody
     * @returns PrincipalAuthenticationInfoPaginatedRespDto
     */
    public async getPrincipalAuthenticationInfo(
        requestBody: GetUserPrincipalAuthenticationInfoDto,
    ): Promise<PrincipalAuthenticationInfoPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-principal-authentication-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除用户实名认证信息
     * @description 删除用户实名认证信息
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async resetPrincipalAuthenticationInfo(
        requestBody: ResetUserPrincipalAuthenticationInfoDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/reset-user-principal-authentication-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户部门列表
     * @description 获取用户部门列表
     * @param requestBody
     * @returns UserDepartmentPaginatedRespDto
     */
    public async getUserDepartments(
        requestBody: GetUserDepartmentsDto,
    ): Promise<UserDepartmentPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 设置用户所在部门
     * @description 设置用户所在部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async setUserDepartment(
        requestBody: SetUserDepartmentsDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/set-user-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户分组列表
     * @description 获取用户分组列表
     * @param requestBody
     * @returns GroupPaginatedRespDto
     */
    public async getUserGroups(
        requestBody: GetUserGroupsDto,
    ): Promise<GroupPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除用户
     * @description 删除用户（支持批量删除）
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteUserBatch(
        requestBody: DeleteUsersBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-users-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户 MFA 绑定信息
     * @description 获取用户 MFA 绑定信息
     * @param requestBody
     * @returns UserMfaSingleRespDto
     */
    public async getUserMfaInfo(
        requestBody: GetUserMfaInfoDto,
    ): Promise<UserMfaSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-mfa-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取已归档的用户列表
     * @description 获取已归档的用户列表
     * @param requestBody
     * @returns ListArchivedUsersSingleRespDto
     */
    public async listArchivedUsers(
        requestBody: ListArchivedUsersDto,
    ): Promise<ListArchivedUsersSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-archived-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 强制下线用户
     * @description 强制下线用户
     * @param requestBody
     * @returns IsUserExistsRespDto
     */
    public async kickUsers(
        requestBody: KickUsersDto,
    ): Promise<IsUserExistsRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/kick-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 判断用户是否存在
     * @description 根据条件判断用户是否存在
     * @param requestBody
     * @returns IsUserExistsRespDto
     */
    public async isUserExists(
        requestBody: IsUserExistsReqDto,
    ): Promise<IsUserExistsRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/is-user-exists',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建用户
     * @description 创建用户，邮箱、手机号、用户名必须包含其中一个
     * @param requestBody
     * @returns UserSingleRespDto
     */
    public async createUser(
        requestBody: CreateUserReqDto,
    ): Promise<UserSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建用户
     * @description 批量创建用户
     * @param requestBody
     * @returns UserListRespDto
     */
    public async createUserBatch(
        requestBody: CreateUserBatchReqDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-users-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改用户资料
     * @description 修改用户资料
     * @param requestBody
     * @returns UserSingleRespDto
     */
    public async updateUser(
        requestBody: UpdateUserReqDto,
    ): Promise<UserSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户可访问应用
     * @description 获取用户可访问应用
     * @param requestBody
     * @returns AppListRespDto
     */
    public async getUserAccessibleApps(
        requestBody: GetUserAccessibleAppsReqDto,
    ): Promise<AppListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-accessible-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户授权的应用
     * @description 获取用户授权的应用
     * @param requestBody
     * @returns AppListRespDto
     */
    public async getUserAuthorizedApps(
        requestBody: GetUserAccessibleAppsReqDto,
    ): Promise<AppListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-authorized-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 判断用户是否有某个角色
     * @description 判断用户是否有某个角色，支持同时传入多个角色进行判断
     * @param requestBody
     * @returns HasAnyRoleRespDto
     */
    public async hasAnyRole(
        requestBody: HasAnyRoleDto,
    ): Promise<HasAnyRoleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/has-any-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户的登录历史记录
     * @description 获取用户登录历史记录
     * @param requestBody
     * @returns UserLoginHistoryPaginatedRespDto
     */
    public async getUserLoginHistory(
        requestBody: GetUserLoginHistoryDto,
    ): Promise<UserLoginHistoryPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-login-history',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户曾经登录过的应用
     * @description 获取用户曾经登录过的应用
     * @param requestBody
     * @returns UserLoggedInAppsListRespDto
     */
    public async getUserLoggedInApps(
        requestBody: GetUserLoggedInAppsReqDto,
    ): Promise<UserLoggedInAppsListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-loggedin-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户被授权的所有资源
     * @description 获取用户被授权的所有资源，用户被授权的资源是用户自身被授予、通过分组继承、通过角色继承、通过组织机构继承的集合
     * @param requestBody
     * @returns AuthorizedResourcePaginatedRespDto
     */
    public async getUserAuthorizedResources(
        requestBody: GetUserAuthorizedResourcesDto,
    ): Promise<AuthorizedResourcePaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-user-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组详情
     * @description 通过分组 code 获取分组详情
     * @param requestBody
     * @returns GroupSingleRespDto
     */
    public async getGroup(
        requestBody: GetGroupDto,
    ): Promise<GroupSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组列表
     * @description 获取分组列表接口，支持分页
     * @param requestBody
     * @returns GroupPaginatedRespDto
     */
    public async getGroupList(
        requestBody: ListGroupsDto,
    ): Promise<GroupPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建分组
     * @param requestBody
     * @returns GroupSingleRespDto
     */
    public async createGroup(
        requestBody: CreateGroupReqDto,
    ): Promise<GroupSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建分组
     * @param requestBody
     * @returns GroupListRespDto
     */
    public async createGroupBatch(
        requestBody: CreateGroupBatchReqDto,
    ): Promise<GroupListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-groups-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改分组
     * @param requestBody
     * @returns GroupSingleRespDto
     */
    public async updateGroup(
        requestBody: UpdateGroupReqDto,
    ): Promise<GroupSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除分组
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteGroups(
        requestBody: DeleteGroupsReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-groups-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 添加分组成员
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async addGroupMembers(
        requestBody: AddGroupMembersReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/add-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 移除分组成员
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async removeGroupMembers(
        requestBody: RemoveGroupMembersReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/remove-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组成员列表
     * @param requestBody
     * @returns UserListRespDto
     */
    public async listGroupMembers(
        requestBody: ListGroupMembersDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-group-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取分组被授权的资源列表
     * @param requestBody
     * @returns AuthorizedResourceListRespDto
     */
    public async getGroupAuthorizedResources(
        requestBody: GetGroupAuthorizedResourcesDto,
    ): Promise<AuthorizedResourceListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-group-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色详情
     * @description 获取角色详情
     * @param requestBody
     * @returns RoleSingleRespDto
     */
    public async getRole(
        requestBody: GetRoleDto,
    ): Promise<RoleSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async assignRole(
        requestBody: AssignRoleDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/assign-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async assignRoleBatch(
        requestBody: AssignRoleBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/assign-role-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async revokeRole(
        requestBody: RevokeRoleDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/revoke-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分配角色
     * @description 分配角色，被分配者可以是用户，可以是部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async revokeRoleBatch(
        requestBody: RevokeRoleBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/revoke-role-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 角色被授权的资源列表
     * @description 角色被授权的资源列表
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async getRoleAuthorizedResources(
        requestBody: RoleAuthorizedResourcesDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-role-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色成员列表
     * @description 获取角色成员列表
     * @param requestBody
     * @returns UserListRespDto
     */
    public async listRoleMembers(
        requestBody: ListRoleMemberDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-role-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色的部门列表
     * @description 获取角色的部门列表
     * @param requestBody
     * @returns UserListRespDto
     */
    public async listDepartments(
        requestBody: ListRoleDepartmentDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-role-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建角色
     * @description 创建角色
     * @param requestBody
     * @returns RoleSingleRespDto
     */
    public async createRole(
        requestBody: CreateRoleDto,
    ): Promise<RoleSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取角色列表
     * @description 获取角色列表
     * @param requestBody
     * @returns RolePaginatedRespDto
     */
    public async listRoles(
        requestBody: ListRoleDto,
    ): Promise<RolePaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除角色
     * @description 删除角色
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteRoles(
        requestBody: DeleteRoleDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-roles-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建角色
     * @description 批量创建角色
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async createRolesBatch(
        requestBody: CreateRolesBatch,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-roles-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改角色
     * @description 修改角色
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async updateRole(
        requestBody: UpdateRoleDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取顶层组织机构列表
     * @description 获取顶层组织机构列表
     * @param requestBody
     * @returns OrganizationPaginatedRespDto
     */
    public async listOrganizations(
        requestBody: ListOrganizationsReqDto,
    ): Promise<OrganizationPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-organizations',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建顶层组织机构
     * @description 创建顶层组织机构
     * @param requestBody
     * @returns OrganizationSingleRespDto
     */
    public async createOrganization(
        requestBody: CreateOrganizationReqDto,
    ): Promise<OrganizationSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改顶层组织机构
     * @description 修改顶层组织机构
     * @param requestBody
     * @returns OrganizationSingleRespDto
     */
    public async updateOrganization(
        requestBody: UpdateOrganizationReqDto,
    ): Promise<OrganizationSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除顶层组织机构
     * @description 删除顶层组织机构
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteOrganization(
        requestBody: DeleteOrganizationReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-organization',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门信息
     * @description 获取部门信息
     * @param requestBody
     * @returns DepartmentSingleRespDto
     */
    public async getDepartment(
        requestBody: GetDepartmentReqDto,
    ): Promise<DepartmentSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建部门
     * @description 创建部门
     * @param requestBody
     * @returns DepartmentSingleRespDto
     */
    public async createDepartment(
        requestBody: CreateDepartmentReqDto,
    ): Promise<DepartmentSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改部门
     * @description 修改部门
     * @param requestBody
     * @returns DepartmentSingleRespDto
     */
    public async updateDepartment(
        requestBody: UpdateDepartmentReqDto,
    ): Promise<DepartmentSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除部门
     * @description 删除部门
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteDepartment(
        requestBody: DeleteDepartmentReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 搜索部门
     * @description 搜索部门
     * @param requestBody
     * @returns DepartmentListRespDto
     */
    public async searchDepartments(
        requestBody: SearchDepartmentsReqDto,
    ): Promise<DepartmentListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/search-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取子部门列表
     * @description 获取子部门列表
     * @param requestBody
     * @returns DepartmentPaginatedRespDto
     */
    public async listChildrenDepartments(
        requestBody: ListChildrenDepartmentsReqDto,
    ): Promise<DepartmentPaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-children-departments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门直属成员列表
     * @description 获取部门直属成员列表
     * @param requestBody
     * @returns UserListRespDto
     */
    public async listDepartmentMembers(
        requestBody: ListDepartmentMembersReqDto,
    ): Promise<UserListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取部门直属成员 ID 列表
     * @description 获取部门直属成员 ID 列表
     * @param requestBody
     * @returns any
     */
    public async listDepartmentMemberIds(
        requestBody: ListChildrenDepartmentsReqDto,
    ): Promise<any> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-department-member-ids',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 部门下添加成员
     * @description 部门下添加成员
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async addDepartmentMembers(
        requestBody: AddDepartmentMembersReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/add-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 部门下删除成员
     * @description 部门下删除成员
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async removeDepartmentMembers(
        requestBody: AddDepartmentMembersReqDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/remove-department-members',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取父部门信息
     * @description 获取父部门信息
     * @param requestBody
     * @returns DepartmentSingleRespDto
     */
    public async getParentDepartment(
        requestBody: GetParentDepartmentReqDto,
    ): Promise<DepartmentSingleRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-parent-department',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取身份源列表
     * @description 获取身份源列表
     * @param requestBody
     * @returns ExtIdpDto
     */
    public async listExtIdp(
        requestBody: TenantIdDto,
    ): Promise<ExtIdpDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-ext-idp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取身份源详情
     * @description 获取身份源详情
     * @param requestBody
     * @returns ExtIdpDto
     */
    public async getExtIdp(
        requestBody: GetExtIdpDto,
    ): Promise<ExtIdpDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-ext-idp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建身份源
     * @description 创建身份源
     * @param requestBody
     * @returns ExtIdpDto
     */
    public async createExtIdp(
        requestBody: CreateExtIdpDto,
    ): Promise<ExtIdpDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-ext-idp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 更新身份源配置
     * @description 更新身份源配置
     * @param requestBody
     * @returns ExtIdpDto
     */
    public async updateExtIdp(
        requestBody: UpdateExtIdpDto,
    ): Promise<ExtIdpDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-ext-idp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除身份源配置
     * @description 删除身份源配置
     * @param requestBody
     * @returns ExtIdpDto
     */
    public async deleteExtIdp(
        requestBody: DeleteExtIdpDto,
    ): Promise<ExtIdpDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-ext-idp',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 在某个已有身份源下创建新连接
     * @description 在某个已有身份源下创建新连接
     * @param requestBody
     * @returns ExtIdpConnDetail
     */
    public async createExtIdpConn(
        requestBody: CreateExtIdpConnDto,
    ): Promise<ExtIdpConnDetail> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-ext-idp-conn',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 更新身份源连接
     * @description 更新身份源连接
     * @param requestBody
     * @returns ExtIdpConnDetail
     */
    public async updateExtIdpConn(
        requestBody: UpdateExtIdpConnDto,
    ): Promise<ExtIdpConnDetail> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-ext-idp-conn',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除身份源配置
     * @description 删除身份源配置
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteExtIdpConn(
        requestBody: DeleteExtIdpConnDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-ext-idp-conn',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 身份源连接开关
     * @description 身份源连接开关
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async changeConnState(
        requestBody: EnableExtIdpConnDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/enable-ext-idp-conn',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取用户池配置的扩展字段列表
     * @description 获取用户池配置的扩展字段列表
     * @param requestBody
     * @returns CustomFieldListRespDto
     */
    public async getCustomFields(
        requestBody: GetUserDefinedFieldsDto,
    ): Promise<CustomFieldListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-custom-fields',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建扩展字段
     * @description 创建扩展字段
     * @param requestBody
     * @returns CustomFieldListRespDto
     */
    public async setCustomFields(
        requestBody: SetCustomFieldsReqDto,
    ): Promise<CustomFieldListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/set-custom-fields',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建资源
     * @description 创建资源
     * @param requestBody
     * @returns ResourceRespDto
     */
    public async createResource(
        requestBody: CreateResourceDto,
    ): Promise<ResourceRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-resource',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量创建资源
     * @description 批量创建资源
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async createResourcesBatch(
        requestBody: CreateResourcesBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-resources-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取资源详情
     * @description 获取资源详情
     * @param requestBody
     * @returns ResourceRespDto
     */
    public async getResource(
        requestBody: GetResourceDto,
    ): Promise<ResourceRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-resource',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量获取资源详情
     * @description 批量获取资源详情
     * @param requestBody
     * @returns ResourceListRespDto
     */
    public async getResourcesBatch(
        requestBody: GetResourcesBatchDto,
    ): Promise<ResourceListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-resources-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 分页获取资源列表
     * @description 分页获取资源列表
     * @param requestBody
     * @returns ResourcePaginatedRespDto
     */
    public async listResources(
        requestBody: ListResourcesDto,
    ): Promise<ResourcePaginatedRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/list-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改资源
     * @description 修改资源（Pratial Update）
     * @param requestBody
     * @returns ResourceRespDto
     */
    public async updateResource(
        requestBody: UpdateResourceDto,
    ): Promise<ResourceRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-resource',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除资源
     * @description 删除资源
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteResource(
        requestBody: DeleteResourceDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-resource',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量删除资源
     * @description 批量删除资源
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deleteResourcesBatch(
        requestBody: DeleteResourcesBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-resources-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建权限分组
     * @description 创建权限分组
     * @param requestBody
     * @returns ResourceDto
     */
    public async createNamespace(
        requestBody: CreateNamespaceDto,
    ): Promise<ResourceDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-namespace',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 创建权限分组
     * @description 创建权限分组
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async createNamespacesBatch(
        requestBody: CreateNamespacesBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/create-namespaces-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取权限分组详情
     * @description 获取权限分组详情
     * @param requestBody
     * @returns NamespaceRespDto
     */
    public async getNamespace(
        requestBody: GetNamespaceDto,
    ): Promise<NamespaceRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-namespace',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量获取权限分组详情
     * @description 批量获取权限分组详情
     * @param requestBody
     * @returns NamespaceListRespDto
     */
    public async getNamespacesBatch(
        requestBody: GetNamespacesBatchDto,
    ): Promise<NamespaceListRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-namespaces-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 修改权限分组信息
     * @description 修改权限分组信息
     * @param requestBody
     * @returns NamespaceDto
     */
    public async updateNamespace(
        requestBody: UpdateNamespaceDto,
    ): Promise<NamespaceDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/update-namespace',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 删除权限分组信息
     * @description 删除权限分组信息
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deketeNamespace(
        requestBody: DeleteNamespaceDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-namespace',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 批量删除权限分组信息
     * @description 批量删除权限分组信息
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async deketeNamespacesBatch(
        requestBody: DeleteNamespacesBatchDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/delete-namespaces-batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 授权资源
     * @description 给多个主体同时授权多个资源
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async authorizeResources(
        requestBody: AuthorizeResourcesDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/authorize-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @summary 获取某个主体被授权的资源列表
     * @description 获取某个主体被授权的资源列表
     * @param requestBody
     * @returns IsSuccessRespDto
     */
    public async getTargetAuthorizedResources(
        requestBody: GetAuthorizedResourcesDto,
    ): Promise<IsSuccessRespDto> {
        return await this.httpClient.request({
            method: 'POST',
            url: '/api/v3/get-authorized-resources',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}