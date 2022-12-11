import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('createDataSource', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  beforeAll(async () => {
    const createNamespaceDto = {
      code : createDataResourceDto.namespaceCode,
      name : 'test',
      description : 'test',
    };
    await managementClient.createPermissionNamespace(createNamespaceDto);
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
    it('create dataSource successfully', async () => {
      const { statusCode, data, message} = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(200);
      expect(data.resourceCode).toEqual(createDataResourceDto.resourceCode);
      expect(data.resourceName).toEqual(createDataResourceDto.resourceName);
      expect(data.type).toEqual(createDataResourceDto.type);
      expect(data.struct).toEqual(createDataResourceDto.struct);
      expect(data.description).toEqual(createDataResourceDto.description);
      expect(data.actions).toEqual(createDataResourceDto.actions);
    })
  });

  describe('Fail', () => {
    it('namespaceCode can not be empty', async () => {
      const createDataResourceDto = {
        namespaceCode : '',
        resourceName : 'testResource',
        resourceCode : 'testResource',
        type : CreateDataResourceDto.type.STRING,
        struct : 'test',
        actions : ['read', 'get'],
        description : 'description',
      };
      const { statusCode, message } = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('namespaceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('resourceName can not be empty', async () => {
      const createDataResourceDto = {
        namespaceCode : 'test',
        resourceName : '',
        resourceCode : 'testResource',
        type : CreateDataResourceDto.type.STRING,
        struct : 'test',
        actions : ['read', 'get'],
        description : 'description',
      };
      const { statusCode, message } = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resourceName should not be empty');
    });
  });

  describe('Fail', () => {
    it('resourceCode can not be empty', async () => {
      const createDataResourceDto = {
        namespaceCode : 'test',
        resourceName : 'testResource',
        resourceCode : '',
        type : CreateDataResourceDto.type.STRING,
        struct : 'test',
        actions : ['read', 'get'],
        description : 'description',
      };
      const { statusCode, message } = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('resourceCode should not be empty');
    });
  });

  describe('Fail', () => {
    it('struct can not be empty', async () => {
      const createDataResourceDto = {
        namespaceCode : 'test',
        resourceName : 'testResource',
        resourceCode : 'testResource',
        type : CreateDataResourceDto.type.STRING,
        struct : '',
        actions : ['read', 'get'],
        description : 'description',
      };
      const { statusCode, message } = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('struct should not be empty');
    });
  });

  describe('Fail', () => {
    it('actions can not be empty', async () => {
      const createDataResourceDto = {
        namespaceCode : 'test',
        resourceName : 'testResource',
        resourceCode : 'testResource',
        type : CreateDataResourceDto.type.STRING,
        struct : 'test',
        actions : [],
        description : 'description',
      };
      const { statusCode, message } = await managementClient.createDataResource(createDataResourceDto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('actions should not be empty');
    });
  });

});
