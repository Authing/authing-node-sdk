import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//createGroupsBatch
describe("createGroupsBatch", () => {
  //定义
  var code = [generateRandomString(5), generateRandomString(5), generateRandomString(5)];
  var name = [generateRandomString(5), generateRandomString(5), generateRandomString(5)];
  var description = [generateRandomString(5), generateRandomString(5), generateRandomString(5)];

  //析构
  afterAll(async () => {
    //删除分组
    const { statusCode, data, message } =
      await managementClient.deleteGroupsBatch({
        codeList: code,
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
      } = await managementClient.createGroupsBatch({
        list: [
          { code: code[0], name: name[0], description: description[0] },
          { code: code[1], name: name[1], description: description[1] },
        ],
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(group[0].code).toMatch(code[0]);
      expect(group[0].name).toMatch(name[0]);
      expect(group[0].description).toMatch(description[0]);
      expect(group[1].code).toMatch(code[1]);
      expect(group[1].name).toMatch(name[1]);
      expect(group[1].description).toMatch(description[1]);
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
      } = await managementClient.createGroupsBatch({
        list: [
          { code: code[0], name: name[0], description: description[0] },
          { code: code[1], name: name[1], description: description[1] },
        ],
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("分组标识符已存在");
    });

    //重复 其中之一
    it("repeat one", async () => {
      //请求
      const {
        statusCode,
        data: group,
        message,
      } = await managementClient.createGroupsBatch({
        list: [
          { code: code[0], name: name[0], description: description[0] },
          { code: code[2], name: name[2], description: description[2] },
        ],
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
      } = await managementClient.createGroupsBatch({
        list: [
          { code, name: name[2], description: description[2] },
        ],
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 list 格式错误");
    });
  });
});
