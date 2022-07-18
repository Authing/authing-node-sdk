import {
  CreateResourceDto,
  ResourceAction,
  UpdateResourceDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateResource", () => {
  const code = generateRandomString();
  const description = "这是描述";
  const type = CreateResourceDto.type.API;
  beforeAll(async () => {
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
        type,
        code,
        description,
        actions,
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
        codeList: [code],
      });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const code = "额！";
      const actions = [
        { name: "资源操作名称", description: "资源操作描述" },
      ] as ResourceAction[];
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.updateResource({
        type,
        code,
        description,
        actions,
      });
      expect(statusCode).toEqual(404);
      expect(message).toEqual("资源不存在");
    });
  });
});
