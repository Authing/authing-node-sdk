import {
  CreateNamespaceDto,
  CreateNamespacesBatchItemDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("deleteNamespace", () => {
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
      const {
        statusCode,
        data: IsSuccessDto,
        message,
      } = await managementClient.deleteNamespace({ code: list[0].code });

      expect(statusCode).toEqual(200);
      expect(IsSuccessDto.success).toEqual(true);
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
      } = await managementClient.deleteNamespace({
        code,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual("权限组不存在");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespace({
        code,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const code = " ";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.deleteNamespace({
        code,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("权限组不存在");
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
      } = await managementClient.deleteNamespace({
        code,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
