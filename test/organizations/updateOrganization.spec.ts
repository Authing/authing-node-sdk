import { CreateResourceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateOrganization", () => {
  const list = [
    {
      organizationCode: generateRandomString(),
      organizationName: "组织节点名称",
    },
    {
      organizationCode: generateRandomString(),
      organizationName: "组织节点名称",
    },
    {
      organizationCode: generateRandomString(),
      organizationName: "组织节点名称",
    },
    {
      organizationCode: generateRandomString(),
      organizationName: "组织节点名称",
    },
    {
      organizationCode: generateRandomString(),
      organizationName: "组织节点名称",
    },
  ];
  const organizationName = "组织节点名称";
  const organizationNewCode = generateRandomString();

  beforeAll(async () => {
    list.map(async (item) => {
      await managementClient.createOrganization({
        organizationCode: item.organizationCode,
        organizationName: item.organizationName,
      });
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    list.map(async (item) => [
      await managementClient.deleteOrganization({
        organizationCode: item.organizationCode,
      }),
      await managementClient.deleteOrganization({
        organizationCode: organizationNewCode,
      }),
    ]);
  });

  describe("Success", () => {
    it("with full basic organization", async () => {
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode: list[0].organizationCode,
        organizationName,
        organizationNewCode,
      });

      expect(statusCode).toEqual(200);
      expect(organization.organizationCode).toEqual(organizationNewCode);
    });
  });

  describe("Fail", () => {
    it("organization code is invalid", async () => {
      const organizationNewCode = "额！ ";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode: list[1].organizationCode,
        organizationNewCode,
        organizationName,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        `invalid organization code: ${organizationNewCode}`
      );
    });
  });

  describe("Fail", () => {
    it("organization code must be not empty", async () => {
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode: list[2].organizationCode,
        organizationName,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("organization code must be not blank", async () => {
      const organizationNewCode = " ";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode: list[3].organizationCode,
        organizationNewCode,
        organizationName,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        `invalid organization code: ${organizationNewCode}`
      );
    });
  });

  describe("Fail", () => {
    it("organization code must be less than 64 characters", async () => {
      const organizationNewCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode: list[4].organizationCode,
        organizationNewCode,
        organizationName,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationNewCode 格式错误");
    });
  });
});
