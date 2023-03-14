import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("createTenantUser", () => {
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id
  beforeAll(async () => {
    // 初始化扩展字段配置
  });

  describe("Success", () => {
    it("with full basic userinfo", async () => {
      const username = generateRandomString();
      const email = generateRandomEmail();
      const phone = generateRandomPhone();
      const phoneCountryCode = "+86";
      const externalId = generateRandomString();
      const name = generateRandomString();
      const nickname = generateRandomString();
      const gender = Models.UserDto.gender.M;
      const emailVerified = true;
      const phoneVerified = true;
      const {
        statusCode,
        data: user,
        message,
      } = await managementClient.createTenantUser({
        username,
        email,
        phone,
        externalId,
        phoneCountryCode,
        name,
        gender,
        nickname,
        emailVerified,
        phoneVerified,
      });
      expect(statusCode).toEqual(200);
      expect(user.userId).toBeDefined();
      expect(user.status).toEqual(Models.UserDto.status.ACTIVATED);
      expect(user.email).toBe(email);
      expect(user.phone).toBe(phone);
      expect(user.phoneCountryCode).toBe(phoneCountryCode);
      expect(user.username).toBe(username);
      expect(user.name).toBe(name);
      expect(user.nickname).toBe(nickname);
      expect(user.photo).toBeTruthy();
      expect(user.loginsCount).toBe(0);
      expect(user.lastLogin).toBe(null);
      expect(user.lastIp).toBe(null);
      expect(user.gender).toBe(gender);
      expect(user.emailVerified).toBe(emailVerified);
      expect(user.phoneVerified).toBe(phoneVerified);
      expect(user.externalId).toEqual(externalId);
    });
  });

  describe("Fail", () => {
    it("Not contains one of username, email and phone", async () => {
      const { statusCode, message } = await managementClient.createTenantUser(
        {}
      );
      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        "Must contain one of the following fields: username, phone, email"
      );
    });

    it("email is invalid", async () => {
      const { statusCode, message } = await managementClient.createTenantUser({
        email: "test1@qqq",
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 email 格式错误");
    });

    it("customData is invalid", async () => {
      const { statusCode, message } = await managementClient.createTenantUser({
        email: "test1@qq.com",
        customData: {
          intro: "hello".repeat(205),
        },
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("customData must be less than 1024 characters");
    });

    it("phone is invalid", async () => {
      const { statusCode, message } = await managementClient.createTenantUser({
        phoneCountryCode: "+86",
        email: "test@qq.com",
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("phone cannot be empty");
    });
  });
});
