import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
  ResourceAction,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getResource", () => {
  const type = CreateResourceDto.type.DATA;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
  ] as Array<CreateResourceBatchItemDto>;

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
      } = await managementClient.getResource({
        code: list[0].code,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual(""); // 需要用户池定位
    });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getResource({
        code: "",
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual("资源不存在");
    });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getResource({
        code: "额！",
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual("资源不存在");
    });
  });
});
