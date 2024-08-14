/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取邀请策略详情
 */
export type GetInvitationPolicyDto = {
    /**
     * 策略 ID
     */
    policyId?: any;
    /**
     * 名单 ID，根据名单 ID 获取关联的策略详情，在名单发送邀请时会给策略生成快照，若在名单发送邀请后，需要获取发送时对应的策略配置，应该携带此参数
     */
    rosterId?: any;
    /**
     * 是否返回创建者详情
     */
    withCreatorDetail?: any;
};
