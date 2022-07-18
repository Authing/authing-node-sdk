import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createDepartment", () => {
  const parentDepartmentId = "62a752595f269c24fbbf07fd";
  const name = "组织机构节点啊";
  const isVirtualNode = false;
  const openDepartmentId = "ou_7dab8a3d3cdccxxxxxx777c7ad535d62";
  const code = "6229c4deb3e4d8a20b6021ff";
  beforeAll(async () => {
    const organizationCode = "steamory";
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
    });

    expect(statusCode).toEqual(200);
    expect(department.organizationCode).toEqual(organizationCode);
    expect(department.name).toEqual(name);
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const organizationCode = "steamory";
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
      expect(statusCode).toEqual(499);
      expect(message).toEqual("部门标识符格式不正确！");
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
