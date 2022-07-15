import { ResourceAction, UpdateResourceDto } from "../../src/models";
import { managementClient } from "../client";

describe("updateResource", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("with full basic resource", async () => {
      const code = "1229505432";
      const description = "这是描述";
      const type = UpdateResourceDto.type.API;

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
        codeList: ["1229505432"],
      });
  });

  describe("Fail", () => {
    it("resource doesn't not exist", async () => {
      const code = "额！";
      const description = "这是描述";
      const type = UpdateResourceDto.type.API;
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
