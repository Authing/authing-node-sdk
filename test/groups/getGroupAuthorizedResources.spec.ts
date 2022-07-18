import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//getGroupAuthorizedResources
describe("getGroupAuthorizedResources", () => {
  //定义
  var code = generateRandomString(5);
  var name = generateRandomString(5);
  var description = generateRandomString(5);

  //构造
  beforeAll(async () => {
    //创建分组
    const { statusCode, data, message } =
      await managementClient.createGroup({
        code,
        name,
        description,
      });
  });

  //析构
  afterAll(async () => {
    //删除分组
    const { statusCode, data, message } =
      await managementClient.deleteGroupsBatch({
        codeList: [code],
      });
  });

  //成功
  describe("Success", () => {
    //全部
    it("all", async () => {
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.getGroupAuthorizedResources({
        code,
      });
      console.log(group);
      //处理
      expect(statusCode).toEqual(200);
      expect(group).toBeTruthy();
    });
  });

  //失败
  describe("Fail", () => {
    //不存在 code
    it("not found code", async () => {
      //定义
      const code = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.getGroupAuthorizedResources({
        code,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("分组不存在");
    });

    //不存在 namespace
    it("not found namespace", async () => {
      //定义
      const namespace = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.getGroupAuthorizedResources({
        code,
        namespace
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("权限组不存在");
    });
  });
});
