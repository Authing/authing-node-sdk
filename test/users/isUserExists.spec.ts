import { managementClient } from "../client";

describe("isUserExists", () => {
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
      const { statusCode, data } = await managementClient.isUserExists({
        username: username,
      });
      expect(statusCode).toEqual(200);
      expect(data.exists).toBeTruthy();
    });

    it("not exists", async () => {
      const { statusCode, data } = await managementClient.isUserExists({
        username: `username${Math.random()}`,
      });
      expect(statusCode).toEqual(200);
      expect(data.exists).toBeFalsy();
    });
  });

  describe("Fail", () => {
    it("params invalid", async () => {
      const { statusCode, message } = await managementClient.isUserExists({});
      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        "参数 username, email, phone, externalId 格式错误"
      );
    });
  });
});
