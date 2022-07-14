import { managementClient } from "../client";

describe("setUserDepartments", () => {
  let userIds: string[] = [];

  beforeAll(async () => {
    const { data } = await managementClient.listUsers({
      withCustomData: true,
      withIdentities: true,
      withDepartmentIds: true,
    });
    userIds = data.list.map((x) => x.userId);
  });

  describe("Success", () => {
    // TODO: to be done
    // it("default", async () => {
    // });
  });

  describe("Fail", () => {
    it("departments is invalid", async () => {
      const { statusCode, message } = await managementClient.setUserDepartments(
        {
          userId: userIds[0],
          departments: [
            // {
            //   departmentId: "",
            //   isLeader: true,
            // },
          ],
        }
      );
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 departments 格式错误");
    });
  });
});
