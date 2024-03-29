import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

//getUser
describe("getUser", () => {
  //定义
  var userId = "";
  var username = generateRandomString();
  var phone = generateRandomPhone();
  var email = ["", ""];
  var externalId = generateRandomString();

  //构造
  beforeAll(async () => {
    //创建用户
    const {
      statusCode,
      data: user,
      message,
    } = await managementClient.createUser({
      username,
      phoneCountryCode: "+86",
      phone,
      externalId,
      email: generateRandomEmail(),
      name: generateRandomString(),
      nickname: generateRandomString(),
      gender: Models.UserDto.gender.M,
      emailVerified: true,
      phoneVerified: true,
    });
    //赋值
    userId = user.userId;
    email = [user.email ?? "", (user.email ?? "").toUpperCase()];
  });

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteUsersBatch({
        userIds: [userId],
      });
  });

  //成功
  describe("Success", () => {
    //通过 userId
    it("by userId", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //通过 username
    it("by username", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "username",
        userId: username,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.username).toMatch(username);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //通过 email
    it("by email", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "email",
        userId: email[0],
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.email).toMatch(email[0]);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //通过 email 大写
    it("by email and upper", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "email",
        userId: email[1],
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.email).toMatch((email[1]).toLowerCase());
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //通过 phone
    it("by phone", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "phone",
        userId: phone,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.phone).toMatch(phone);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //通过 externalId
    it("by externalId", async () => {
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "external_id",
        userId: externalId,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.externalId).toMatch(externalId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
    });

    //withCustomData 为 true
    it("withCustomData is true", async () => {
      //定义
      const withCustomData = true;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withCustomData,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      expect(user.customData).toBeTruthy();
    });

    //withCustomData 为 false
    it("withCustomData is false", async () => {
      //定义
      const withCustomData = false;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withCustomData,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      expect(user.customData).not.toBeTruthy();
    });

    //withIdentities 为 true
    it("withIdentities is true", async () => {
      //定义
      const withIdentities = true;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withIdentities,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      //TODO: expect(user.identities).toBeTruthy();
    });

    //withIdentities 为 false
    it("withIdentities is false", async () => {
      //定义
      const withIdentities = false;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withIdentities,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      expect(user.identities).not.toBeTruthy();
    });

    //withDepartmentIds 为 true
    it("withDepartmentIds is true", async () => {
      //定义
      const withDepartmentIds = true;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withDepartmentIds,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      expect(user.departmentIds).toBeTruthy();
    });

    //withDepartmentIds 为 false
    it("withDepartmentIds is false", async () => {
      //定义
      const withDepartmentIds = false;
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
        withDepartmentIds,
      });
      //处理
      expect(statusCode).toEqual(200);
      expect(user.userId).toMatch(userId);
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.photo).toBeTruthy();
      expect(user.externalId).toBeTruthy();
      expect(user.departmentIds).not.toBeTruthy();
    });
  });

  //失败
  describe("Fail", () => {
    //通过 userId 错误
    it("by userId and error", async () => {
      //定义
      const userId = "test";
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "user_id",
        userId,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("用户不存在");
    });

    //通过 email 非法格式
    it("by email and illegal format", async () => {
      //定义
      const email = "test#x.com";
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "email",
        userId: email,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 userId 格式错误");
    });

    //通过 phone 国际
    it("by phone and international", async () => {
      //定义
      const phone = "212-456-1111";
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "phone",
        userId: phone,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("用户不存在");
    });

    //通过 phone 非法格式
    it("by phone and illegal format", async () => {
      //定义
      const phone = "1234567890#";
      //请求
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.getUser({
        userIdType: "phone",
        userId: phone,
      });
      //处理
      expect(statusCode).not.toEqual(200);
      expect(message).toMatch("参数 userId 格式错误");
    });
  });
});
