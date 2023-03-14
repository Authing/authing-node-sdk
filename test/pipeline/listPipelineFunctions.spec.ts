import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listPipelineFunctions", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data, message } =
        await managementClient.listPipelineFunctions({});
      expect(statusCode).toEqual(200);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    // const { statusCode, data, message } =
    //   await managementClient.deleteDepartment({
    //   });
  });
});
