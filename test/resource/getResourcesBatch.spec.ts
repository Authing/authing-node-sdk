import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
  ResourceAction,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getResourcesBatch", () => {
  const type = CreateResourceDto.type.DATA;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
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
    const codeList = list.map((item) => {
      return item.code;
    });
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
      } = await managementClient.getResourcesBatch({
        codeList,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual(""); // 需要用户池定位
    });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const codeList = [] as Array<string>;
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getResourcesBatch({
        codeList,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 codeList 格式错误");
    });
  });

  describe("Fail", () => {
    it("resource code is invalid", async () => {
      const codeList = [generateRandomString(), "额！ "];
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getResourcesBatch({
        codeList,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });
});
