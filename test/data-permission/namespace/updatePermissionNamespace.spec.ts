import { managementClient } from "../../client";

describe('updatePermissionsNamespace', () => {
    const updateDto = {
      code : 'test',
      newCode : 'test1',
      name : 'test',
      description : 'test1',
    };

    beforeAll(async () => {
      const createDto = {
        code : updateDto.code,
        name : updateDto.name,
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      const deleteDto = {
        code : updateDto.newCode,
      };
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe('Success', () => {
        it('update permission namespace successfully', async () => {
            const { statusCode, data } = await managementClient.updatePermissionNamespace(updateDto);

            expect(statusCode).toEqual(200);
            expect(data.code).toEqual(updateDto.newCode);
            expect(data.name).toEqual(updateDto.name);
            expect(data.description).toEqual(updateDto.description);
        });
    });

    describe('Fail', () => {
      it('permission namespace code can not be empty', async () => {
          const updateDto = {
            code : '',
            newCode : 'test1',
            name : 'test',
            description : 'test1',
          };
          const { statusCode, message } = await managementClient.updatePermissionNamespace(updateDto);

          expect(statusCode).toEqual(400);
          expect(message).toEqual('code should not be empty');
      });
    });

    describe('Fail', () => {
      it('permission namespace new code already exists', async () => {
          const updateDto = {
            code : '好',
            newCode : 'test1',
            name : 'test',
            description : 'test1',
          };
          const { statusCode, message } = await managementClient.updatePermissionNamespace(updateDto);

          expect(statusCode).toEqual(409);
          expect(message).toEqual(`namespace with code ${updateDto.newCode} already exists.`);
      });
    });

    describe('Fail', () => {
      it('permission namespace new code is invalid', async () => {
          const updateDto = {
            code : '好',
            newCode : 'test',
            name : 'test',
            description : 'test1',
          };
          const { statusCode, message } = await managementClient.updatePermissionNamespace(updateDto);

          expect(statusCode).toEqual(404);
          expect(message).toEqual('namespace not found');
      });
    });
});
