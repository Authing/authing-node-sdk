import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('deletetDataSource', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const deleteDto = {
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
    await managementClient.deleteDataResource(deleteDto);
    await managementClient.deletePermissionNamespace({ code : createDataResourceDto.namespaceCode });
  });

  describe('Success', () => {
    it('delete dataSource successfully', async () => {
      const { statusCode } = await managementClient.deleteDataResource(deleteDto);

      expect(statusCode).toEqual(200);
    })
  });

  describe('Fail', () => {
    it('resourceCode can not be empty', async () => {
      const deleteDto = {
        namespaceCode : createDataResourceDto.namespaceCode,
        resourceCode : '',
      };
      const { statusCode, message } = await managementClient.deleteDataResource(deleteDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resourceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('namespaceCode can not be empty', async () => {
      const deleteDto = {
        namespaceCode : '',
        resourceCode : createDataResourceDto.resourceCode,
      };
      const { statusCode, message } = await managementClient.deleteDataResource(deleteDto);
      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

});
