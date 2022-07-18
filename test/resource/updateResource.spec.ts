import {
  CreateResourceBatchItemDto,
  CreateResourceDto,
  ResourceAction,
  UpdateResourceDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateResource", () => {
  const type = CreateResourceDto.type.API;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
  ] as Array<CreateResourceBatchItemDto>;

  const description = "这是描述";

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
      const actions = [
        { name: "资源操作名称", description: "资源操作描述" },
      ] as ResourceAction[];
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.updateResource({
        code: list[0].code,
        type,
        description,
        actions,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("资源不存在"); // 需要用户池定位
    });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const actions = [
        { name: "资源操作名称", description: "资源操作描述" },
      ] as ResourceAction[];
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.updateResource({
        code: list[1].code,
        type,
        description,
        actions,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual("资源不存在");
    });
  });
});
