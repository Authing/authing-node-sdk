import { SetUserDepartmentDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getUserDepartments", () => {
  let departmentId: string; // 默认为 nodes 表中 root用户池 id
  let organizationCode: string; // 默认为 nodes 表中 我的用户 code
  const username = generateRandomString(10);
  let userId: string;

  beforeAll(async () => {
    const { data: organizationPagingDto } =
      await managementClient.searchOrganizations({
        keywords: "root 用户池",
      });

    const organizationDto = organizationPagingDto.list[0];
    departmentId = organizationDto.departmentId;
    organizationCode = organizationDto.organizationCode;

    const data = await managementClient.createUser({ username });
    userId = data.data.userId;
    const departments = [{ departmentId }] as Array<SetUserDepartmentDto>;
    await managementClient.setUserDepartments({
      departments,
      userId,
    });
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
    it("with full basic user", async () => {
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUserDepartments({
        userId,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("user organizationCode is invalid", async () => {
      const userId = generateRandomString(10);
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUserDepartments({
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("用户不存在");
    });
  });

  describe("Fail", () => {
    it("user organizationCode must be not empty", async () => {
      const userId = "";
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUserDepartments({
        userId,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userId 格式错误");
    });
  });

  describe("Fail", () => {
    it("user organizationCode must be not blank", async () => {
      const userId = " ";
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUserDepartments({
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("用户不存在");
    });
  });

  describe("Fail", () => {
    it("user organizationCode must be less than 64 characters", async () => {
      const userId =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUserDepartments({
        userId,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("用户不存在");
    });
  });
});
