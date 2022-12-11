import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { managementClient } from "../../client";

describe('getDataPolicy', () => {

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
    it('get data polices successfully', async () => {
      const { statusCode, data, message} = await managementClient.getDataPolicy({policyId});
  
      expect(statusCode).toEqual(200);
      expect(data.policyId).toEqual(policyId);
      expect(data.policyName).toEqual(createDto.policyName);
    })
  });

  describe('Fail', () => {
    it('policyId should not be empty', async () => {
      const dto = {
        policyId: '',
      }
      const { statusCode, data, message} = await managementClient.getDataPolicy(dto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('policyId should not be empty');
    });
  });
});
