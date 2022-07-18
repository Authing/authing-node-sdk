import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//deleteOrganization
describe("deleteOrganization", () => {
  //定义
  const organizationCode = generateRandomString(5);
  const organizationName = generateRandomString(5);

  //构造
  beforeAll(async () => {
    //创建组织
    const { statusCode, data, message } =
      await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });
  });

  //析构
  afterAll(async () => {
    //删除组织
    const { statusCode, data, message } =
      await managementClient.deleteOrganization({
        organizationCode,
      });
  });

  //成功
  describe("Success", () => {
    //默认
    it("default", async () => {
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.deleteOrganization({
        organizationCode
      });
      //处理
      expect(statusCode).toEqual(200);
    });
  });

  //失败
  describe("Fail", () => {
    //空
    it("empty", async () => {
      //定义
      const organizationCode = "";
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.deleteOrganization({
        organizationCode
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 organizationCode 格式错误");
    });

    //不存在
    it("not found", async () => {
      //定义
      const organizationCode = generateRandomString(5);
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.deleteOrganization({
        organizationCode
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("organization not found for code");
    });
  });
});
