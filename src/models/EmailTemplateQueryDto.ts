/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailTemplateQueryDto = {
    /**
     * Invitation policy email scenario:
     * - `INVITE`: invitation email
     * - `WELCOME`: welcome email
     */
    scene: EmailTemplateQueryDto.scene;
    /**
     * Policy ID
     */
    policyId: string;
    /**
     * List ID, obtain the associated policy details based on the list ID. When the list sends an invitation, a snapshot of the policy will be generated. If after the list sends the invitation, you need to obtain the corresponding policy configuration when sending, this parameter should be carried
     */
    rosterId?: string;
    /**
     * Email template type, optional, you can obtain supported email templates of specified types
     */
    templateType?: string;
};

export namespace EmailTemplateQueryDto {

    /**
     * Invitation policy email scenario:
     * - `INVITE`: invitation email
     * - `WELCOME`: welcome email
     */
    export enum scene {
        INVITE = 'INVITE',
        WELCOME = 'WELCOME',
    }


}
