import app from "../src/server";

import request from "supertest";
import { Workflow } from "../src/controllers/types";
import { WorkflowFixture } from "./fixtures/workflow";

beforeAll(async () => {
  await WorkflowFixture.load();
});

describe("Workflow", () => {
  test("", async () => {
    const input: Workflow = {
      name: "Pipette Apparatus",
      version: 1,
      scope: "IT",
      apparatus: ["Burrette", "Pippette"],
      definitions: [
        {
          name: "Pipette",
          description: "used for measuring",
        },
      ],
      procedures: [
        {
          step: "Boil Rice",
        },
        { step: "Cook", substeps: ["wash", "filter"] },
      ],
    };

    const res = await request(app)
      .post("/api/v1/workflows")
      .send(input)
      .expect(201);

    expect(res.body.status).toEqual("success");
    expect(res.body.message).toEqual("workflow saved successfully");

    expect(res.body.data).toHaveProperty("name");
    expect(res.body.data).toHaveProperty("scope");
    expect(res.body.data).toHaveProperty("version");
    expect(res.body.data).toHaveProperty("definitions");
    expect(JSON.parse(res.body.data.definitions)).toStrictEqual(
      input.definitions
    );
    expect(JSON.parse(res.body.data.apparatus)).toStrictEqual(input.apparatus);
    expect(JSON.parse(res.body.data.procedures)).toStrictEqual(
      input.procedures
    );
  });

  test("Should return all workflows", async () => {
    const res = await request(app).get("/api/v1/workflows");

    expect(res.body.status).toEqual("success");
    expect(res.body.message).toEqual("workflows retrieved successfully");

    for (let datum of res.body.data) {
      expect(datum).toHaveProperty("name");
      expect(datum).toHaveProperty("scope");
      expect(datum).toHaveProperty("version");
      expect(datum).toHaveProperty("definitions");
      expect(datum).toHaveProperty("apparatus");
      expect(datum).toHaveProperty("procedures");
    }
  });
});

afterAll(async () => {
  await WorkflowFixture.destroy();
  app.close();
});
