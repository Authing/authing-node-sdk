/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentI18nDto } from './DepartmentI18nDto';

export type InvitationDepartmentRespDto = {
    /**
     * 组织 Code（organizationCode）
     */
    organizationCode: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 部门创建时间
     */
    createdAt: string;
    /**
     * 修改时间
     */
    updatedAt?: string;
    /**
     * 自定义部门 ID，用于存储自定义的 ID
     */
    openDepartmentId?: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 部门负责人 ID
     */
    leaderUserIds?: Array<string>;
    /**
     * 部门描述
     */
    description?: string;
    /**
     * 父部门 id，如果是根部门，传 root
     */
    parentDepartmentId: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 父部门 code
     */
    parentDepartmentCode: string;
    /**
     * 部门人数（仅包含直属成员）
     */
    membersCount: number;
    /**
     * 是否包含子部门
     */
    hasChildren: boolean;
    /**
     * 是否是虚拟部门
     */
    isVirtualNode?: boolean;
    /**
     * 多语言设置
     */
    i18n?: DepartmentI18nDto;
    /**
     * 部门的扩展字段数据
     */
    customData?: any;
    /**
     * 部门关联的岗位
     */
    posts?: Array<string>;
    /**
     * 岗位 id 列表
     */
    postIdList?: Array<string>;
    /**
     * 部门状态
     */
    status?: boolean;
    /**
     * 访问限制
     */
    allow?: string;
    /**
     * 部门 ID
     */
    id: string;
    /**
     * 从顶层部门到当前部门的 ID 路径
     */
    idPath?: Array<string>;
    /**
     * 从顶层部门到当前部门的部门名路径
     */
    namePath?: Array<string>;
    /**
     * 从顶层部门到当前部门的部门 code 路径
     */
    codePath?: (string | null);
};
