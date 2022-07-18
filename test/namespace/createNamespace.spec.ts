import { CreateNamespaceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createNamespace", () => {
  beforeAll(async () => {});
  const name = "权限分组名字";

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const code = generateRandomString();
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespace({
        code,
        name,
      });

      expect(statusCode).toEqual(200);
      expect(namespace.code).toEqual(code);
      expect(namespace.name).toEqual(name);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteNamespacesBatch({
        codeList: ["1229505432"],
      });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const code = "额！";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespace({
        code,
        name,
      });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("分组唯一标识符格式不正确！");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespace({ code, name });

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
      } = await managementClient.createNamespace({
        code,
        name,
      });

      expect(statusCode).toEqual(499);
      expect(message).toEqual("分组唯一标识符格式不正确！");
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
      } = await managementClient.createNamespace({
        code,
        name,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
