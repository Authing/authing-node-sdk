import exp from "constants";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateRole", () => {
  beforeAll(async () => {});

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
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
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
});
