import { managementClient } from "../client";

describe("hasAnyRole", () => {
  let userIds: string[] = [];
  let username = "";

  beforeAll(async () => {
    const { data } = await managementClient.listUsers({
      withCustomData: true,
      withIdentities: true,
      withDepartmentIds: true,
    });
    userIds = data.list.map((x) => x.userId);
    username = data.list.filter((x) => x.username)?.[0].username || "";
  });

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.hasAnyRole({
        userId: userIds[0],
        roles: [
          {
            namespace: "default",
            code: "admin",
          },
        ],
      });
      expect(statusCode).toEqual(200);
      expect(data.hasAnyRole).toBeFalsy();
    });
  });

  describe("Fail", () => {
    it("roles invalid", async () => {
      const { statusCode, message } = await managementClient.hasAnyRole({
        userId: userIds[0],
        roles: [],
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 roles 格式错误");
    });
  });
});
