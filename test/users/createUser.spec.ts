import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("createUser", () => {
  beforeAll(async () => {
    // 初始化扩展字段配置
    const data = await managementClient.setCustomFields({
      list: [
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.STRING,
          key: "intro",
          label: "自我介绍",
        },
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.ENUM,
          key: "school",
          label: "学校",
          options: [
            {
              label: "北京大学",
              value: "pku",
            },
            {
              label: "清华大学",
              value: "tsinghua",
            },
            {
              label: "hust",
              value: "华中科技大学",
            },
            {
              label: "mit",
              value: "麻省理工",
            },
          ],
        },
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.NUMBER,
          key: "age",
          label: "年龄",
        },
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.BOOLEAN,
          key: "graduted",
          label: "是否已经毕业",
        },
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.DATETIME,
          key: "graduted_at",
          label: "毕业时间",
        },
        {
          targetType: Models.SetCustomFieldDto.targetType.USER,
          dataType: Models.SetCustomFieldDto.dataType.STRING,
          key: "id_card",
          label: "身份证",
          encrypted: true,
        },
      ],
    });
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
      } = await managementClient.createUser({
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

    it("with custom data", async () => {
      const username = generateRandomString();
      const customData = {
        intro: "自我介绍",
        school: "pku",
        age: 30,
        graduted: true,
        // graduted_at: new Date(),
        // id_card: "431225xxxxxxxx3414",
      };
      const { statusCode, data: user } = await managementClient.createUser({
        username,
        customData,
      });
      expect(statusCode).toEqual(200);
      expect(user.customData).toEqual(customData);
    });

    it("with identities", async () => {});

    it("with tenantIds", async () => {});

    it("with identities", async () => {});
  });

  describe("Fail", () => {
    it("Not contains one of username, email and phone", async () => {
      const { statusCode, message } = await managementClient.createUser({});
      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        "Must contain one of the following fields: username, phone, email"
      );
    });

    it("email is invalid", async () => {
      const { statusCode, message } = await managementClient.createUser({
        email: "test1@qqq",
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 email 格式错误");
    });

    it("customData is invalid", async () => {
      const { statusCode, message } = await managementClient.createUser({
        email: "test1@qq.com",
        customData: {
          intro: "hello".repeat(205),
        },
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("customData must be less than 1024 characters");
    });

    it("phone is invalid", async () => {
      const { statusCode, message } = await managementClient.createUser({
        phoneCountryCode: "+86",
        email: "test@qq.com",
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("phone cannot be empty");
    });
  });
});
