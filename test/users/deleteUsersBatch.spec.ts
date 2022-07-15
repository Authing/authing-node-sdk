import { managementClient } from "../client";

describe("deleteUsersBatch", () => {
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
      const { statusCode, message, data } =
        await managementClient.deleteUsersBatch({
          userIds: [
            //
            userIds[userIds.length > 0 ? userIds.length - 1 : 0],
          ],
        });
      expect(statusCode).toEqual(200);
    });
  });

  describe("Fail", () => {
    it("userIds is invalid", async () => {
      const { statusCode, message } = await managementClient.deleteUsersBatch({
        userIds: [],
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userIds 格式错误");
    });
  });
});
