import { CreateResourceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createResource", () => {
  const code = generateRandomString(10);
  const description = "这是描述";
  const type = CreateResourceDto.type.DATA;

  beforeAll(async () => {});

  //析构
  afterAll(async () => {
    //删除用户
    await managementClient.deleteResourcesBatch({
      codeList: [code, ""],
    });
  });

  describe("Success", () => {
    it("with full basic resource", async () => {
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
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid resource code: ${code}`);
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
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
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
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid resource code: ${code}`);
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
