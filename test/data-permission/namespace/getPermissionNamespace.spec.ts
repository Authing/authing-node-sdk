import { managementClient } from "../../client";

describe('getPermissionsNamespace', () => {
    const getDto = {
      code : 'test',
    };

    beforeAll(async () => {
      const createDto = {
        code : getDto.code,
        name : 'test',
        description : 'test',
      };
      await managementClient.createPermissionNamespace(createDto);
    });

    afterAll(async () => {
      const deleteDto = {
        code : getDto.code,
      };
      await managementClient.deletePermissionNamespace(deleteDto);
    });

    describe("Success", () => {
        it("get permission namespace successfully", async () => {
            const { statusCode, data } = await managementClient.getPermissionNamespace(getDto);

            expect(statusCode).toEqual(200);
            expect(data.code).toEqual(getDto.code);
        });
    });

    describe("Fail", () => {
      it("permission namespace code can not be empty", async () => {
          const dto = {
            code : '',
          }
          const { statusCode, message } = await managementClient.getPermissionNamespace(dto);

          expect(statusCode).toEqual(400);
          expect(message).toEqual('code should not be empty');
      });
    });
});
