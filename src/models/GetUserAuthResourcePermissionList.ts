/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserAuthResourcePermissionList = {
  /**
   * 权限空间 code
   */
  namespaceCode: string;
  /**
   * 数据资源权限操作列表
   */
  actions: Array<string>;
  /**
   * 资源路径
   */
  resource: string;
};
