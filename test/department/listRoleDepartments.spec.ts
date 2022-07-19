import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listRoleDepartments", () => {
  const code = generateRandomString();
  const namespace = "default";
  const description = "这是描述";

  const parentDepartmentId = "62d63a952a220b5349960b5d"; // 默认为 nodes 表中 root角色池 id
  const organizationCode = "iv2qZBWrMO3F5SNj4VTchbP0t66KO0"; // 默认为 nodes 表中 root角色池 code
  const name = generateRandomString(10);
  const isVirtualNode = false;
  const departmentCode = generateRandomString();
  let departmentId: string;

  beforeAll(async () => {
    await managementClient.createRole({
      code,
      namespace,
      description,
    });
    const { data } = await managementClient.createDepartment({
      parentDepartmentId,
      organizationCode,
      name,
      code: departmentCode,
      isVirtualNode,
    });
    console.log(data);
    departmentId = data.departmentId;
  });

  // 析构;
  afterAll(async () => {
    //删除角色
    await managementClient.deleteDepartment({
      departmentId,
      organizationCode,
    });

    await managementClient.deleteRolesBatch({ codeList: [code] });
  });

  describe("Success", () => {
    it("with full basic department", async () => {
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("role organizationCode is invalid", async () => {
      const code = "额！ ";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("角色不存在");
    });
  });

  describe("Fail", () => {
    it("role organizationCode must be not empty", async () => {
      const code = "";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });

  describe("Fail", () => {
    it("role organizationCode must be not blank", async () => {
      const code = " ";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });

      expect(statusCode).toEqual(404);
      expect(message).toEqual("角色不存在");
    });
  });

  describe("Fail", () => {
    it("role organizationCode must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.listRoleDepartments({
        code,
        namespace,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
