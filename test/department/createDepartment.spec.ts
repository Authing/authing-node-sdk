import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createDepartment", () => {
  let parentDepartmentId: string; // 默认为 nodes 表中 root用户池 id
  let organizationCode: string; // 默认为 nodes 表中 我的用户 code
  const name = generateRandomString(10);
  const isVirtualNode = false;
  const code = generateRandomString();
  beforeAll(async () => {
    const { data: organizationPagingDto } =
      await managementClient.searchOrganizations({
        keywords: "root 用户池",
      });

    const organizationDto = organizationPagingDto.list[0];
    parentDepartmentId = organizationDto.departmentId;
    organizationCode = organizationDto.organizationCode;
  });

  describe("Success", () => {
    it("with full basic department", async () => {
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
      });

      expect(statusCode).toEqual(200);
      expect(department.organizationCode).toEqual(organizationCode);
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
    it("department organizationCode is invalid", async () => {
      const organizationCode = generateRandomString();
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
      } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
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
      } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid organization code ${organizationCode}`);
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
      } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
