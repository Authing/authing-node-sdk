import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//updateGroup
describe("updateGroup", () => {
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
    //默认
    it("default", async () => {
      //定义
      const newCode = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.updateGroup({
        code,
        name,
        description,
        newCode
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(group.code).toMatch(newCode);
      expect(group.name).toMatch(name);
      expect(group.description).toMatch(description);
    });
  });

  //失败
  describe("Fail", () => {
    //不存在
    it("not found", async () => {
      //定义
      const code = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.updateGroup({
        code,
        name,
        description,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("分组不存在");
    });
  });
});
