import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("deleteResourcesBatch", () => {
  const type = CreateResourceDto.type.DATA;
  const description = "这是描述";
  const list = [
    {
      code: generateRandomString(10),
      description,
      type,
    },
    {
      code: generateRandomString(10),
      description,
      type,
    },
    {
      code: generateRandomString(10),
      description,
      type,
    },
    {
      code: generateRandomString(10),
      description,
      type,
    },
  ] as Array<CreateResourceBatchItemDto>;

  const codeList = list.map((item) => {
    return item.code;
  });

  beforeAll(async () => {
    await managementClient.createResourcesBatch({
      list,
    });
  });

  //析构
  afterAll(async () => {
    //删除用户
    await managementClient.deleteResourcesBatch({
      codeList,
    });
  });

  describe("Success", () => {
    it("with full basic resource", async () => {
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.deleteResourcesBatch({
        codeList,
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("resource code is invalid", async () => {
      const code = "额！";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.deleteResourcesBatch({
        codeList: [code],
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("resource code must be not empty", async () => {
      const code = "";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.deleteResourcesBatch({
        codeList: [code],
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
      } = await managementClient.deleteResourcesBatch({
        codeList: [code],
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
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
      } = await managementClient.deleteResourcesBatch({
        codeList: [code],
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });
});
