import { managementClient } from "../client";

describe("getUserRoles", () => {
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
      const { statusCode, data } = await managementClient.getUserRoles({
        userId: userIds[0],
        namespace: "default",
      });
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
      expect(Array.isArray(data.list)).toBeTruthy();
    });
  });

  describe("Fail", () => {
    it("userId is invalid", async () => {
      const { statusCode, message } = await managementClient.getUserRoles({
        userId: "",
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userId 格式错误");
    });
  });
});
