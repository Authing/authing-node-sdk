import exp from "constants";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateRole", () => {
  const namespace = "default";
  const description = "这是描述";
  const list = [
    { code: generateRandomString(), namespace, description },
    { code: generateRandomString(), namespace, description },
    { code: generateRandomString(), namespace, description },
    { code: generateRandomString(), namespace, description },
    { code: generateRandomString(), namespace, description },
  ];

  beforeAll(async () => {
    await managementClient.createRolesBatch({
      list,
    });
  });

  //析构
  afterAll(async () => {
    const codeList = list.map((item) => {
      return item.code;
    });
    //将用户改回来manager
    await managementClient.deleteRolesBatch({
      codeList,
    });
  });

  describe("Success", () => {
    it("with full basic role", async () => {
      const newCode = generateRandomString();
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        code: list[0].code,
        newCode,
        namespace,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(role.success).toEqual(true);
    });
  });

  describe("Fail", () => {
    it("role newCode is invalid", async () => {
      const newCode = "额! ";

      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        code: list[1].code,
        newCode,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid role code: ${newCode}`);
    });
  });

  describe("Fail", () => {
    it("role newCode must be not empty", async () => {
      const newCode = "";

      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        code: list[2].code,
        newCode,
        namespace,
        description,
      });
      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("role newCode must be not blank", async () => {
      const newCode = " ";
      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        code: list[3].code,
        newCode,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid role code: ${newCode}`);
    });
  });

  describe("Fail", () => {
    it("role newCode must be less than 64 characters", async () => {
      const newCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const {
        statusCode,
        data: role,
        message,
      } = await managementClient.updateRole({
        code: list[4].code,
        newCode,
        namespace,
        description,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 newCode 格式错误");
    });
  });
});
