import {
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//listOrganizations
describe("listOrganizations", () => {
  //定义
  const page = 1;
  const limit = 1;
  const fetchAll = true;

  //成功
  describe("Success", () => {
    //默认
    it("default", async () => {
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.listOrganizations({
        page,
        limit,
        fetchAll,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(organization.totalCount).toBeGreaterThanOrEqual(1);
    });
  });

  //失败
  describe("Fail", () => {
    //负值 page
    it("minus page", async () => {
      //定义
      const page = -1;
      //请求
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.listOrganizations({
        page,
        limit,
        fetchAll,
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
      } = await managementClient.listOrganizations({
        page,
        limit,
        fetchAll,
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
        data: organization,
        message,
      } = await managementClient.listOrganizations({
        page,
        limit,
        fetchAll,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 limit 格式错误");
    });
  });
});
