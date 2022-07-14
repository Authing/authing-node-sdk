import { managementClient } from "../client";

describe("getUsersBatch", () => {
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
      const { statusCode, data } = await managementClient.getUserBatch({
        userIds,
        withCustomData: true,
        withIdentities: true,
        withDepartmentIds: true,
      });
      expect(statusCode).toEqual(200);
      expect(data.length).toBeGreaterThan(0);
      const user = data?.[0];
      expect(user.customData).toBeDefined();
      expect(user.departmentIds).toBeDefined();
      expect(user.identities).toBeDefined();
    });
  });

  describe("Fail", () => {
    it("userIds is invalid", async () => {
      const { statusCode, message } = await managementClient.getUserBatch({
        userIds: [],
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userIds 格式错误");
    });
  });
});
