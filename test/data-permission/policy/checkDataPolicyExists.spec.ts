import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { managementClient } from "../../client";

describe('checkDataPolicyExists', () => {

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
    policyName: 'test-policy-name2',
    statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
      permissions: [createNamespaceDto.code+'/'+createDataResourceDto.resourceCode+'/'+createDataResourceDto.actions[0]] 
    }],
    description: 'test',
  };

  let policyId = '';

  beforeAll(async () => {
    await managementClient.createPermissionNamespace(createNamespaceDto);
    await managementClient.createDataResource(createDataResourceDto);
    const { data } = await managementClient.createDataPolicy(createDto);
    policyId = data.policyId;
  });

  afterAll(async () => {
    const deleteDataResourceDto = {
      resourceCode : createDataResourceDto.resourceCode,
      namespaceCode : createDataResourceDto.namespaceCode,
    };

    await managementClient.deleteDataPolicy({policyId});
    await managementClient.deleteDataResource(deleteDataResourceDto);
    await managementClient.deletePermissionNamespace({ code : createDataResourceDto.namespaceCode });
  });

  describe('Success', () => {
    it('data policy is valid', async () => {
      const { statusCode, data } =  await managementClient.checkDataPolicyExists({policyName : 'test11-name'});
    
      expect(statusCode).toEqual(200);
      expect(data.isValid).toEqual(true);
    })
  });

  describe('Success', () => {
    it('data policy is Invalid', async () => {
      const { statusCode, data } =  await managementClient.checkDataPolicyExists({policyName : createDto.policyName});
    
      expect(statusCode).toEqual(602);
      expect(data.isValid).toEqual(false);
    })
  });

  describe('Fail', () => {
    it('policyName should not be empty', async () => {
      const { statusCode, message} = await managementClient.checkDataPolicyExists({ policyName:''});

      expect(statusCode).toEqual(400);
      expect(message).toEqual('policyName should not be empty');
    });
  });
});
