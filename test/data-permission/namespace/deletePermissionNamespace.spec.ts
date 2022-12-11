import { managementClient } from "../../client";

describe('deletePermissionsNamespace', () => {
    const deleteDto = {
      code : 'test',
    };

    beforeAll(async () => {
      const createDto = {
        code : deleteDto.code,
        name : 'test',
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe("Success", () => {
        it("delete permission namespace successfully", async () => {
            const { statusCode, data } = await managementClient.deletePermissionNamespace(deleteDto);

            expect(statusCode).toEqual(200);
            expect(data.success).toEqual(true);
        });
    });

    describe("Fail", () => {
      it("permission namespace code can not be empty", async () => {
          const dto = {
            code : '',
          }
          const { statusCode, message } = await managementClient.deletePermissionNamespace(dto);

          expect(statusCode).toEqual(400);
          expect(message).toEqual('code should not be empty');
      });
    });
});
