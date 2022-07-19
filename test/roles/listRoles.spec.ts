import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//listRoles
describe("listRoles", () => {
  //定义
  const code = generateRandomString(4);
  const namespace = "default";
  const description = generateRandomString(5);

  //构造
  beforeAll(async () => {
    //创建角色
    await managementClient.createRole({
      code,
      namespace,
      description,
    });
  });

  //析构
  afterAll(async () => {
    //删除角色
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
      } = await managementClient.listRoles({
        namespace,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(role.totalCount).toBeGreaterThanOrEqual(1);
    });
  });

  //失败
  describe("Fail", () => {
    //错误 namespace
    it("error namespace", async () => {
      //定义
      const namespace = generateRandomString(4);
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoles({
        namespace,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("权限组不存在");
    });

    //负值 page
    it("minus page", async () => {
      //定义
      const page = -1;
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoles({
        namespace,
        page
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 page 格式错误");
    });

    //负值 limit
    it("minus limit", async () => {
      //定义
      const limit = -1;
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoles({
        namespace,
        limit
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });

    //超长 limit
    it("long limit", async () => {
      //定义
      const limit = 10000;
      //请求
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoles({
        namespace,
        limit
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });
  });
});
