import {
  CreateNamespaceDto,
  CreateNamespacesBatchItemDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("deleteNamespacesBatch", () => {
  const list = [
    { code: generateRandomString(), name: generateRandomString() },
    { code: generateRandomString(), name: generateRandomString() },
    { code: generateRandomString(), name: generateRandomString() },
    { code: generateRandomString(), name: generateRandomString() },
    { code: generateRandomString(), name: generateRandomString() },
  ] as Array<CreateNamespacesBatchItemDto>;

  const codeList = list.map((item) => {
    return item.code;
  });

  beforeAll(async () => {
    const code = generateRandomString();

    await managementClient.createNamespacesBatch({ list });
  });

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const codeList = [list[0].code, list[1].code];
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespacesBatch({
        codeList,
      });
      expect(statusCode).toEqual(200);
      expect(namespace.success).toEqual(true);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    await managementClient.deleteNamespacesBatch({
      codeList,
    });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const code = "额！";
      const codeList = [code];
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespacesBatch({
        codeList,
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "";
      const codeList = [code];
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespacesBatch({
        codeList,
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const code = " ";
      const codeList = [code];
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespacesBatch({
        codeList,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("namespace code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const codeList = [code];
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespacesBatch({
        codeList,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });
});
