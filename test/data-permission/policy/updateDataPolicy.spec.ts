import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { managementClient } from "../../client";

describe('updateDataPolicy', () => {

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

  let policyId = '';

  let updateDto = {
    policyId : policyId,
    policyName: createDto.policyName + 'updated',
    description: createDto.description + 'updated',
    statementList: [{ effect: DataStatementPermissionDto.effect.ALLOW, 
      permissions: [createNamespaceDto.code+'/'+createDataResourceDto.resourceCode+'/'+createDataResourceDto.actions[1]] 
    }],
  }

  beforeAll(async () => {
    await managementClient.createPermissionNamespace(createNamespaceDto);
    await managementClient.createDataResource(createDataResourceDto);
    const { data } = await managementClient.createDataPolicy(createDto);
    policyId = data.policyId;
    updateDto.policyId = data.policyId;
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
    it('update data policy successfully', async () => {
      const { statusCode, data, message} = await managementClient.updateDataPolicy(updateDto);

      expect(statusCode).toEqual(200);
      expect(data.policyId).toEqual(policyId);
      expect(data.policyName).toEqual(updateDto.policyName);
      expect(data.description).toEqual(updateDto.description);

    })
  });

  describe('Fail', () => {
    it('policyId should not be empty', async () => {
      const updateDto = {
        policyId : '',
        policyName: createDto.policyName + 'updated',
        description: createDto.description + 'updated',
      }
      const { statusCode, data, message} = await managementClient.updateDataPolicy(updateDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('policyId should not be empty');
    });
  });
});
