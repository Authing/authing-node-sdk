import { ManagementClient, Models } from "../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../src/utils/index";

describe("ManagementClient", () => {
  const managementClient = new ManagementClient({
    accessKeyId: "6291bd996fc98b263b2e00b9",
    accessKeySecret: "1f3694d41f7cdb803ee041f7cc8d55b6",
    host: "http://localhost:3000",
  });

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
          dataType: Models.SetCustomFieldDto.dataType.SELECT,
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

  describe("createUser", () => {
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
          graduted_at: new Date(),
          id_card: "431225xxxxxxxx3414",
        };
        const { statusCode, data: user } = await managementClient.createUser({
          username,
          customData,
        });
        expect(statusCode).toEqual(200);
        expect(user.customData).toEqual(customData);
        console.log(user);
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

      it("phoneCountryCode is invalid", async () => {});

      it("customData type is invalid", async () => {
        const { data, statusCode, apiCode } = await managementClient.createRole(
          {
            code: "admin",
            description: "管理员",
            namespace: "default",
          }
        );
      });
    });
  });

  describe("getUser", () => {});

  describe("部门扩展字段相关", () => {
    it("Success", async () => {
      await managementClient.setCustomFields({
        list: [
          {
            targetType: Models.SetCustomFieldDto.targetType.DEPARTMENT,
            dataType: Models.SetCustomFieldDto.dataType.STRING,
            key: "test",
            label: "Test",
          },
        ],
      });

      await managementClient.setCustomData({
        targetType: Models.SetCustomDataReqDto.targetType.DEPARTMENT,
        targetIdentifier: "6285f0a71439558ae7878be6",
        list: [
          {
            key: "test",
            value: "AAA",
          },
        ],
      });

      const data = await managementClient.getCustomData({
        targetType: "DEPARTMENT",
        targetIdentifier: "6285f0a71439558ae7878be6",
      });
      console.log(data);
    });
  });

  describe("getUserBatch", () => {
    it("Success", async () => {
      const { data: listUserResp } = await managementClient.listUsers({});

      const userIds = listUserResp.list.map((x) => x.userId);
      const { data: getUserBatchResp } = await managementClient.getUserBatch({
        userIds,
      });
      console.log(getUserBatchResp);
    });
  });

  describe("getNamespacesBatch", () => {
    it("Success", async () => {
      const data = await managementClient.getNamespacesBatch({
        codeList: ["default", "sss"],
      });
      console.log(data);
    });
  });
});
