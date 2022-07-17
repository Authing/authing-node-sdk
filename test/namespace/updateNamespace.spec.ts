import { CreateNamespaceDto } from "../../src/models";
import { managementClient } from "../client";

describe("updateNamespace", () => {
  beforeAll(async () => {
    const code = "1229505432";
    const name = "权限分组名字";
    const {
      statusCode,
      data: namespace,
      message,
    } = await managementClient.createNamespace({
      code,
      name,
    });

    expect(statusCode).toEqual(200);
    expect(namespace.code).toEqual(code);
    expect(namespace.name).toEqual(name);
  });

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const code = "my-new-namespace";
      const name = "权限分组名字";
      const newCode = "1229505432";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code,
        name,
        newCode,
      });

      expect(statusCode).toEqual(200);
      expect(namespace.code).toEqual(newCode);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.updateNamespace({
        code: "1229505432",
        newCode: "my-new-namespace",
      });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const code = "1229505432";
      const name = "这是描述";
      const newCode = "额！";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code,
        name,
        newCode,
      });
      expect(statusCode).toEqual(499);
      expect(message).toEqual("分组唯一标识符格式不正确！");
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "1229505432";
      const name = "这是描述";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code,
        name,
      });

      console.log(statusCode);
      console.log(namespace);
      console.log(message);

      expect(statusCode).toEqual(200);
      expect(namespace.code).toEqual(code);
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const code = "1229505432";
      const name = "这是描述";
      const newCode = " ";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code,
        name,
        newCode,
      });

      expect(statusCode).toEqual(499);
      expect(message).toEqual("分组唯一标识符格式不正确！");
    });
  });

  describe("Fail", () => {
    it("namespace code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const name = "这是描述";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code,
        name,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 code 格式错误");
    });
  });
});
