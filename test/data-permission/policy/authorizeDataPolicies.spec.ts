import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { DeleteAuthorizeDataPolicyDto } from "../../../src/models/DeleteAuthorizeDataPolicyDto";
import { SubjectDto } from "../../../src/models/SubjectDto";
import { managementClient } from "../../client";

describe('authorizeDataPolices', () => {

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
    policyName: 'test-policy-name',
    statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW,
      permissions: [createNamespaceDto.code+'/'+createDataResourceDto.resourceCode+'/'+createDataResourceDto.actions[0]]
    }],
    description: 'test',
  };

  const createUserDto = {
    username: 'test-user',
  }

  let policyId = '';

  let userId = '';

  let authDto = {
    policyIds : [''],
    targetList: [{id: '', type: SubjectDto.type.USER}],
  }

  beforeAll(async () => {
    const { data } = await managementClient.createUser(createUserDto);
    userId = data.userId;
    authDto.targetList[0].id = data.userId;
  });

  beforeAll(async () => {
    await managementClient.createPermissionNamespace(createNamespaceDto);
    await managementClient.createDataResource(createDataResourceDto);
    const { data } = await managementClient.createDataPolicy(createDto);
    policyId = data.policyId;
    authDto.policyIds[0] = data.policyId;
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
    it('authorize data policies successfully', async () => {
      const { statusCode, message} = await managementClient.authorizeDataPolicies(authDto);

      expect(statusCode).toEqual(200);
    })
  });

  describe('Fail', () => {
    it('policyIds should not be empty', async () => {
      const authDto = {
        policyIds : [],
        targetList: [{id: '', type: SubjectDto.type.USER}],
      }
      const { statusCode, message} = await managementClient.authorizeDataPolicies(authDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('policyIds must contain at least 1 elements');
    });
  });

  describe('Fail', () => {
    it('targetList should not be empty', async () => {
      const authDto = {
        policyIds : ['policyId'],
        targetList: [],
      }
      const { statusCode, message} = await managementClient.authorizeDataPolicies(authDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('targetList should not be empty');
    });
  });
});
