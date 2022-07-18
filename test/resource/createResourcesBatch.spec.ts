import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
} from "../../src/models";
import { managementClient } from "../client";

describe("createResource", () => {
  beforeAll(async () => {});
  const description = "这是描述";
  const type = CreateResourceBatchItemDto.type.DATA;
  const namespace = "default";

  describe("Success", () => {
    it("with full basic resource", async () => {
      const code = "createBatch";
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

  //析构
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteResourcesBatch({
        codeList: ["createBatch"],
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
      expect(statusCode).toEqual(499);
      expect(message).toEqual("资源名称格式不正确！");
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
      expect(statusCode).toEqual(499);
      expect(message).toEqual("资源名称格式不正确！");
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
      expect(apiCode).toEqual(500);
      expect(message).toEqual("资源名称格式不正确！");
    });
  });
});
