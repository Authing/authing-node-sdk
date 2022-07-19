import { SetUserDepartmentDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("setUserDepartments", () => {
  const departmentId = "62a752595f269c24fbbf07fd"; // 默认为 nodes 表中 root用户池 id
  const organizationCode = "ZZYRFAtkDnZv0NWjVD1dVhjCHDHfVc"; // 默认为 nodes 表中 root用户池 code
  const username = generateRandomString(10);
  let userId: string;

  beforeAll(async () => {
    const data = await managementClient.createUser({ username });
    userId = data.data.userId;
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    await managementClient.removeDepartmentMembers({
      userIds: [userId],
      organizationCode,
      departmentId,
    });

    await managementClient.deleteUsersBatch({ userIds: [userId] });
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.setUserDepartments({
        departments,
        userId,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("department organizationCode is invalid", async () => {
      const departmentId = generateRandomString();
      const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.setUserDepartments({
        departments,
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(`存在不合法的 departmentId: ${departmentId}`);
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not empty", async () => {
      const departmentId = "";
      const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.setUserDepartments({
        departments,
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(`存在不合法的 departmentId: ${departmentId}`);
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be not blank", async () => {
      const departmentId = " ";
      const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.setUserDepartments({
        departments,
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(`存在不合法的 departmentId: ${departmentId}`);
    });
  });

  describe("Fail", () => {
    it("department organizationCode must be less than 64 characters", async () => {
      const departmentId =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
      const {
        statusCode,
        data: department,
        message,
      } = await managementClient.setUserDepartments({
        departments,
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(`存在不合法的 departmentId: ${departmentId}`);
    });
  });
});
