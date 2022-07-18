import { hasUncaughtExceptionCaptureCallback } from "process";
import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//searchOrganizations
describe("searchOrganizations", () => {
  //定义
  const organizationCode = generateRandomString(5);
  const organizationName = generateRandomString(5);
  const keywords = organizationName;

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
      } = await managementClient.searchOrganizations({
        keywords
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(organization.totalCount).toBeGreaterThanOrEqual(1);
    });
  });

  //失败
  describe("Fail", () => {
    //空
    it("empty", async () => {
      //定义
      const keywords = "";
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.searchOrganizations({
        keywords
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 keywords 格式错误");
    });

    //负值 page
    it("minus page", async () => {
      //定义
      const page = -1;
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.searchOrganizations({
        keywords,
        page,
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
        data: organization,
        message,
      } = await managementClient.searchOrganizations({
        keywords,
        limit,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });

    //超长 limit
    it("long limit", async () => {
      //定义
      const page = 1;
      const limit = 10000;
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.searchOrganizations({
        keywords,
        limit,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });
  });
});
