import { AuthenticationClient } from "./../../src/AuthenticationClient";
import { DataStatementPermissionDto } from "../../src/models/DataStatementPermissionDto";
import { SubjectDto } from "../../src/models/SubjectDto";
import { managementClient } from "../client";
import { CreateApplicationDto } from "../../src/models/CreateApplicationDto";
import { CheckPermissionTreeResourceDto } from "../../src/models";
import { DeleteAuthorizeDataPolicyDto } from "../../src/models/DeleteAuthorizeDataPolicyDto";
import { DeleteDataPolicyDto } from "../../src/models/DeleteDataPolicyDto";
import { DeleteDataResourceDto } from "../../src/models/DeleteDataResourceDto";
import { DeleteApplicationDto } from "../../src/models/DeleteApplicationDto";
import { DeleteUsersBatchDto } from "../../src/models/DeleteUsersBatchDto";
import { randStr } from "../utils";
import { CreateTreeDataResourceDto } from "../../src/models/CreateTreeDataResourceDto";
import { DataResourceTreeStructs } from "../../src/models/DataResourceTreeStructs";

describe("checkPermissionTreeResource", () => {
  let userId = "";
  let userDto = {
    username: `testUserCreate${randStr(4)}`,
    password: "123456",
    email: `test${randStr(4)}@qq.com`,
  };
  it("Create User Success" /*这是当前用例的描述*/, async () => {
    // 1、创建用户
    const response = await managementClient.createUser(userDto);
    // 期望响应状态码为 200
    expect(response.statusCode).toEqual(200);
    userId = response.data.userId;
  });

  let appId = "";
  let appHost = "";
  let appSecret = "";
  it("Create Application Success" /*这是当前用例的描述*/, async () => {
    let appDto: CreateApplicationDto = {
      appIdentifier: `test-${randStr(2)}-user-permission-auth`,
      appName: `test${randStr(2)}App`,
      appDescription: "示例 app 描述",
      loginConfig: {
        enabledBasicLoginMethods: ["USERNAME_PASSWORD"],
        showAuthorizationPage: true,
      },
    };
    // 2、创建应用
    const response = await managementClient.createApplication(appDto);
    // 期望响应状态码为 200
    expect(response.statusCode).toEqual(200);

    appId = response.data.appId;
    appHost = "https://" + response.data.appIdentifier + ".authing.cn";

    const appSecretResponse = await managementClient.getApplicationSecret({
      appId,
    });
    expect(appSecretResponse.statusCode).toEqual(200);
    appSecret = appSecretResponse.data.secret;
  });

  let tree1ResourceCode: string = "";
  let tree2ResourceCode: string = "";

  let tree1Struct1: string = "";
  let tree1Struct1Struct11: string = "";
  let tree2Struct2: string = "";
  let tree2Struct2Struct22: string = "";

  it("Create Tree Data Resource Success" /*这是当前用例的描述*/, async () => {
    let createTree1DataResourceDto: CreateTreeDataResourceDto = {
      resourceCode: `tree${randStr(3)}DataResourceCode1`,
      resourceName: `树数据资源${randStr(4)}`,
      namespaceCode: appId,
      actions: ["get", "update", "delete"],
      struct: [
        {
          code: "tree1",
          name: "tree1",
          value: "",
          children: [
            {
              code: "tree11",
              name: "tree11",
              children: [
                {
                  code: "tree111",
                  name: "tree111",
                },
              ],
            },
          ],
        },
        {
          code: "tree2",
          name: "tree2",
          value: "",
          children: [
            {
              code: "tree22",
              name: "tree22",
              children: [
                {
                  code: "tree222",
                  name: "tree222",
                },
              ],
            },
          ],
        },
      ],
    };

    let createTree2DataResourceDto: CreateTreeDataResourceDto = {
      resourceCode: `tree${randStr(3)}DataResourceCode2`,
      resourceName: `树数据资源${randStr(4)}`,
      namespaceCode: appId,
      actions: ["get", "update", "delete"],
      struct: [
        {
          code: "tree3",
          name: "tree3",
          value: "",
          children: [
            {
              code: "tree33",
              name: "tree33",
              children: [
                {
                  code: "tree333",
                  name: "tree333",
                },
              ],
            },
          ],
        },
        {
          code: "tree4",
          name: "tree4",
          value: "",
          children: [
            {
              code: "tree44",
              name: "tree44",
              children: [
                {
                  code: "tree444",
                  name: "tree444",
                },
              ],
            },
          ],
        },
      ],
    };
    // 3、 创建数据资源
    const tree1 = await managementClient.createDataResourceByTree(
      createTree1DataResourceDto
    );
    // 期望响应状态码为 200

    expect(tree1.statusCode).toEqual(200);
    tree1ResourceCode = tree1.data.resourceCode;
    tree1Struct1 = tree1.data.struct[0].code;
    if (tree1.data.struct[0].children?.length !== 0) {
      let sss: DataResourceTreeStructs = (
        tree1.data.struct[0].children as any
      )[0];
      tree1Struct1Struct11 = sss.code;
    }

    const tree2 = await managementClient.createDataResourceByTree(
      createTree2DataResourceDto
    );
    // 期望响应状态码为 200
    expect(tree2.statusCode).toEqual(200);
    tree2ResourceCode = tree2.data.resourceCode;
    tree2Struct2 = tree2.data.struct[0].code;
    if (tree2.data.struct[0].children?.length !== 0) {
      let sss: DataResourceTreeStructs = (
        tree2.data.struct[0].children as any
      )[0];
      tree2Struct2Struct22 = sss.code;
    }
  });
  let policyAllowId = "";
  let policyDenyId = "";
  it("Create Data Policy Success" /*这是当前用例的描述*/, async () => {
    let createPolicyAllowDto = {
      policyName: `testStrAllowPolicy${randStr(4)}`,
      policyDesc: "testStrAllowPolicy",
      statementList: [
        {
          effect: DataStatementPermissionDto.effect.ALLOW,
          permissions: [
            `${appId}/${tree1ResourceCode}/${tree1Struct1}/get`,
            `${appId}/${tree1ResourceCode}/${tree1Struct1}/${tree1Struct1Struct11}/get`,
          ],
        },
      ],
    };

    let createPolicyDenyDto = {
      policyName: `testStrDenyPolicy${randStr(5)}`,
      policyDesc: "testStrDenyPolicy",
      statementList: [
        {
          effect: DataStatementPermissionDto.effect.DENY,
          permissions: [
            `${appId}/${tree2ResourceCode}/${tree2Struct2}/get`,
            `${appId}/${tree2ResourceCode}/${tree2Struct2}/${tree2Struct2Struct22}/get`,
          ],
        },
      ],
    };

    const dataPolicyStrAllow = await managementClient.createDataPolicy(
      createPolicyAllowDto
    );
    expect(dataPolicyStrAllow.statusCode).toEqual(200);

    policyAllowId = dataPolicyStrAllow.data.policyId;
    const dataPolicyStrDeny = await managementClient.createDataPolicy(
      createPolicyDenyDto
    );

    expect(dataPolicyStrDeny.statusCode).toEqual(200);
    policyDenyId = dataPolicyStrDeny.data.policyId;
  });

  let userToken: any = "";

  it("User auth Success" /*这是当前用例的描述*/, async () => {
    // 4、创建用户授权
    let authPolicy = {
      targetList: [
        {
          id: userId,
          type: SubjectDto.type.USER,
        },
      ],
      policyIds: [policyAllowId, policyDenyId],
    };
    const response = await managementClient.authorizeDataPolicies(authPolicy);
    expect(response.statusCode).toEqual(200);
  });

  it("User Sing In  Success" /*这是当前用例的描述*/, async () => {
    // 5、用户登录
    // 初始化 认证侧
    const authClient = new AuthenticationClient({
      /** 应用 ID */
      appId: appId,
      appHost: appHost,
      appSecret: appSecret,
    });

    const response = await authClient.signInByUsernamePassword({
      username: userDto.username,
      password: userDto.password,
    });
    expect(response.statusCode).toEqual(200);
    userToken = response.data.access_token;
  });

  // 6、用户鉴权
  it("Check Permission Tree Resource Success", async () => {
    const checkAuthClient = new AuthenticationClient({
      /** 应用 ID */
      appId: appId,
      appHost: appHost,
      appSecret: appSecret,
      accessToken: userToken,
    });
    let checkPermissionTreeResourceDto: CheckPermissionTreeResourceDto = {
      resources: [
        `/${tree1ResourceCode}/${tree1Struct1}`,
        `/${tree1ResourceCode}/${tree1Struct1}/${tree1Struct1Struct11}`,
        `/${tree2ResourceCode}/${tree2Struct2}`,
        `/${tree2ResourceCode}/${tree2Struct2}/${tree2Struct2Struct22}`,
      ],
      action: "get",
    };
    const result = await checkAuthClient.checkPermissionByTreeResource(
      checkPermissionTreeResourceDto
    );
    expect(result.statusCode).toEqual(200);
    console.log(result.data);
  });

  it("User  ReVoke Auth Success" /*这是当前用例的描述*/, async () => {
    // 7、删除用户授权
    const revokeAuthDto: DeleteAuthorizeDataPolicyDto = {
      policyId: policyAllowId,
      targetType: DeleteAuthorizeDataPolicyDto.targetType.USER,
      targetIdentifier: userId,
    };
    const response = await managementClient.revokeDataPolicy(revokeAuthDto);
    expect(response.statusCode).toEqual(200);
  });

  it("Delete  Data Policy  Success" /*这是当前用例的描述*/, async () => {
    let deleteDataPolicyAllowDto: DeleteDataPolicyDto = {
      policyId: policyAllowId,
    };

    let deleteDataPolicyDenyDto: DeleteDataPolicyDto = {
      policyId: policyDenyId,
    };
    // 8、删除数据策略
    const allowResp = await managementClient.deleteDataPolicy(
      deleteDataPolicyAllowDto
    );
    expect(allowResp.statusCode).toEqual(200);

    const denyResp = await managementClient.deleteDataPolicy(
      deleteDataPolicyDenyDto
    );
    expect(denyResp.statusCode).toEqual(200);
  });

  it("Delete  Data Resource  Success" /*这是当前用例的描述*/, async () => {
    let deleteStr1DataResourceDto: DeleteDataResourceDto = {
      namespaceCode: appId,
      resourceCode: tree1ResourceCode,
    };

    let deleteStr2DataResourceDto: DeleteDataResourceDto = {
      namespaceCode: appId,
      resourceCode: tree2ResourceCode,
    };
    // 9、删除数据资源

    const tree1Resp = await managementClient.deleteDataResource(
      deleteStr1DataResourceDto
    );
    expect(tree1Resp.statusCode).toEqual(200);

    const tree2Resp = await managementClient.deleteDataResource(
      deleteStr2DataResourceDto
    );
    expect(tree2Resp.statusCode).toEqual(200);
  });

  it("Delete  Application  Success" /*这是当前用例的描述*/, async () => {
    let deleteApplication: DeleteApplicationDto = {
      appId: appId,
    };

    // 10、删除应用
    const resp = await managementClient.deleteApplication(deleteApplication);

    expect(resp.statusCode).toEqual(200);
  });

  it("Delete  User  Success" /*这是当前用例的描述*/, async () => {
    let deleteUserDto: DeleteUsersBatchDto = {
      userIds: [userId],
    };

    // 10、删除用户
    const resp = await managementClient.deleteUsersBatch(deleteUserDto);

    expect(resp.statusCode).toEqual(200);
  });
});
