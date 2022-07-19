import { TargetDto } from "../../src/models";
import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//listRoleDepartments
describe("listRoleDepartments", () => {
  //定义
  const code = generateRandomString(4);
  const namespace = "default";
  const description = generateRandomString(5);
  var departmentCode: any = "";
  var departmentId = "";
  var organizationCode = "";

  //构造
  beforeAll(async () => {
    //创建角色
    await managementClient.createRole({
      code,
      namespace,
      description,
    });
    //创建部门
    var parentDepartment =
      await managementClient.listOrganizations({
      })
    const { statusCode, data, message } =
      await managementClient.createDepartment({
        organizationCode: parentDepartment.data.list[0].organizationCode,
        name: generateRandomString(5),
        parentDepartmentId: parentDepartment.data.list[0].departmentId,
      })
    organizationCode = parentDepartment.data.list[0].organizationCode;
    departmentCode = data.code;
    departmentId = data.departmentId;
    //分配角色
    await managementClient.assignRole({
      code,
      namespace,
      targets: [
        { targetType: TargetDto.targetType.DEPARTMENT, targetIdentifier: departmentId },
      ]
    });
  });

  //析构
  afterAll(async () => {
    //删除角色
    await managementClient.deleteRolesBatch({
      codeList: [code],
      namespace,
    });
    //删除部门
    await managementClient.deleteDepartment({
      organizationCode,
      departmentId
    });
  });

  //成功
  describe("Success", () => {
    //默认
    it("default", async () => {
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(role.totalCount).toBeGreaterThanOrEqual(1);
    });
  });

  //失败
  describe("Fail", () => {
  });
});
