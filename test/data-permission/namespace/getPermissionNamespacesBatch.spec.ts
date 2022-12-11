import { managementClient } from "../../client";

describe('getPermissionsNamespaceBatch', () => {
    const code = 'test';

    beforeAll(async () => {
      const createDto = {
        code : code,
        name : 'test',
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      const deleteDto = {
        code : code,
      };
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe("Success", () => {
        it("get permission namespace successfully", async () => {
            const { statusCode, data } = await managementClient.getPermissionNamespacesBatch({ codes: [code] });

            expect(statusCode).toEqual(200);
            expect(data[0].code).toEqual(code);
        });
    });

    describe("Fail", () => {
      it("permission namespace code can not be empty", async () => {

          const { statusCode, message } = await managementClient.getPermissionNamespacesBatch({ codes: [''] });

          expect(statusCode).toEqual(404);
          expect(message).toEqual('有不存在的权限空间');
      });
    });
});
