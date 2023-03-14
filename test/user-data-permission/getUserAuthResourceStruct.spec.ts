import {AuthenticationClient} from "../../src";
import {DataStatementPermissionDto} from "../../src/models/DataStatementPermissionDto";
import {SubjectDto} from "../../src/models/SubjectDto";
import {managementClient} from "../client";
import {CreateApplicationDto} from "../../src/models/CreateApplicationDto";
import {DeleteAuthorizeDataPolicyDto} from "../../src/models/DeleteAuthorizeDataPolicyDto";
import {DeleteDataPolicyDto} from "../../src/models/DeleteDataPolicyDto";
import {DeleteDataResourceDto} from "../../src/models/DeleteDataResourceDto";
import {DeleteApplicationDto} from "../../src/models/DeleteApplicationDto";
import {DeleteUsersBatchDto} from "../../src/models/DeleteUsersBatchDto";
import {randStr} from "../utils";
import {GetUserAuthResourcePermissionListDto} from "../../src/models/GetUserAuthResourcePermissionListDto";
import {GetUserAuthResourceStructDto} from "../../src/models/GetUserAuthResourceStructDto";

describe("getUserAuthResourceStruct", () => {
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

  let str1ResourceCode: string = "";
  let str2ResourceCode: string = "";

  it("Create String Data Resource Success" /*这是当前用例的描述*/, async () => {
    let createStr1DataResourceDto = {
      resourceCode: `string${randStr(3)}DataResourceCode1`,
      resourceName: `字符串数据资源${randStr(4)}`,
      namespaceCode: appId,
      actions: ["get", "update", "delete"],
      struct: "str1",
    };

    let createStr2DataResourceDto = {
      resourceCode: `string${randStr(3)}DataResourceCode2`,
      resourceName: `字符串数据资源${randStr(4)}`,
      namespaceCode: appId,
      actions: ["get", "update", "delete"],
      struct: "str2",
    };
    // 3、 创建数据资源
    const str1 = await managementClient.createDataResourceByString(
      createStr1DataResourceDto
    );
    // 期望响应状态码为 200

    expect(str1.statusCode).toEqual(200);
    str1ResourceCode = str1.data.resourceCode;
    const str2 = await managementClient.createDataResourceByString(
      createStr2DataResourceDto
    );
    // 期望响应状态码为 200
    expect(str2.statusCode).toEqual(200);
    str2ResourceCode = str2.data.resourceCode;
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
          permissions: [`${appId}/${str1ResourceCode}/*`],
        },
      ],
    };

    let createPolicyDenyDto = {
      policyName: `testStrDenyPolicy${randStr(5)}`,
      policyDesc: "testStrDenyPolicy",
      statementList: [
        {
          effect: DataStatementPermissionDto.effect.DENY,
          permissions: [`${appId}/${str2ResourceCode}/*`],
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

  // 6、获取用户在登录应用下被授权资源列表
  it("get user auth resource permission list Success", async () => {
    const checkAuthClient = new AuthenticationClient({
      /** 应用 ID */
      appId: appId,
      appHost: appHost,
      appSecret: appSecret,
      accessToken: userToken,
    });
    let dto: GetUserAuthResourcePermissionListDto = {
      resources: [
        "123"
      ],
    };
    const result = await checkAuthClient.getUserAuthResourcePermissionList(dto);
    expect(result.statusCode).toEqual(200);
    result.data?.permissionList?.forEach((item) => {
      console.log(item)
    });
  });

  it("Must User Sing In  Success" /*这是当前用例的描述*/, async () => {
    // 5、用户登录
    // 初始化 认证侧
    const authClient = new AuthenticationClient({
      /** 应用 ID */
      appId: '63f5b514ab248c5a9eb1dcaa',
      appHost: 'https://check-user-permission.authing.cn',
      appSecret: 'a1ff88d6c7c40418283a872ced3cdc3a',
    });

    const response = await authClient.signInByUsernamePassword({
      username: '4',
      password: '4',
    });
    expect(response.statusCode).toEqual(200);
    userToken = response.data.access_token;
  });


  it("Must get user auth resource permission list Success", async () => {
    const checkAuthClient = new AuthenticationClient({
      /** 应用 ID */
      appId: '63f5b514ab248c5a9eb1dcaa',
      appHost: 'https://check-user-permission.authing.cn',
      appSecret: 'a1ff88d6c7c40418283a872ced3cdc3a',
      accessToken: userToken,
    });
    let dto: GetUserAuthResourceStructDto = {
      // resource: 'r1'
      // resource: 'r2'
      resource: 'r3'
    };
    const result = await checkAuthClient.getUserAuthResourceStruct(dto);
    expect(result.statusCode).toEqual(200);
    if(result.data) {}
    console.log(result.data)
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
      resourceCode: str1ResourceCode,
    };

    let deleteStr2DataResourceDto: DeleteDataResourceDto = {
      namespaceCode: appId,
      resourceCode: str2ResourceCode,
    };
    // 9、删除数据资源
    const str1Resp = await managementClient.deleteDataResource(
      deleteStr1DataResourceDto
    );
    expect(str1Resp.statusCode).toEqual(200);

    const str2Resp = await managementClient.deleteDataResource(
      deleteStr2DataResourceDto
    );
    expect(str2Resp.statusCode).toEqual(200);
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
