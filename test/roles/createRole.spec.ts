import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createRole", () => {
  const code = generateRandomString();
  const namespace = "default";
  const description = "这是描述";

  beforeAll(async () => {});

  //析构
  afterAll(async () => {
    //删除用户
    await managementClient.deleteRolesBatch({
      codeList: [code],
    });
  });

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
    });
  });

  describe("Fail", () => {
    it("role code is invalid", async () => {
      const code = "额! ";

      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid role code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("role code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
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
        data: role,
        message,
      } = await managementClient.createRole({
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid role code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("role code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
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
