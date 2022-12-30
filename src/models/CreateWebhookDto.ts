/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWebhookDto = {
    /**
     * 请求数据格式
     */
    contentType: CreateWebhookDto.contentType;
    /**
     * 用户真实名称，不具备唯一性。 示例值: 张三
     */
    events: Array<'test' | 'register' | 'login' | 'mfa:verified' | 'kick' | 'user:created' | 'user:password-changed' | 'user:updated' | 'user:email-verified' | 'user:archived' | 'user:unarchived' | 'user:blocked' | 'user:unblocked' | 'user:deleted' | 'user:register-whitelist-added' | 'user:register-whitelist-deleted' | 'user:udv-changed' | 'user:link-account' | 'user:password-update-remind' | 'permission:revoke' | 'permission:add' | 'resource:created' | 'resource:delete' | 'resource:updated' | 'role:created' | 'role:updated' | 'role:deleted' | 'role:disable' | 'role:assigned' | 'subject:remove' | 'role:unassigned' | 'role:udv-changed' | 'application:mfa:enabled' | 'application:mfa:disabled' | 'group:created' | 'group:updated' | 'group:deleted' | 'group:member-added' | 'group:member-removed' | 'organization:created' | 'organization:imported' | 'organization:deleted' | 'organization:node-added' | 'organization:node-updated' | 'organization:tree-updated' | 'organization:node-deleted' | 'organization:node-moved' | 'organization:member-added' | 'organization:member-removed' | 'organization:udv-changed' | 'privilege-namespace:created' | 'privilege-namespace:updated' | 'privilege-namespace:deleted' | 'user-pool:cooperator-added' | 'user-pool:cooperator-removed' | 'user-pool:secret-refreshed' | 'user-pool:updated' | 'user-pool:udf-added' | 'user-pool:udf-deleted' | 'user-pool:env-added' | 'user-pool:env-deleted' | 'user-pool:env-updated' | 'user-pool:launchpad-app-installed' | 'user-pool:launchpad-app-uninstalled' | 'application:created' | 'application:updated' | 'application:deleted' | 'application:secret-refreshed' | 'data-resource:created' | 'data-resource:updated' | 'data-resource:deleted' | 'data-strategy-permission:revoke' | 'data-strategy-permission:add' | 'unusual-location:login'>;
    /**
     * Webhook 回调地址
     */
    url: string;
    /**
     * Webhook 名称
     */
    name: string;
    /**
     * 是否启用
     */
    enabled?: boolean;
    /**
     * 请求密钥
     */
    secret?: string;
};

export namespace CreateWebhookDto {

    /**
     * 请求数据格式
     */
    export enum contentType {
        APPLICATION_JSON = 'application/json',
        APPLICATION_X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded',
    }


}
