import { CreateDepartmentReqDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getDepartment", () => {
  const parentDepartmentId = "62a752595f269c24fbbf07fd"; // 默认为 nodes 表中 root用户池 id
  const organizationCode = "ZZYRFAtkDnZv0NWjVD1dVhjCHDHfVc"; // 默认为 nodes 表中 我的用户 code
  const name = generateRandomString(10);
  const isVirtualNode = false;
  const code = generateRandomString();
  let departmentId: string;
  beforeAll(async () => {
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
      departmentIdType: CreateDepartmentReqDto.departmentIdType.DEPARTMENT_ID,
    });

    departmentId = department.departmentId;
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.getDepartment({
        departmentId,
        organizationCode,
      });
      expect(statusCode).toEqual(200);
      expect(department.departmentId).toEqual(departmentId);
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
    it("department organizationCode is invalid", async () => {
      const organizationCode = "额！ ";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.getDepartment({
        departmentId,
        organizationCode,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode}`
      );
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not empty", async () => {
      const organizationCode = "";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.getDepartment({
        departmentId,
        organizationCode,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode}`
      );
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not blank", async () => {
      const organizationCode = " ";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.getDepartment({
        departmentId,
        organizationCode,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode}`
      );
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be less than 64 characters", async () => {
      const organizationCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.getDepartment({
        departmentId,
        organizationCode,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
