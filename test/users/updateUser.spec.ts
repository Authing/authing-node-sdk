import { Models } from "../../src";
import { managementClient } from "../client";

describe("updateUser", () => {
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
      const { statusCode, data } = await managementClient.updateUser({
        userId: userIds[0],
        gender: Models.UserDto.gender.M,
      });
      expect(statusCode).toEqual(200);
      expect(data.gender).toEqual(Models.UserDto.gender.M);
    });
  });

  describe("Fail", () => {
    it("gender 格 is invalid", async () => {
      const { statusCode, message } = await managementClient.updateUser({
        userId: userIds[0],
        gender: "" as any,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 gender 格 格式错误");
    });
  });
});
