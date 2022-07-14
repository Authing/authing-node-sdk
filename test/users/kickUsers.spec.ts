import { managementClient } from "../client";

describe("kickUsers", () => {
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
    // TODO: to be done
    // it("default", async () => {
    // });
  });

  describe("Fail", () => {
    it("appIds is invalid", async () => {
      const { statusCode, message } = await managementClient.kickUsers({
        userId: userIds[0],
        appIds: [],
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 appIds 格式错误");
    });
  });
});
