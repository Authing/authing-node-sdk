import { managementClient } from "../../client";

describe('checkPermissionsNamespaceExists', () => {
    const checkDto = {
      code : 'test',
      name : 'test',
    };

    beforeAll(async () => {
      const createDto = {
        code : checkDto.code,
        name : checkDto.name,
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      const deleteDto = {
        code : checkDto.code,
      };
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe('Success', () => {
      const checkDto = {
        code : 'test222',
        name : 'test222',
      };
        it('permission namespace is valid', async () => {
            const { statusCode, data } = await managementClient.checkPermissionNamespaceExists(checkDto);

            expect(statusCode).toEqual(200);
            expect(data.isValid).toEqual(true);
        });
    });

    describe('Fail', () => {
        it('permission namespace is not valid', async () => {
            const { statusCode, data } = await managementClient.checkPermissionNamespaceExists(checkDto);

            expect(statusCode).toEqual(200);
            expect(data.isValid).toEqual(false);
        });
    });
});
