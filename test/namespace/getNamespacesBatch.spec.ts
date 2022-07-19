import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getNamespacesBatch", () => {
  const name = "权限分组名字";
  const code = generateRandomString();
  const codeList = [code];
  beforeAll(async () => {
    await managementClient.createNamespace({
      code,
      name,
    });
  });

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.getNamespacesBatch({
        codeList,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteNamespacesBatch({
        codeList,
      });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const code = "额！";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.getNamespacesBatch({
        codeList: [code],
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.getNamespacesBatch({ codeList: [code] });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const code = " ";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.getNamespacesBatch({
        codeList: [code],
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.getNamespacesBatch({
        codeList: [code],
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });
});
