import { CreateResourceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createResource", () => {
  beforeAll(async () => {});
  const description = "这是描述";
  const type = CreateResourceDto.type.API;

  describe("Success", () => {
    it("with full basic resource", async () => {
      const code = generateRandomString();
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResource({
        type,
        code,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(resource.code).toEqual(code);
      expect(resource.description).toEqual(description);
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteResourcesBatch({
        codeList: ["resourceCode"],
      });
  });

  describe("Fail", () => {
    it("resource code is invalid", async () => {
      const code = "额！";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResource({
        type,
        code,
        description,
      });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("资源名称格式不正确！");
    });
  });

  describe("Fail", () => {
    it("resource code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResource({
        type,
        code,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("apiIdentifier is required when type is API");
    });
  });

  describe("Fail", () => {
    it("resource code must be not blank", async () => {
      const code = " ";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResource({
        type,
        code,
        description,
      });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("资源名称格式不正确！");
    });
  });

  describe("Fail", () => {
    it("resource code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResource({
        type,
        code,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
