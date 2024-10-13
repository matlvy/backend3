import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const createNewMock = () => {
  return {
    users: {
      name: faker.name.findName(),
      email: faker.internet.email(),
      pets: { specie: faker.animal.dog() },
    },
  };
};

describe("TestAPI", () => {
  beforeAll(async () => {
    await mongoose.connection.collections["users"].drop();
  });
  test("[POST] /users", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    //console.log(response);
    expect(response._id).toBe(doc._id);
    expect(response.name).toBe(doc.name);
    expect(response.email).toBe(doc.email);
    expect(response.specie).toBe(doc.specie);
    expect(response.body.body).toEqual(doc.body);
    expect(response.statusCode).toBe(200);
  });

  test("[GET] /users", async () => {
    const response = await request(app).get("/api/mocks/mockingusers");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(50);
    const dateResponse = response.body[0].date;
  });

  test("[GET] /users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    const responseGetId = await request(app).get(
      `/api/mocks/mockingusers/${response.body[0]._id}`
    );
    expect(response.body[0]._id).toBeDefined();
    //console.log(response.body);
    expect(responseGetId.statusCode).toBe(200);
  });
  test("[GET] /pets", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    const responseGetId = await request(app).get(
      "/api/mocks/mockingusers/pets"
    );
    //console.log(response.body[0].pets);
    expect(response.body[0].pets).toBeDefined();

    expect(responseGetId.statusCode).toBe(200);
  });
});
