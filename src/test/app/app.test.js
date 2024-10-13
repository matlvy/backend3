import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const createNewMock = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    pets: { specie: faker.animal.dog() },
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
    //console.log(response.body);
    //console.log(doc);
    expect(response.body._id).toBeDefined();
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBe(doc.name);
    expect(response.body.email).toBe(doc.email);
    expect(response.body.pets[0].specie).toBe(doc.pets.specie);
    expect(response.statusCode).toBe(200);
  });
  /*
  test("[GET] /users", async () => {
    const response = await request(app).get("/api/mocks/mockingusers");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
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
  test("[UPDATE] /users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body[0]._id).toBeDefined();
    const docUpd = createNewMock();
    const responsePut = await request(app)
      .put(`/api/mocks/${response.body[0]._id}`)
      .send(docUpd);
    expect(response.body[0]._id).toBeDefined();
    expect(responsePut.statusCode).toBe(200);
  });
  test("[DELETE] /user/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body[0]._id).toBeDefined();
    const responseDel = await request(app).delete(
      `/api/mocks/${response.body[0]._id}`
    );
    expect(responseDel.statusCode).toBe(200);
  });

  test("[DELETE] /users/", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body[0]._id).toBeDefined();
    const responseDel = await request(app).delete("/api/mocks/");
    expect(responseDel.statusCode).toBe(200);
  });*/
});
