import { UpdateDepartmentReqDto } from "../../src/models";
import { managementClient } from "../client";

describe("updateDepartment", () => {
  beforeAll(async () => {});
  const departmentId = "62cd22b1fd693b83d2e08970"; // 默认为 nodes 表中 id
  const organizationCode = "ZZYRFAtkDnZv0NWjVD1dVhjCHDHfVc"; // 默认为 nodes 中 跟节点的 code
  const name = "组织机构节点啊";
  const departmentIdType =
    UpdateDepartmentReqDto.departmentIdType.DEPARTMENT_ID;

  describe("Success", () => {
    const code = "anyway"; // 可更改的 code
    it("with full basic department", async () => {
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.updateDepartment({
        departmentId,
        organizationCode,
        name,
        code,
        departmentIdType,
      });
      expect(statusCode).toEqual(200);
      expect(department.code).toEqual(code);
      expect(department.name).toEqual(name);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    // const { statusCode, data, message } =
    //   await managementClient.deleteDepartment({
    //   });
  });

  describe("Fail", () => {
    it("department code is invalid", async () => {
      const code = "额！ ";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.updateDepartment({
        departmentId,
        organizationCode,
        name,
        code,
        departmentIdType,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid organization code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("department code must be not blank", async () => {
      const code = " ";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.updateDepartment({
        departmentId,
        organizationCode,
        name,
        code,
        departmentIdType,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid organization code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("department code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.updateDepartment({
        departmentId,
        organizationCode,
        name,
        code,
        departmentIdType,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`参数 code 格式错误`);
    });
  });
});
