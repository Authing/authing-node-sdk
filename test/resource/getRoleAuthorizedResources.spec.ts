import {
  AuthorizeResourceItem,
  CreateResourceBatchItemDto,
  CreateResourceDto,
  GroupDto,
  ResourceAction,
  ResourceItemDto,
  RoleDto,
  UserDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getResource", () => {
  const code = generateRandomString();
  let group: RoleDto;

  const type = CreateResourceBatchItemDto.type.DATA;
  const list = [
    { code: generateRandomString(), type },
    { code: generateRandomString(), type },
  ] as Array<CreateResourceBatchItemDto>;
  const targetType = AuthorizeResourceItem.targetType.ROLE;
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
    const { data } = await managementClient.createRole({
      code,
      description: "",
    });

    group = data;
    const {
      statusCode,
      data: resource,
      message,
    } = await managementClient.authorizeResources({
      list: [
        {
          targetType,
          targetIdentifiers: [group.code],
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
    await managementClient.deleteRolesBatch({ codeList: [code] });
  });

  describe("Success", () => {
    it("with full basic resource", async () => {
      const namespace = "default";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getRoleAuthorizedResources({
        code,
        namespace,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("role doesn't not exist", async () => {
      const namespace = "default";

      const {
        statusCode,
        data: resource,
        message,
      } = await managementClient.getRoleAuthorizedResources({
        code: generateRandomString(),
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("角色不存在");
    });
  });
});
