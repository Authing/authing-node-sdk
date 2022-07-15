import { managementClient } from "../client";

describe("getUserDepartments", () => {
  let userIds: string[] = [];

  beforeAll(async () => {
    const { data } = await managementClient.listUsers({
      withCustomData: true,
      withIdentities: true,
      withDepartmentIds: true,
    });
    userIds = data.list.map((x) => x.userId);
  });

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.getUserDepartments({
        userId: userIds[0],
      });
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
      expect(Array.isArray(data.list)).toBeTruthy();
    });
  });

  describe("Fail", () => {
    it("userId is invalid", async () => {
      const { statusCode, message } = await managementClient.getUserDepartments(
        {
          userId: "",
        }
      );
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userId 格式错误");
    });
  });
});
