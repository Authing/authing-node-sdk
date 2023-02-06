import { Models } from "../../src";
import { managementClient } from "../client";

describe("updateTenantUser", () => {
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id
  let linkUserIds: string[] = [];

  beforeAll(async () => {
    const { data } = await managementClient.listTenantUsers({ tenantId });
    linkUserIds = data.list.map((x) => x.linkUserId);
  });

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.updateUser({
        tenantId,
        linkUserId: linkUserIds[0],
        updates: {
          gender: Models.UserDto.gender.M,
        },
      });
      expect(statusCode).toEqual(200);
    });
  });

  describe("Fail", () => {
    it("gender 格 is invalid", async () => {
      const { statusCode, message } = await managementClient.updateUser({
        tenantId,
        linkUserId: linkUserIds[0],
        updates: {
          gender: "" as any,
        },
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 gender 格 格式错误");
    });
  });
});
