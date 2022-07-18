import {
  AuthorizeResourceItem,
  CreateResourceBatchItemDto,
  CreateResourceDto,
  ResourceAction,
  ResourceItemDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getResource", () => {
  const type = CreateResourceBatchItemDto.type.DATA;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
  ] as Array<CreateResourceBatchItemDto>;
  const targetType = AuthorizeResourceItem.targetType.GROUP;
  const targetIdentifiers = ["developer"] as Array<string>;
  const resources = list.map((item) => {
    return {
      code: item.code,
      actions: ["*"],
      resourceType: ResourceItemDto.resourceType.DATA,
    } as ResourceItemDto;
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
      const namespace = "default";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getAuthorizedResources({
        targetType,
        targetIdentifier: targetIdentifiers[0],
        namespace,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("group doesn't not exist", async () => {
      const namespace = "default";
      const targetIdentifier = "";
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getAuthorizedResources({
        targetType,
        targetIdentifier,
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `group not exists with code: ${targetIdentifier}`
      );
    });
  });

  describe("Fail", () => {
    it("group doesn't not exist", async () => {
      const namespace = "default";
      const targetIdentifier = "额！ ";
      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getAuthorizedResources({
        targetType,
        targetIdentifier,
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual(
        `group not exists with code: ${targetIdentifier}`
      );
    });
  });
});
