import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("isUserInDepartment", () => {
  let organizationCode: string;
  let departmentId: string;
  const userId = "5a597f35085a2000144a10ed";

  beforeAll(async () => {
    const parentDepartmentId = "62d63a952a220b5349960b5d"; // 默认为 nodes 表中 root用户池 id
    const organizationCode1 = "iv2qZBWrMO3F5SNj4VTchbP0t66KO0"; // 默认为 nodes 表中 root用户池 code
    const name = generateRandomString(10);
    const code = generateRandomString();
    const { data: department } = await managementClient.createDepartment({
      parentDepartmentId,
      organizationCode: organizationCode1,
      name,
      code,
      isVirtualNode: false,
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
      } = await managementClient.isUserInDepartment({
        organizationCode,
        departmentId,
        userId,
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
      } = await managementClient.isUserInDepartment({
        organizationCode,
        departmentId,
        userId,
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
      } = await managementClient.isUserInDepartment({
        organizationCode,
        departmentId,
        userId,
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
      } = await managementClient.isUserInDepartment({
        organizationCode,
        departmentId,
        userId,
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
      } = await managementClient.isUserInDepartment({
        organizationCode,
        departmentId,
        userId,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
