import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('updatetDataSource', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const updateDto = {
    namespaceCode : createDataResourceDto.namespaceCode,
    resourceCode : createDataResourceDto.resourceCode,
    resourceName : createDataResourceDto.resourceName + 'Update',
    description : createDataResourceDto.description + 'Update',
    struct : createDataResourceDto.struct + 'Update',
    actions : createDataResourceDto.actions.concat('update'),
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
    it('update dataSource successfully', async () => {

      const { statusCode, data } = await managementClient.updateDataResource(updateDto);

      expect(statusCode).toEqual(200);
      expect(data.resourceCode).toEqual(updateDto.resourceCode);
      expect(data.resourceName).toEqual(updateDto.resourceName);
      expect(data.description).toEqual(updateDto.description);
      expect(data.struct).toEqual(updateDto.struct);
      expect(data.actions).toEqual(updateDto.actions);
    })
  });

  describe('Fail', () => {
    it('resourceCode can not be empty', async () => {
      const updateDto = {
        namespaceCode : createDataResourceDto.namespaceCode,
        resourceCode : '',
        resourceName : createDataResourceDto.resourceName + 'Update',
        description : createDataResourceDto.description + 'Update',
        struct : createDataResourceDto.struct + 'Update',
        actions : createDataResourceDto.actions.concat('update'),
      };
      const { statusCode, message } = await managementClient.updateDataResource(updateDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resourceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('namespaceCode can not be empty', async () => {
      const updateDto = {
        namespaceCode : '',
        resourceCode : createDataResourceDto.resourceCode,
        resourceName : createDataResourceDto.resourceName + 'Update',
        description : createDataResourceDto.description + 'Update',
        struct : createDataResourceDto.struct + 'Update',
        actions : createDataResourceDto.actions.concat('update'),
      };
      const { statusCode, message } = await managementClient.updateDataResource(updateDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

});
