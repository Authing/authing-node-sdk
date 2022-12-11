import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { managementClient } from "../../client";

describe('createDataPolicy', () => {

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
    policyName: 'test-policy2',
    statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
      permissions: [createNamespaceDto.code+'/'+createDataResourceDto.resourceCode+'/'+createDataResourceDto.actions[0]] 
    }]
  };

  let policyId = '';

  beforeAll(async () => {
    await managementClient.createPermissionNamespace(createNamespaceDto);
    await managementClient.createDataResource(createDataResourceDto);
  });

  afterAll(async () => {
    const deleteDataResourceDto = {
      resourceCode : createDataResourceDto.resourceCode,
      namespaceCode : createDataResourceDto.namespaceCode,
    };

    await managementClient.deleteDataResource(deleteDataResourceDto);
    await managementClient.deletePermissionNamespace({ code : createDataResourceDto.namespaceCode });
    await managementClient.deleteDataPolicy({policyId});
  });

  describe('Success', () => {
    it('create data policy successfully', async () => {
      const { statusCode, data, message} = await managementClient.createDataPolicy(createDto);

      policyId = data.policyId;
      expect(statusCode).toEqual(200);
      expect(data.policyId).toBeDefined;
      expect(data.policyName).toEqual(createDto.policyName);
    })
  });

  describe('Fail', () => {
    it('policyName can not be empty', async () => {
      const createDto = {
        policyName: '',
        statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
          permissions: [createNamespaceDto.code+'/'+createDataResourceDto.resourceCode+'/'+createDataResourceDto.actions[0]] 
        }]
      };

      const { statusCode, message} = await managementClient.createDataPolicy(createDto);
      expect(statusCode).toEqual(400);
      expect(message).toEqual('policyName should not be empty');
    });
  });

  describe('Fail', () => {
    it('statementList must contain at least 1 elements', async () => {
      const createDto = {
        policyName: 'test-policy1',
        statementList: [],
      };

      const { statusCode, message} = await managementClient.createDataPolicy(createDto);
      expect(statusCode).toEqual(400);
      expect(message).toEqual('statementList must contain at least 1 elements');
    });
  });

  describe('Fail', () => {
    it('permission list can not be null', async () => {
      const createDto = {
        policyName: 'test-policy3',
        statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
          permissions: [] 
        }]
      };

      const { statusCode, message} = await managementClient.createDataPolicy(createDto);
      expect(statusCode).toEqual(602);
      expect(message).toEqual('请求第三方端点时返回错误, errmsg=create statement argument illegal, permission list can not be null');
    });
  });

});
