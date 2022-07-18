import { CreateResourceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createOrganization", () => {
  beforeAll(async () => {});
  const organizationName = "组织节点名称";
  const organizationCode = generateRandomString();

  describe("Success", () => {
    it("with full basic organization", async () => {
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });

      expect(statusCode).toEqual(200);
      expect(organization.organizationCode).toEqual(organizationCode);
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteOrganization({
        organizationCode,
      });
  });

  describe("Fail", () => {
    it("organization code is invalid", async () => {
      const organizationCode = "额！ ";

      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid organization code: ${organizationCode}`);
    });
  });

  describe("Fail", () => {
    it("organization code must be not empty", async () => {
      const organizationCode = "";

      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("organization code must be not blank", async () => {
      const organizationCode = " ";

      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid organization code: ${organizationCode}`);
    });
  });

  describe("Fail", () => {
    it("organization code must be less than 64 characters", async () => {
      const organizationCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.createOrganization({
        organizationCode,
        organizationName,
      });
      console.log(message);
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationCode 格式错误");
    });
  });
});
