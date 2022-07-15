import { CreateResourceDto } from "../../src/models";
import { managementClient } from "../client";

describe("updateOrganization", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("with full basic organization", async () => {
      const organizationCode = "oc";
      const organizationName = "组织节点名称";
      const organizationNewCode = "newoc";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode,
        organizationNewCode,
        organizationName,
      });

      expect(statusCode).toEqual(200);
      expect(organization.organizationCode).toEqual(organizationNewCode);
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.updateOrganization({
        organizationNewCode: "oc",
        organizationCode: "newoc",
      });
  });

  describe("Fail", () => {
    it("organization code is invalid", async () => {
      const organizationCode = "oc";
      const organizationNewCode = "额！ ";
      const organizationName = "组织节点名称";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode,
        organizationNewCode,
        organizationName,
      });

      expect(statusCode).toEqual(499);
      expect(message).toEqual("部门标识符格式不正确！");
    });
  });

  describe("Fail", () => {
    it("organization code must be not empty", async () => {
      const organizationCode = "oc";
      const organizationName = "组织节点名称";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode,
        organizationName,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("organization code must be not blank", async () => {
      const organizationCode = "oc";
      const organizationNewCode = " ";
      const organizationName = "组织节点名称";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode,
        organizationNewCode,
        organizationName,
      });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("部门标识符格式不正确！");
    });
  });

  describe("Fail", () => {
    it("organization code must be less than 64 characters", async () => {
      const organizationCode = "oc";
      const organizationNewCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const organizationName = "组织节点名称";
      const {
        statusCode,
        data: organization,
        message,
      } = await managementClient.updateOrganization({
        organizationCode,
        organizationNewCode,
        organizationName,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 organizationNewCode 格式错误");
    });
  });
});
