import { MetadataModel } from "../../src";
import {
  Conjunction,
  FieldType,
  ModelFieldInfo,
  ModelInfo,
  ParentKey,
  ReserveKey,
  ValueFormat,
} from "../../src/models";
import { metadataManagementClient } from "../client";

interface Row {
  unitTest: string;
  user: string[];
}

const modelInfo = {} as ModelInfo;
let model: MetadataModel;
const unitTestFieldInfo = {} as ModelFieldInfo;
const userFieldInfo = {} as ModelFieldInfo;
const row = {} as Row & ReserveKey;

// UEBA
describe("Metadata", () => {
  // 上传用户行为
  it("Create Model", async () => {
    const { statusCode, data } = await metadataManagementClient.createModel({
      name: "test-model",
      parentKey: ParentKey.品牌化,
    });
    Object.assign(modelInfo, data);
    expect(statusCode).toEqual(200);
    model = metadataManagementClient.getModel(modelInfo.id);
  });

  it("Get Model", async () => {
    const res = await metadataManagementClient.getModelInfo(modelInfo.id);
    expect(res.statusCode).toEqual(200);
    expect(res.data.name).toEqual(modelInfo.name);
  });

  it("Update Model", async () => {
    const newName = "test-model-updated";
    const { statusCode, data } = await metadataManagementClient.updateModel(
      modelInfo.id,
      {
        name: newName,
      }
    );
    expect(statusCode).toEqual(200);
    expect(data.name).toEqual(newName);
    modelInfo.name = data.name;
  });

  it("All Model", async () => {
    const res = await metadataManagementClient.getAllModelInfo();
    expect(res.statusCode).toEqual(200);
  });

  it("Create Field", async () => {
    const res = await model.createField({
      name: "单元测试",
      key: "unitTest",
      type: FieldType.Text,
      show: true,
      editable: true,
      require: true,
      maxLength: 50,
      unique: true,
      fuzzySearch: true,
      format: ValueFormat.None,
    });
    expect(res.statusCode).toEqual(200);
    Object.assign(unitTestFieldInfo, res.data);
  });

  it("Create Relation Field", async () => {
    const res = await model.createField({
      name: "用户",
      key: "user",
      type: FieldType.Relation,
      show: true,
      editable: true,
      require: true,
      maxLength: 50,
      unique: true,
      format: ValueFormat.None,
      relationMultiple: true,
      relationShowKey: "username",
      relationType: "user",
    });
    expect(res.statusCode).toEqual(200);
    Object.assign(userFieldInfo, res.data);
  });

  it("All Field", async () => {
    const res = await model.getAllField();
    expect(res.statusCode).toEqual(200);
    for (const item of res.data) {
      if (item.id === unitTestFieldInfo.id) {
        expect(item.name).toEqual("单元测试");
        return;
      }
    }
    throw new Error("字段创建失败");
  });

  it("Update Field", async () => {
    const newName = "更新单元测试";
    const res = await model.updateField(unitTestFieldInfo.id, {
      name: newName,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.data.name).toEqual(newName);
  });

  it("Create Row", async () => {
    const user = ["6421671ac7695fe4e806269e"];
    const unitTest = "测试用例";
    const res = await model.createRow<Row>({
      user,
      unitTest,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.data.unitTest).toEqual(unitTest);
    expect(res.data.user[0]).toEqual(user[0]);
    Object.assign(row, res.data);
  });

  it("Get Row", async () => {
    const res = await model.getRow<Row>(row.id);
    expect(res.statusCode).toEqual(200);
    expect(res.data.unitTest).toEqual(row.unitTest);
  });

  it("Get Row Relation", async () => {
    const res = await model.getRowRelation(userFieldInfo.id, row.id);
    expect(res.statusCode).toEqual(200);
    expect(res.data.totalCount).toEqual(1);
    expect(res.data.list[0]).toEqual(row.user[0]);
  });

  it("Create Row Relation", async () => {
    const res = await model.createRowRelation(
      userFieldInfo.id,
      row.id,
      "642164533014849679c57d35"
    );
    expect(res.statusCode).toEqual(200);
  });

  it("Get Row Relation", async () => {
    const res = await model.getRowRelation(userFieldInfo.id, row.id);
    expect(res.statusCode).toEqual(200);
    expect(res.data.totalCount).toEqual(2);
  });

  it("Remove Row Relation", async () => {
    const res = await model.removeRowRelation(
      userFieldInfo.id,
      row.id,
      "642164533014849679c57d35"
    );
    expect(res.statusCode).toEqual(200);
  });

  it("Get Row Relation", async () => {
    const res = await model.getRowRelation(userFieldInfo.id, row.id);
    expect(res.statusCode).toEqual(200);
    expect(res.data.totalCount).toEqual(1);
  });

  it("Update Row", async () => {
    const newUnitTest = "更新测试用例";
    const res = await model.updateRow<Row>(unitTestFieldInfo.id, {
      unitTest: newUnitTest,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.data.unitTest).toEqual(newUnitTest);
  });

  it("Filter Row", async () => {
    const res = await model.filter<Row>({
      query: {
        keywords: "试用",
        conjunction: Conjunction.AND,
        conditions: [],
      },
    });
    expect(res.statusCode).toEqual(200);
    expect(res.data.totalCount).toEqual(1);
    expect(res.data.list[0].unitTest).toEqual(row.unitTest);
  });

  it("Remove Row", async () => {
    const res = await model.removeRow([row.id]);
    expect(res.statusCode).toEqual(200);
  });

  it("Remove Field", async () => {
    const res = await model.removeField(unitTestFieldInfo.id);
    expect(res.statusCode).toEqual(200);
  });

  afterAll(async () => {
    if (modelInfo.id) {
      await metadataManagementClient.removeModel(modelInfo.id);
    }
  });
});
