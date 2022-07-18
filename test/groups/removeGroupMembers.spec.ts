import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//removeGroupMembers
describe("removeGroupMembers", () => {
  //定义
  var code = generateRandomString(5);
  var name = generateRandomString(5);
  var description = generateRandomString(5);
  var user = [""]

  //构造
  beforeAll(async () => {
    //创建分组
    await managementClient.createGroup({
      code,
      name,
      description,
    });
    //创建用户
    const { statusCode, data, message } =
      await managementClient.createUsersBatch({
        list: [
          { username: generateRandomString(7) },
          { username: generateRandomString(7) }
        ]
      })
    data.forEach(element => user.push(element.userId));
    user.shift()
    //添加成员
    await managementClient.addGroupMembers({
      code,
      userIds: user
    });
  });

  //析构
  afterAll(async () => {
    //删除分组
    await managementClient.deleteGroupsBatch({
      codeList: [code],
    });
    //删除用户
    await managementClient.deleteUsersBatch({
      userIds: user
    });
  });

  //成功
  describe("Success", () => {
    //默认
    it("default", async () => {
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.removeGroupMembers({
        code,
        userIds: user
      });
      //处理
      expect(statusCode).toEqual(200);
    });
  });

  //失败
  describe("Fail", () => {
    //空 code
    it("empty code", async () => {
      //定义
      const code = "";
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.removeGroupMembers({
        code,
        userIds: user
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 code 格式错误");
    });

    //空 userIds
    it("empty userIds", async () => {
      //定义
      const userIds: Array<string> = [];
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.removeGroupMembers({
        code,
        userIds,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 userIds 格式错误");
    });

    //错误 code
    it("error code", async () => {
      //定义
      const code = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.removeGroupMembers({
        code,
        userIds: user,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("分组不存在");
    });
  });
});
