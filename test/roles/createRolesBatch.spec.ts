import exp from "constants";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createRole", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("with full basic role", async () => {
      const code = "1229505432";
      const namespace = "default";
      const description = "这是描述";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.createRolesBatch({
        list: [
          {
            code,
            namespace,
            description,
          },
        ],
      });
      expect(statusCode).toEqual(200);
      expect(role.success).toEqual(true);
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    await managementClient.deleteRolesBatch({
      codeList: ["1229505432"],
    });
    await managementClient.deleteRolesBatch({
      codeList: [""],
    });
  });

  describe("Fail", () => {
    it("role code is invalid", async () => {
      const code = "额!";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRolesBatch({
        list: [
          {
            code,
            namespace,
            description,
          },
        ],
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("role code must be not empty", async () => {
      const code = "";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRolesBatch({
        list: [
          {
            code,
            namespace,
            description,
          },
        ],
      });
      expect(apiCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });

  describe("Fail", () => {
    it("role code must be not blank", async () => {
      const code = " ";
      const namespace = "default";
      const description = "这是描述";

      const {
        statusCode,
        apiCode,
        data: role,
        message,
      } = await managementClient.createRolesBatch({
        list: [
          {
            code,
            namespace,
            description,
          },
        ],
      });
      expect(apiCode).toEqual(500);
      expect(message).toEqual("角色 Code 格式不正确！");
    });
  });

  describe("Fail", () => {
    it("code list must be not empty", async () => {
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.createRolesBatch({
        list: [],
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 list 格式错误");
    });
  });
});
