import { CreatePermissionNamespacesBatchItemDto } from "../../../src/models/CreatePermissionNamespacesBatchItemDto";
import { managementClient } from "../../client";

describe('createPermissionNamespaceBatch', () => {
  const code = 'test';
  const name = 'test';
  const description = 'test';

  beforeAll(async () => {});

  afterAll(async () => {
    await managementClient.deletePermissionNamespacesBatch({ codes: [code] });
  });

  describe('Success', () => {
    it('batch create namespace successfully', async () => {
      const list = [{
        code : code,
        name : name,
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, data } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(200);
      expect(data.success).toEqual(true);
   });
  });

  describe('Fail', () => {
    it("can't use permission namespace code 'default'", async () => {
      const list = [{
        code : 'default',
        name : name,
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, message } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(409);
      expect(message).toEqual("can't use built-in namespace code 'default' and 'system'");
    });
  });

  describe('Fail', () => {
    it("can't use permission namespace code 'system'", async () => {
      const list = [{
        code : 'system',
        name : name,
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, message } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(409);
      expect(message).toEqual("can't use built-in namespace code 'default' and 'system'");
    });
  });

  describe('Fail', () => {
    it('namespace code can not be empty', async () => {
      const list = [{
        code : '',
        name : name,
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, message } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(400);
      expect(message).toEqual('code should not be empty');
    });
  });

  describe('Fail', () => {
    it('invalid namespace code', async () => {
      const list = [{
        code : '好',
        name : name,
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, message } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${list[0].code}`);
    });
  });

  describe('Fail', () => {
    it('namespace name can not be empty', async () => {
      const list = [{
        code : code,
        name : '',
        description : description,
      }] as Array<CreatePermissionNamespacesBatchItemDto>;
      const { statusCode, message } = await managementClient.createPermissionNamespacesBatch({ list });

      expect(statusCode).toEqual(400);
      expect(message).toEqual('name should not be empty');
    });
  });
});
