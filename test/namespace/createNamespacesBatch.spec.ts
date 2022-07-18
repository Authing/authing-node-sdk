import {
  CreateNamespaceDto,
  CreateNamespacesBatchItemDto,
} from "../../src/models";
import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createNamespacesBatch", () => {
  beforeAll(async () => {});
  const name = "权限分组名字";

  describe("Success", () => {
    it("with full basic namespace", async () => {
      const code = generateRandomString();

      const list = [{ code, name }] as Array<CreateNamespacesBatchItemDto>;
      const {
        statusCode,
        data: IsSuccessDto,
        message,
      } = await managementClient.createNamespacesBatch({ list });

      expect(statusCode).toEqual(200);
      expect(IsSuccessDto.success).toEqual(true);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    const { statusCode, data, message } =
      await managementClient.deleteNamespacesBatch({
        codeList: ["1229505432"],
      });
  });

  describe("Fail", () => {
    it("namespace code is invalid", async () => {
      const code = "额！";

      const list = [{ code, name }] as Array<CreateNamespacesBatchItemDto>;
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespacesBatch({
        list,
      });
      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("namespace code must be not empty", async () => {
      const code = "";

      const list = [{ code, name }] as Array<CreateNamespacesBatchItemDto>;
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespacesBatch({
        list,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`namespace name must not be empty`);
    });
  });

  describe("Fail", () => {
    it("namespace code must be not blank", async () => {
      const code = " ";

      const list = [{ code, name }] as Array<CreateNamespacesBatchItemDto>;
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespacesBatch({
        list,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${code}`);
    });
  });

  describe("Fail", () => {
    it("namespace code must be less than 64 characters", async () => {
      const code =
        "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";

      const list = [{ code, name }] as Array<CreateNamespacesBatchItemDto>;
      const {
        statusCode,
        data: namespace,
        message,
      } = await managementClient.createNamespacesBatch({
        list,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(`invalid namespace code: ${code}`);
    });
  });
});
