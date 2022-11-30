import { managementClient } from "../../client";

describe('deletePermissionsNamespaceBatch', () => {
    const codes = ['test'];

    beforeAll(async () => {
      const createDto = {
        code : codes[0],
        name : 'test',
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      await managementClient.deletePermissionNamespacesBatch({codes});
    });

    describe("Success", () => {
        it("delete permission namespace batch successfully", async () => {
            const { statusCode, data } = await managementClient.deletePermissionNamespacesBatch( { codes } );

            expect(statusCode).toEqual(200);
            expect(data.success).toEqual(true);
        });
    });

    describe("Fail", () => {
      it("permission namespace code can not be empty", async () => {
          const { statusCode, message } = await managementClient.deletePermissionNamespacesBatch({ codes : [''] });

          expect(statusCode).toEqual(404);
          expect(message).toEqual('权限空间不存在');
      });
    });
});
