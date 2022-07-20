import { assert } from "console";
import { Models } from "../../src";
import { CreateUserInfoDto } from "../../src/models";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";
import { getRandomInt } from "../utils";

describe("createUsersBatch", () => {
  beforeAll(async () => {
    // 初始化扩展字段配置
    await managementClient.setCustomFields({
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

  describe("Success", () => {
    it("with full basic userinfo", async () => {
      const list: CreateUserInfoDto[] = [];
      for (let i = 0; i < 50; i++) {
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
        const password = generateRandomString()
        list.push({
          username,
          email,
          phone,
          phoneCountryCode,
          externalId,
          name,
          nickname,
          gender,
          emailVerified,
          phoneVerified,
          customData: {
            age: getRandomInt(1, 100)
          },
          // password,
        });
      }
      const {
        statusCode,
        data: users,
        message,
      } = await managementClient.createUsersBatch({
        list,
      });

      for (const item of list) {
        const user = users.find(x => x.username === item.username);
        expect(user?.username === item.username);
        expect(user?.email?.toLowerCase() === item.email?.toLowerCase());
        expect(user?.phone === item.phone);
        expect(user?.phoneCountryCode === item.phoneCountryCode);
        expect(user?.externalId === item.externalId);
        expect(user?.name === item.name);
        expect(user?.nickname === item.nickname);
        expect(user?.gender === item.gender);
        expect(user?.emailVerified === item.emailVerified);
        expect(user?.phoneVerified === item.phoneVerified);
        expect(user?.customData?.age === item.customData?.age);
      }
    });
  });
});
