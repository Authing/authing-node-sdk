import { equal } from "assert";
import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('checktDataSourceExists', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const checkDto = {
    namespaceCode : createDataResourceDto.namespaceCode,
    resourceCode : createDataResourceDto.resourceCode + 'Update',
    resourceName : createDataResourceDto.resourceName + 'Update',
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
    it('dataSource is valid', async () => {
      const { statusCode, data } = await managementClient.checkDataResourceExists(checkDto);

      expect(statusCode).toEqual(200);
      expect(data.isValid).toEqual(true);
    })
  });

  describe('Success', () => {
    it('dataSource is not valid', async () => {
      const checkDto = {
        namespaceCode : createDataResourceDto.namespaceCode,
        resourceCode : createDataResourceDto.resourceCode,
        resourceName : createDataResourceDto.resourceName + 'Update1',
      };
      const { statusCode, data } = await managementClient.checkDataResourceExists(checkDto);

      expect(statusCode).toEqual(200);
      expect(data.isValid).toEqual(false);
      expect(data.message).toEqual('数据资源 code 已经存在');
    })
  });

  describe('Success', () => {
    it('dataSource is not valid', async () => {
      const checkDto = {
        namespaceCode : createDataResourceDto.namespaceCode,
        resourceCode : createDataResourceDto.resourceCode + 'Update1',
        resourceName : createDataResourceDto.resourceName,
      };
      const { statusCode, data } = await managementClient.checkDataResourceExists(checkDto);

      expect(statusCode).toEqual(200);
      expect(data.isValid).toEqual(false);
      expect(data.message).toEqual('数据资源名称已经存在');
    })
  });

  describe('Fail', () => {
    it('namespaceCode can not be empty', async () => {
      const checkDto = {
        namespaceCode : '',
        resourceCode : createDataResourceDto.resourceCode + 'Update',
        resourceName : createDataResourceDto.resourceName + 'Update',
      };

      const { statusCode, message } = await managementClient.checkDataResourceExists(checkDto);
      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

});
