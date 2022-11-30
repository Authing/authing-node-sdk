import { managementClient } from "../../client";

describe('listPermissionNamespaceRoles', () => {
    const page = 1;
    const limit = 10;
    const query = 'test';
    const code = 'test';

    const roleDto = {
      code : 'role',
      name : 'test',
      namespace : code,
      description : 'test',
    };

    beforeAll(async () => {
      const createDto = {
        code : code,
        name : 'test',
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
      await managementClient.createRole(roleDto);
    });

    afterAll(async () => {
      const deleteDto = {
        code : code,
      };
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe('Success', () => {
        it('get permission namespace roles successfully', async () => {
            const { statusCode, data } = await managementClient.listPermissionNamespaceRoles({ page, limit, code});

            expect(statusCode).toEqual(200);
            expect(data.totalCount).toEqual(1);
            expect(data.list[0].code).toEqual(roleDto.code);
            expect(data.list[0].name).toEqual(roleDto.name);
            expect(data.list[0].description).toEqual(roleDto.description);
            expect(data.list[0].namespace).toEqual(roleDto.namespace);
        });
    });

    describe('Fail', () => {
      it('limit must not be greater than 50', async () => {
        const limit = 51;
        const { statusCode, message } = await managementClient.listPermissionNamespaceRoles({ page, limit, code});

          expect(statusCode).toEqual(400);
          expect(message).toEqual('limit must not be greater than 50');
      });
    });

    describe('Fail', () => {
      it('namespace code can not be empty', async () => {
        const code = '';
        const { statusCode, message } = await managementClient.listPermissionNamespaceRoles({ page, limit, code});

          expect(statusCode).toEqual(400);
          expect(message).toEqual('code should not be empty,code must be longer than or equal to 1 characters');
      });
    });
});
