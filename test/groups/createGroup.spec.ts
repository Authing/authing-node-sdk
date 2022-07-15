import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//createGroup
describe("createGroup", () => {
  //定义
  var code = generateRandomString(5);
  var name = generateRandomString(5);
  var description = generateRandomString(5);

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
      } = await managementClient.createGroup({
        code,
        name,
        description,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(group.code).toMatch(code);
      expect(group.name).toMatch(name);
      expect(group.description).toMatch(description);
    });
  });

  //失败
  describe("Fail", () => {
    //重复
    it("repeat", async () => {
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.createGroup({
        code,
        name,
        description,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("分组标识符已存在");
    });

    //超长
    it("long", async () => {
      //定义
      const code = generateRandomString(100);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.createGroup({
        code,
        name,
        description,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 code 格式错误");
    });
  });
});
