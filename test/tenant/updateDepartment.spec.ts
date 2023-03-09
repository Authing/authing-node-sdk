import { UpdateDepartmentReqDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateDepartment", () => {
  let departmentId: string; // 默认为 nodes 表中 id
  let organizationCode: string; // 默认为 nodes 中 跟节点的 code
  const name = generateRandomString(10);
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id
  const departmentIdType =
    UpdateDepartmentReqDto.departmentIdType.DEPARTMENT_ID;

  beforeAll(async () => {
    const { data: organizationPagingDto } =
      await managementClient.searchOrganizations({
        keywords: "root 用户池",
      });

    const organizationDto = organizationPagingDto.list[0];
    const parentDepartmentId = organizationDto.departmentId;
    organizationCode = organizationDto.organizationCode;
    departmentId = organizationDto.departmentId;

    const openDepartmentId = generateRandomString();
    const code = generateRandomString();
    const isVirtualNode = false;
    const {
      statusCode,
      data: department,
      message,
    } = await managementClient.createDepartment({
      parentDepartmentId,
      organizationCode,
      name,
      code,
      isVirtualNode,
      openDepartmentId,
      tenantId,
    });
    expect(statusCode).toEqual(200);
    expect(department.organizationCode).toEqual(organizationCode);
    expect(department.name).toEqual(name);
  });

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
        tenantId,
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
