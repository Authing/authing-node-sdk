import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('getDataSource', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const getDto = {
    namespaceCode : createDataResourceDto.namespaceCode,
    resourceCode : createDataResourceDto.resourceCode,
  };

  const createNamespaceDto = {
    code : createDataResourceDto.namespaceCode,
    name : 'test',
    description : 'test',
  };

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
  });

  describe('Success', () => {
    it('get dataSource successfully', async () => {

      const { statusCode, data } = await managementClient.getDataResource(getDto);

      expect(statusCode).toEqual(200);
      expect(data.resourceCode).toEqual(getDto.resourceCode);
      expect(data.namespaceCode).toEqual(getDto.namespaceCode);
    })
  });

  describe('Fail', () => {
    it('resourceCode can not be empty', async () => {
      const getDto = {
        namespaceCode : createDataResourceDto.namespaceCode,
        resourceCode : '',
      };
      const { statusCode, message } = await managementClient.getDataResource(getDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resourceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('namespaceCode can not be empty', async () => {
      const getDto = {
        namespaceCode : '',
        resourceCode : createDataResourceDto.resourceCode,
      };
      const { statusCode, message } = await managementClient.getDataResource(getDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

});
