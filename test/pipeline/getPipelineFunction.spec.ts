import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("getPipelineFunction", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("default", async () => {
      const {
        data: { list },
      } = await managementClient.listPipelineFunctions({});
      const { statusCode, data, message } =
        await managementClient.getPipelineFunction({
          funcId: list[0].funcId,
        });
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
