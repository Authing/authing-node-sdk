import { DepartmentDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("deleteDepartment", () => {
  const parentDepartmentId = "62d63a952a220b5349960b5d"; // 默认为 nodes 表中 root用户池 id
  const organizationCode = "iv2qZBWrMO3F5SNj4VTchbP0t66KO0"; // 默认为 nodes 表中 root用户池 code
  const name = generateRandomString(10);
  const isVirtualNode = false;
  const code = generateRandomString();
  let departmentId: string;
  beforeAll(async () => {});

  describe("Success", () => {
    it("with full basic department", async () => {
      const { data: department } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      departmentId = department.departmentId;
      console.log(department);

      const { statusCode, message } = await managementClient.deleteDepartment({
        departmentId,
        organizationCode,
      });
      console.log(department);
      console.log(message);
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    // departments.forEach(async (departmentId) => {
    // await managementClient.deleteDepartment({
    //   departmentId,
    //   organizationCode,
    // });
    // });
  });

  describe("Fail", () => {
    it("department organizationCode is invalid", async () => {
      const { data: department } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      departmentId = department.departmentId;

      const organizationCode1 = "额！ ";
      const { statusCode, message } = await managementClient.deleteDepartment({
        departmentId,
        organizationCode: organizationCode1,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode1}`
      );

      await managementClient.deleteDepartment({
        departmentId,
        organizationCode,
      });
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not empty", async () => {
      const { data: department } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      departmentId = department.departmentId;

      const organizationCode1 = "";
      const { statusCode, message } = await managementClient.deleteDepartment({
        departmentId,
        organizationCode: organizationCode1,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode1}`
      );

      await managementClient.deleteDepartment({
        departmentId,
        organizationCode,
      });
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not blank", async () => {
      const { data: department } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      departmentId = department.departmentId;

      const organizationCode1 = " ";
      const { statusCode, message } = await managementClient.deleteDepartment({
        departmentId,
        organizationCode: organizationCode1,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `organization not found for code: ${organizationCode1}`
      );

      await managementClient.deleteDepartment({
        departmentId,
        organizationCode,
      });
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be less than 64 characters", async () => {
      const { data: department } = await managementClient.createDepartment({
        parentDepartmentId,
        organizationCode,
        name,
        code,
        isVirtualNode,
      });
      departmentId = department.departmentId;

      const organizationCode1 =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const { statusCode, message } = await managementClient.deleteDepartment({
        departmentId,
        organizationCode: organizationCode1,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`参数 organizationCode 格式错误`);

      await managementClient.deleteDepartment({
        departmentId,
        organizationCode,
      });
    });
  });
});
