import { CreateNamespaceDto } from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateNamespace", () => {
  const name = "权限分组名字";
  const list = [
    { code: generateRandomString(), name },
    { code: generateRandomString(), name },
    { code: generateRandomString(), name },
    { code: generateRandomString(), name },
    { code: generateRandomString(), name },
  ] as Array<CreateNamespaceDto>;
  const newCode = generateRandomString();

  beforeAll(async () => {
    const {
      statusCode,
      data: namespace,
      message,
    } = await managementClient.createNamespacesBatch({
      list,
    });

    expect(statusCode).toEqual(200);
  });

  // 析构;
  afterAll(async () => {
    list.map(async (item) => {
      await managementClient.deleteNamespace({
        code: item.code,
      });
    });
  });

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code: list[0].code,
        name,
        newCode,
      });
      expect(statusCode).toEqual(200);
      expect(namespace.code).toEqual(newCode);
    });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const newCode = "额！";
      const {
        statusCode,
        apiCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code: list[1].code,
        name,
        newCode,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${newCode}`);
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code: list[2].code,
        name,
      });

      expect(statusCode).toEqual(200);
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const newCode = " ";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code: list[3].code,
        name,
        newCode,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${newCode}`);
    });
  });

  describe("Fail", () => {
    it("namespace code must be less than 64 characters", async () => {
      const newCode =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.updateNamespace({
        code: list[4].code,
        name,
        newCode,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 newCode 格式错误");
    });
  });
});
