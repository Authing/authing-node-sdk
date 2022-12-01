import { CreateDataResourceDto } from "../../../src/models/CreateDataResourceDto";
import { managementClient } from "../../client";

describe('getDataSourceList', () => {

  const createDataResourceDto = {
    namespaceCode : 'test',
    resourceName : 'testResource',
    resourceCode : 'testResource',
    type : CreateDataResourceDto.type.STRING,
    struct : 'test',
    actions : ['read', 'get'],
    description : 'description',
  };

  const page = 1;
  const limit = 10;
  const query = createDataResourceDto.resourceCode;
  const namespaceCodes = [createDataResourceDto.namespaceCode];

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
    it('get dataSource list successfully', async () => {
      const dto = {
        page : page,
        limit : limit,
        query : query,
        namespaceCodes : namespaceCodes,
      }
      const { statusCode, data, message} = await managementClient.listDataResources(dto);

      expect(statusCode).toEqual(200);
      expect(data.totalCount).toEqual(1);
      expect(data.list[0].resourceCode).toEqual(createDataResourceDto.resourceCode);
      expect(data.list[0].resourceName).toEqual(createDataResourceDto.resourceName);
      expect(data.list[0].type).toEqual(createDataResourceDto.type);
      expect(data.list[0].namespaceCode).toEqual(createDataResourceDto.namespaceCode);
      expect(data.list[0].description).toEqual(createDataResourceDto.description);
      expect(data.list[0].namespaceName).toEqual(createNamespaceDto.name);
    })
  });

  describe('Fail', () => {
    it('limit can not more than 50', async () => {
      const dto = {
        page : page,
        limit : 51,
        query : query,
        namespaceCodes : namespaceCodes,
      }
      const { statusCode, data, message} = await managementClient.listDataResources(dto);

      expect(statusCode).toEqual(602);
      expect(message).toEqual('请求第三方端点时返回错误, errmsg=page size must be greater than 0 and less than 50');
    });
  });

});
