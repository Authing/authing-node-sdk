import {
  AuthorizeResourceItem,
  CreateResourceBatchItemDto,
  CreateResourceDto,
  ResourceAction,
  ResourceItemDto,
  UserDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getResource", () => {
  const username = generateRandomString();
  let user: UserDto;

  const type = CreateResourceBatchItemDto.type.DATA;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
  ] as Array<CreateResourceBatchItemDto>;
  const targetType = AuthorizeResourceItem.targetType.USER;
  const resources = [
    {
      code: "*",
      actions: ["*"],
      resourceType: ResourceItemDto.resourceType.DATA,
    },
  ] as ResourceItemDto[];

  beforeAll(async () => {
    await managementClient.createResourcesBatch({
      list,
    });
    const { data } = await managementClient.createUser({ username });
    user = data;
    const {
      statusCode,
      data: resource,
      message,
    } = await managementClient.authorizeResources({
      list: [
        {
          targetType,
          targetIdentifiers: [user.userId],
          resources,
        },
      ],
      namespace: "default",
    });

    expect(statusCode).toEqual(200);
    expect(message).toEqual("");
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
    await managementClient.deleteUsersBatch({ userIds: [user.userId] });
  });

  describe("Success", () => {
    it("with full basic resource", async () => {
      const namespace = "default";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getUserAuthorizedResources({
        userId: user.userId,
        namespace,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("user doesn't not exist", async () => {
      const namespace = "default";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getUserAuthorizedResources({
        userId: generateRandomString(),
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("用户不存在");
    });
  });
});
