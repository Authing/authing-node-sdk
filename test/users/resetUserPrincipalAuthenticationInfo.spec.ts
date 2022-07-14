import { managementClient } from "../client";

describe("resetUserPrincipalAuthenticationInfo", () => {
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
    //   const { statusCode, data } =
    //     await managementClient.resetUserPrincipalAuthenticationInfo({
    //       userId: userIds[0],
    //     });
    //   expect(statusCode).toEqual(200);
    // });
  });

  describe("Fail", () => {
    it("userId is invalid", async () => {
      const { statusCode, message } =
        await managementClient.resetUserPrincipalAuthenticationInfo({
          userId: "",
        });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userId 格式错误");
    });

    it("not verified", async () => {
      const { statusCode, message } =
        await managementClient.resetUserPrincipalAuthenticationInfo({
          userId: userIds[0],
        });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("没有认证记录");
    });
  });
});
