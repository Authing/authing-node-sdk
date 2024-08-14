/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailTemplateQueryDto = {
    /**
     * 邀请策略邮件场景:
     * - `INVITE`: 邀请邮件
     * - `WELCOME`: 欢迎邮件
     */
    scene: EmailTemplateQueryDto.scene;
    /**
     * 策略 ID
     */
    policyId: string;
    /**
     * 名单 ID，根据名单 ID 获取关联的策略详情，在名单发送邀请时会给策略生成快照，若在名单发送邀请后，需要获取发送时对应的策略配置，应该携带此参数
     */
    rosterId?: string;
    /**
     * 邮件模版类型，可选，可获取支持的指定类型的邮件模板
     */
    templateType?: string;
};

export namespace EmailTemplateQueryDto {

    /**
     * 邀请策略邮件场景:
     * - `INVITE`: 邀请邮件
     * - `WELCOME`: 欢迎邮件
     */
    export enum scene {
        INVITE = 'INVITE',
        WELCOME = 'WELCOME',
    }


}
