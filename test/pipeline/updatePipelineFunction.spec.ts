import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updatePipelineFunction", () => {
  let funcId: string;

  beforeAll(async () => {
    const { statusCode, data, message } =
      await managementClient.createPipelineFunction({
        funcName: "每周日凌晨 3-6 点系统维护禁止注册/登录",
        funcDescription: "每周日凌晨 3-6 点系统维护禁止注册/登录。",
        scene: "PRE_REGISTER",
        sourceCode:
          "async function pipe(user, context, callback) {\n  const date = new Date();\n  const d = date.getDay();\n  const n = date.getHours();\n  // 每周日凌晨 3-6 点禁止注册\n  if (d === 0 && (3 <= n && n <= 6)) {\n    return callback(new Error('系统维护中，暂时停止注册！'));\n  }\n  callback(null, user, context)\n}",
        isAsynchronous: false,
        timeout: 3,
        terminateOnTimeout: false,
        enabled: false,
      });
    funcId = data.funcId;
  });

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data, message } =
        await managementClient.updatePipelineFunction({
          funcId,
          funcName: "每周日凌晨 3-6 点系统维护禁止注册/登录",
          funcDescription: "每周日凌晨 3-6 点系统维护禁止注册/登录。",
          scene: "PRE_REGISTER",
          sourceCode:
            "async function pipe(user, context, callback) {\n  const date = new Date();\n  const d = date.getDay();\n  const n = date.getHours();\n  // 每周日凌晨 3-6 点禁止注册\n  if (d === 0 && (3 <= n && n <= 6)) {\n    return callback(new Error('系统维护中，暂时停止注册！'));\n  }\n  callback(null, user, context)\n}",
          isAsynchronous: false,
          timeout: 3,
          terminateOnTimeout: false,
          enabled: false,
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

  describe("Fail", () => {
    it("funcId must be not empty", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.updatePipelineFunction({
        timeout: 3,
      });
      expect(statusCode).toEqual(400);
    });
  });
});
