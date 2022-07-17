import exp from "constants";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateRole", () => {
  beforeAll(async () => {
    const code = generateRandomString();
    const namespace = "default";
    const description = "这是描述";
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

  describe("Success", () => {
    it("with full basic role", async () => {
      const newCode = "ThisIsNewCode";
      const code = "www";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        newCode,
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(role.success).toEqual(true);
    });
  });

  //析构
  afterAll(async () => {
    //将用户改回来manager
    const newCode = "www";
    const code = "ThisIsNewCode";
    const namespace = "default";
    const description = "这是描述";
    await managementClient.updateRole({
      newCode,
      code,
      namespace,
      description,
    });
  });

  describe("Fail", () => {
    it("role newCode is invalid", async () => {
      const newCode = "额!";
      const code = "www";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        newCode,
        code,
        namespace,
        description,
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("role newCode must be not empty", async () => {
      const newCode = "";
      const code = "www";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        newCode,
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("role newCode must be not blank", async () => {
      const newCode = " ";
      const code = "www";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        newCode,
        code,
        namespace,
        description,
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("role newCode must be less than 64 characters", async () => {
      const newCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const code = "www";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        newCode,
        code,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 newCode 格式错误");
    });
  });
});
