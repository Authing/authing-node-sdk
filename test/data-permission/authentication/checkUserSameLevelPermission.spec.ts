import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { DeleteAuthorizeDataPolicyDto } from "../../../src/models/DeleteAuthorizeDataPolicyDto";
import { SubjectDto } from "../../../src/models/SubjectDto";
import { managementClient } from "../../client";

describe('checkUserSameLevelPermission', () => {

  const createNamespaceDto = {
    code : 'test',
    name : 'test',
    description : 'test',
  };

  const createDataResourceDto = {
    namespaceCode : createNamespaceDto.code,
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const createDto = {
    policyName: 'test-policy-name11',
    statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
      permissions: [`${createNamespaceDto.code}/${createDataResourceDto.resourceCode}/${createDataResourceDto.actions[0]}`] 
    }],
    description: 'test',
  };

  const createUserDto = {
    username: 'test-user11',
  }

  let policyId = '';

  let userId = '';

  let authDto = {
    policyIds : [''],
    targetList: [{id: '', type: SubjectDto.type.USER}],
  }

  let checkDto = {
    userId: '',
    action: createDataResourceDto.actions[0],
    namespaceCode: createNamespaceDto.code,
    resource: createDataResourceDto.resourceCode,
  }

  beforeAll(async () => {
    const { data } = await managementClient.createUser(createUserDto);
    userId = data.userId;
    authDto.targetList[0].id = data.userId;
    checkDto.userId = data.userId;
  });

  beforeAll(async () => {
    await managementClient.createPermissionNamespace(createNamespaceDto);
    await managementClient.createDataResource(createDataResourceDto);
    const { data } = await managementClient.createDataPolicy(createDto);
    policyId = data.policyId;
    authDto.policyIds[0] = data.policyId;
    await managementClient.authorizeDataPolicies(authDto);
  });

  afterAll(async () => {
    const deleteDataResourceDto = {
      resourceCode : createDataResourceDto.resourceCode,
      namespaceCode : createDataResourceDto.namespaceCode,
    };

    await managementClient.revokeDataPolicy({policyId: policyId, targetIdentifier: userId, targetType: DeleteAuthorizeDataPolicyDto.targetType.USER});
    await managementClient.deleteDataPolicy({policyId});
    await managementClient.deleteUsersBatch({userIds: [userId]});
    await managementClient.deleteDataResource(deleteDataResourceDto);
    await managementClient.deletePermissionNamespace({ code : createDataResourceDto.namespaceCode });
  });

  describe('Success', () => {
    it('check user same level permission successfully', async () => {
      const { statusCode, data, message } = await managementClient.checkUserSameLevelPermission(checkDto);

      expect(statusCode).toEqual(200);
      expect(data.checkLevelResultList[0].action).toEqual(checkDto.action);
      expect(data.checkLevelResultList[0].enabled).toEqual(true);
    })
  });

  describe('Fail', () => {
    it('userId should not be empty', async () => {
      const checkDto = {
        userId: '',
        action: createDataResourceDto.actions[0],
        namespaceCode: createNamespaceDto.code,
        resource: createDataResourceDto.resourceCode,
      }
      const { statusCode, data, message } = await managementClient.checkUserSameLevelPermission(checkDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('userId should not be empty');
    });
  });

  describe('Fail', () => {
    it('action should not be empty', async () => {
      const checkDto = {
        userId: 'id',
        action: '',
        namespaceCode: createNamespaceDto.code,
        resource: createDataResourceDto.resourceCode,
      }
      const { statusCode, data, message } = await managementClient.checkUserSameLevelPermission(checkDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('action should not be empty');
    });
  });

  describe('Fail', () => {
    it('namespaceCode should not be empty', async () => {
      const checkDto = {
        userId: 'id',
        action: 'read',
        namespaceCode: '',
        resource: createDataResourceDto.resourceCode,
      }
      const { statusCode, data, message } = await managementClient.checkUserSameLevelPermission(checkDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('resource should not be empty', async () => {
      const checkDto = {
        userId: 'id',
        action: 'read',
        namespaceCode: 'code',
        resource: '',
      }
      const { statusCode, data, message } = await managementClient.checkUserSameLevelPermission(checkDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resource should not be empty');
    });
  });
});
