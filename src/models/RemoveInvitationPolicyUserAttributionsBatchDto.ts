/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationPolicyUserAttributionListDto } from './InvitationPolicyUserAttributionListDto';

export type RemoveInvitationPolicyUserAttributionsBatchDto = {
    /**
     * 关联对象列表
     */
    targets: Array<InvitationPolicyUserAttributionListDto>;
    /**
     * 策略 ID
     */
    policyId: string;
};
