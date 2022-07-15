import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//listGroups
describe("listGroups", () => {
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
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.listGroups({
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(group.list[0].code).toMatch(code);
      expect(group.list[0].name).toMatch(name);
      expect(group.list[0].description).toMatch(description);
    });

    //分页
    it("page", async () => {
      //定义
      const page = 1;
      const limit = 1;
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.listGroups({
        page,
        limit,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(group.list[0].code).toMatch(code);
      expect(group.list[0].name).toMatch(name);
      expect(group.list[0].description).toMatch(description);
    });
  });

  //失败
  describe("Fail", () => {
    //超长
    it("long", async () => {
      //定义
      const page = 1;
      const limit = 100000;
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.listGroups({
        page,
        limit,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });

    //负值
    it("minus", async () => {
      //定义
      const page = -1;
      const limit = 1;
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.listGroups({
        page,
        limit,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 page 格式错误");
    });
  });
});
