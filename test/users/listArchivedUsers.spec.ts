import { managementClient } from "../client";

describe("listArchivedUsers", () => {
  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.listArchivedUsers({});
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Fail", () => {
    it("page is invalid", async () => {
      const { statusCode, message } = await managementClient.listArchivedUsers({
        page: 0,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 page 格式错误");
    });

    it("limit is invalid", async () => {
      const { statusCode, message } = await managementClient.listArchivedUsers({
        limit: 0,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 limit 格式错误");
    });

    it("limit is invalid", async () => {
      const { statusCode, message } = await managementClient.listArchivedUsers({
        limit: 220,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("limit must less than 50");
    });
  });
});
