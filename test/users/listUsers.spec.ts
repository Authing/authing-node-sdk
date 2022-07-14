import { managementClient } from "../client";

describe("listUsers", () => {
  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.listUsers({
        withCustomData: true,
        withIdentities: true,
        withDepartmentIds: true,
      });
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThan(0);
      const user = data.list?.[0];
      expect(user.customData).toBeDefined();
      expect(user.departmentIds).toBeDefined();
      expect(user.identities).toBeDefined();
    });
  });

  describe("Fail", () => {
    it("page is invalid", async () => {
      const { statusCode, message } = await managementClient.listUsers({
        page: 0,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 page 格式错误");
    });

    it("limit is invalid", async () => {
      const { statusCode, message } = await managementClient.listUsers({
        limit: 0,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 limit 格式错误");
    });

    it("limit is invalid", async () => {
      const { statusCode, message } = await managementClient.listUsers({
        limit: 220,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("limit must less than 50");
    });

    it("status is invalid", async () => {
      const { statusCode, message } = await managementClient.listUsers({
        status: "invalid" as any,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 status 格式错误");
    });
  });
});
