import { managementClient } from "../../client";

describe('listPermissionNamespaces', () => {
    const page = 1;
    const limit = 10;
    const query = 'test666';
    const code = 'test666';

    beforeAll(async () => {
      const createDto = {
        code : code,
        name : 'test666',
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
        it("get permission namespace list successfully", async () => {
            const { statusCode, data } = await managementClient.listPermissionNamespaces({ page, limit, query });

            expect(statusCode).toEqual(200);
            expect(data.totalCount).toEqual(1);
            expect(data.list[0].code).toEqual(code);
        });
    });

    describe("Fail", () => {
      it("limit must not be greater than 50", async () => {
        const limit = 51;
        const { statusCode, message } = await managementClient.listPermissionNamespaces({ page, limit, query });

          expect(statusCode).toEqual(400);
          expect(message).toEqual('limit must not be greater than 50');
      });
    });
});
