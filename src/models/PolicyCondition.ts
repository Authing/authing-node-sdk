/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PolicyCondition = {
    /**
     * Condition Param
     */
    param: PolicyCondition.param;
    /**
     * Condition Operator
     */
    operator: PolicyCondition.operator;
    /**
     * Condition Value
     */
    value: string;
};

export namespace PolicyCondition {

    /**
     * Condition Param
     */
    export enum param {
        USER_POOL_ID = 'UserPoolId',
        APP_ID = 'AppId',
        REQUEST_FROM = 'RequestFrom',
        USER_ID = 'UserId',
        USER_ARN = 'UserArn',
        CURRENT_TIME = 'CurrentTime',
        EPOCH_TIME = 'EpochTime',
        SOURCE_IP = 'SourceIp',
        USER = 'User',
        MULTI_FACTOR_AUTH_PRESENT = 'MultiFactorAuthPresent',
        MULTI_FACTOR_AUTH_AGE = 'MultiFactorAuthAge',
        USER_AGENT = 'UserAgent',
        REFERER = 'Referer',
        DEVICE = 'Device',
        OS = 'OS',
        COUNTRY = 'Country',
        PROVINCE = 'Province',
        CITY = 'City',
        DEVICE_CHANGED = 'DeviceChanged',
        DEVICE_UNTRUSTED = 'DeviceUntrusted',
        PROXY_UNTRUSTED = 'ProxyUntrusted',
        LOGGED_IN_APPS = 'LoggedInApps',
        NAMESPACE = 'Namespace',
    }

    /**
     * Condition Operator
     */
    export enum operator {
        BOOL = 'Bool',
        DATE_EQUALS = 'DateEquals',
        DATE_NOT_EQUALS = 'DateNotEquals',
        DATE_LESS_THAN = 'DateLessThan',
        DATE_LESS_THAN_EQUALS = 'DateLessThanEquals',
        DATE_GREATER_THAN = 'DateGreaterThan',
        DATE_GREATER_THAN_EQUALS = 'DateGreaterThanEquals',
        IP_ADDRESS = 'IpAddress',
        NOT_IP_ADDRESS = 'NotIpAddress',
        NUMERIC_EQUALS = 'NumericEquals',
        NUMERIC_NOT_EQUALS = 'NumericNotEquals',
        NUMERIC_LESS_THAN = 'NumericLessThan',
        NUMERIC_LESS_THAN_EQUALS = 'NumericLessThanEquals',
        NUMERIC_GREATER_THAN = 'NumericGreaterThan',
        NUMERIC_GREATER_THAN_EQUALS = 'NumericGreaterThanEquals',
        STRING_EQUALS = 'StringEquals',
        STRING_NOT_EQUALS = 'StringNotEquals',
        STRING_EQUALS_IGNORE_CASE = 'StringEqualsIgnoreCase',
        STRING_NOT_EQUALS_IGNORE_CASE = 'StringNotEqualsIgnoreCase',
        STRING_LIKE = 'StringLike',
        STRING_NOT_LIKE = 'StringNotLike',
        LIST_CONTAINS = 'ListContains',
    }


}
