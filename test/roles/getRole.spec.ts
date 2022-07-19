import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//getRole
describe("getRole", () => {
  //定义
  const code = generateRandomString(4);
  const namespace = "default";
  const description = generateRandomString(5);

  //构造
  beforeAll(async () => {
    //创建角色
    const { statusCode, data, message } =
      await managementClient.createRole({
        code,
        namespace,
        description,
      });
  });

  //析构
  afterAll(async () => {
    //删除角色
    const { statusCode, data, message } =
      await managementClient.deleteRolesBatch({
        codeList: [code],
        namespace,
      });
  });

  //成功
  describe("Success", () => {
    //默认
    it("default", async () => {
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.getRole({
        code,
        namespace,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(role.code).toMatch(code);
      expect(role.namespace).toMatch(namespace);
      expect(role.description).toMatch(description);
    });

    //只传 code
    it("only code", async () => {
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.getRole({
        code,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(role.code).toMatch(code);
      expect(role.namespace).toMatch(namespace);
      expect(role.description).toMatch(description);
    });
  });

  //失败
  describe("Fail", () => {
    //错误 code
    it("error code", async () => {
      //定义
      const code = generateRandomString(4);
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.getRole({
        code,
        namespace,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("角色不存在");
    });

    //错误 namespace
    it("error namespace", async () => {
      //定义
      const namespace = generateRandomString(4);
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.getRole({
        code,
        namespace,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("权限组不存在");
    });
  });
});
