import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listChildrenDepartments", () => {
  let parentDepartmentId: string; // 默认为 nodes 表中 root用户池 id
  let organizationCode: string; // 默认为 nodes 表中 我的用户 code
  const name = generateRandomString(10);
  const isVirtualNode = false;
  const departmentCode = generateRandomString();
  let departmentId: string;

  beforeAll(async () => {
    const { data: organizationPagingDto } =
      await managementClient.searchOrganizations({
        keywords: "root 用户池",
      });

    const organizationDto = organizationPagingDto.list[0];
    parentDepartmentId = organizationDto.departmentId;
    organizationCode = organizationDto.organizationCode;

    const { data } = await managementClient.createDepartment({
      parentDepartmentId,
      organizationCode,
      name,
      code: departmentCode,
      isVirtualNode,
    });
    departmentId = data.departmentId;
  });

  // 析构;
  afterAll(async () => {
    //删除角色
    await managementClient.deleteDepartment({
      departmentId,
      organizationCode,
    });
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listChildrenDepartments({
        departmentId,
        organizationCode,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("role organizationCode is invalid", async () => {
      const organizationCode = "额！ ";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listChildrenDepartments({
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
    it("role organizationCode must be not empty", async () => {
      const organizationCode = "";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listChildrenDepartments({
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
    it("role organizationCode must be not blank", async () => {
      const organizationCode = " ";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listChildrenDepartments({
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
    it("role organizationCode must be less than 64 characters", async () => {
      const organizationCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listChildrenDepartments({
        departmentId,
        organizationCode,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
