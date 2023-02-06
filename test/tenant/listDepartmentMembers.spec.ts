import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listDepartmentMemberIds", () => {
  let organizationCode: string;
  let departmentId: string;
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id

  beforeAll(async () => {
    const { data: organizationPagingDto } =
      await managementClient.searchOrganizations({
        keywords: "root 用户池",
      });

    const organizationDto = organizationPagingDto.list[0];
    const parentDepartmentId = organizationDto.departmentId;
    const organizationCode1 = organizationDto.organizationCode;

    const name = generateRandomString(10);
    const code = generateRandomString();
    const { data: department } = await managementClient.createDepartment({
      parentDepartmentId,
      organizationCode: organizationCode1,
      name,
      code,
      isVirtualNode: false,
      tenantId,
    });
    organizationCode = department.organizationCode;
    departmentId = department.departmentId;
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.listDepartmentMemberIds({
        organizationCode,
        departmentId,
        tenantId,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  // 析构;
  afterAll(async () => {
    // 删除用户;
    await managementClient.deleteDepartment({
      departmentId,
      organizationCode,
    });
  });

  describe("Fail", () => {
    it("department organizationCode is invalid", async () => {
      const organizationCode = "额！ ";
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.listDepartmentMemberIds({
        organizationCode,
        departmentId,
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
      } = await managementClient.listDepartmentMemberIds({
        organizationCode,
        departmentId,
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
      } = await managementClient.listDepartmentMemberIds({
        organizationCode,
        departmentId,
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
      } = await managementClient.listDepartmentMemberIds({
        organizationCode,
        departmentId,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
