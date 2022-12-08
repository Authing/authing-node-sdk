import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { DataStatementPermissionDto } from "../../../src/models/DataStatementPermissionDto";
import { managementClient } from "../../client";

describe('listSimpleDataPolices', () => {

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

  const listDto = {
    page : 1,
    limit: 10,
    query: createDto.policyName,
  }

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
    it('get simple data polices successfully', async () => {
      const { statusCode, data, message} = await managementClient.listSimpleDataPolices(listDto);
  
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toEqual(1);
      expect(data.list[0].policyId).toEqual(policyId);
      expect(data.list[0].policyName).toEqual(createDto.policyName);
    })
  });

  describe('Fail', () => {
    it('limit can not more than 50', async () => {
      const dto = {
        page : listDto.page,
        limit : 51,
        query : listDto.query,
      }
      const { statusCode, data, message} = await managementClient.listSimpleDataPolices(dto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('limit must not be greater than 50');
    });
  });
});
