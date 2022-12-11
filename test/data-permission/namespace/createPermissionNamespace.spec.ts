import { managementClient } from "../../client";

describe('createPermissionNamespace', () => {
  const createDto = {
    code : 'test',
    name : 'test',
    description : 'test',
  }

  beforeAll(async () => {});

  describe("Success", () => {
    it('create namespace successfully', async () => {
    const { statusCode, message, data } = await managementClient.createPermissionNamespace(createDto);

    expect(statusCode).toEqual(200);
    expect(data.code).toEqual(createDto.code);
    expect(data.name).toEqual(createDto.name);
    expect(data.description).toEqual(createDto.description)
   });
  });

  afterAll(async () => {
    const deleteDto = {
      code : createDto.code,
    };
    await managementClient.deletePermissionNamespace(deleteDto);
  });

  describe('Fail', () => {
    it("can't use permission namespace code 'default'", async () => {
      const dto = {
        code : 'default',
        name : 'test',
      };
      const { statusCode, message } = await managementClient.createPermissionNamespace(dto);

      expect(statusCode).toEqual(403);
      expect(message).toEqual("can't use permission namespace code 'default' or 'system'");
    });
  });

  describe('Fail', () => {
    it("can't use permission namespace code 'system'", async () => {
      const dto = {
        code : 'system',
        name : 'test',
      };
      const { statusCode, message } = await managementClient.createPermissionNamespace(dto);

      expect(statusCode).toEqual(403);
      expect(message).toEqual("can't use permission namespace code 'default' or 'system'");
    });
  });

  describe('Fail', () => {
    it('namespace code can not be empty', async () => {
      const dto = {
        code : '',
        name : 'test',
      };
      const { statusCode, message } = await managementClient.createPermissionNamespace(dto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('code should not be empty');
    });
  });

  describe('Fail', () => {
    it('invalid namespace code', async () => {
      const dto = {
        code : '好',
        name : 'test',
      };
      const { statusCode, message } = await managementClient.createPermissionNamespace(dto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${dto.code}`);
    });
  });

  describe('Fail', () => {
    it('namespace name can not be empty', async () => {
      const dto = {
        code : 'test',
        name : '',
      };
      const { statusCode, message } = await managementClient.createPermissionNamespace(dto);

      expect(statusCode).toEqual(400);
      expect(message).toEqual('name should not be empty');
    });
  });
});
