import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createRole", () => {
  beforeAll(async () => {});
  const code = generateRandomString();
  const namespace = "default";
  const description = "这是描述";

  describe("Success", () => {
    it("with full basic role", async () => {
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(role.code).toEqual(code);
      expect(role.namespace).toEqual(namespace);
      expect(role.description).toEqual(description);
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteRolesBatch({
        codeList: [code],
      });
  });

  describe("Fail", () => {
    it("role code is invalid", async () => {
      const code = "额! ";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("role code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });

  describe("Fail", () => {
    it("role code must be not blank", async () => {
      const code = " ";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("role code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
