import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createResource", () => {
  const code = generateRandomString();
  const description = "这是描述";
  const type = CreateResourceBatchItemDto.type.DATA;
  const namespace = "default";

  beforeAll(async () => {});

  //析构
  afterAll(async () => {
    //删除用户
    await managementClient.deleteResourcesBatch({
      codeList: [code],
    });
  });

  describe("Success", () => {
    it("with full basic resource", async () => {
      const list = [
        { code, description, type },
      ] as Array<CreateResourceBatchItemDto>;

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResourcesBatch({
        list,
        namespace,
      });
      expect(statusCode).toEqual(200);
      expect(resource.success).toEqual(true);
    });
  });

  describe("Fail", () => {
    it("resource code is invalid", async () => {
      const code = "额！";
      const list = [
        { code, description, type },
      ] as Array<CreateResourceBatchItemDto>;

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResourcesBatch({
        list,
        namespace,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid resource code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("resource code must be not empty", async () => {
      const list = [{ description, type }] as Array<CreateResourceBatchItemDto>;

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResourcesBatch({
        list,
        namespace,
      });
      expect(statusCode).toEqual(500);
      expect(message).toEqual("未知错误");
    });
  });

  describe("Fail", () => {
    it("resource code must be not blank", async () => {
      const code = " ";
      const list = [
        { code, description, type },
      ] as Array<CreateResourceBatchItemDto>;

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.createResourcesBatch({
        list,
        namespace,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid resource code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("resource code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const list = [
        { code, description, type },
      ] as Array<CreateResourceBatchItemDto>;

      const {
        statusCode,
        apiCode,
        data: resource,
        message,
      } = await managementClient.createResourcesBatch({
        list,
        namespace,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid resource code: ${code}`);
    });
  });
});
