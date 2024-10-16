import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const createNewMock = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    pets: { specie: faker.animal.dog() },
  };
};
const createTestUserRegistration = () => {
  return {
    first_name: "Mr.",
    last_name: "Test",
    email: "test@test.com",
    password: "1234",
  };
};
const createTestUserLogin = () => {
  return {
    email: "test@test.com",
    password: "1234",
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
    expect(response.body.first_name).toBe(doc.first_name);
    expect(response.body.last_name).toBe(doc.last_name);
    expect(response.body.email).toBe(doc.email);
    expect(response.body.pets[0].specie).toBe(doc.pets.specie);
    expect(response.statusCode).toBe(200);
  });

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
      `/api/mocks/mockingusers/${response.body._id}`
    );
    expect(response.body._id).toBeDefined();
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
    expect(response.body.pets).toBeDefined();

    expect(responseGetId.statusCode).toBe(200);
  });
  test("[UPDATE] /users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body._id).toBeDefined();
    const docUpd = createNewMock();
    const responsePut = await request(app)
      .put(`/api/mocks/${response.body._id}`)
      .send(docUpd);
    expect(response.body._id).toBeDefined();
    expect(responsePut.statusCode).toBe(200);
  });
  test("[DELETE] /user/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body._id).toBeDefined();
    const responseDel = await request(app).delete(
      `/api/mocks/${response.body._id}`
    );
    expect(responseDel.statusCode).toBe(200);
  });

  test("[DELETE] /users/", async () => {
    const doc = createNewMock();
    const response = await request(app)
      .post("/api/mocks/generateData")
      .send(doc);
    expect(response.body._id).toBeDefined();
    const responseDel = await request(app).delete("/api/mocks/");
    expect(responseDel.statusCode).toBe(200);
  });
  test("[POST] /USER REGISTRATION", async () => {
    const docTestRegister = createTestUserRegistration();
    const response = await request(app)
      .post("/api/auth/register")
      .send(docTestRegister);
    //console.log(response.body);
    //console.log(docTest);
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("A new user has been created");
  });
  test("[POST] /USER LOGIN", async () => {
    const docTestLogin = createTestUserLogin();
    const response = await request(app)
      .post("/api/auth/login")
      .send(docTestLogin);
    //console.log(response.body);
    //console.log(docTest);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Successful login");
  });
  /*
  test("[GET] /CURRENT USER", async () => {
    await mongoose.connection.collections["users"].drop();
    const docTestRegister = createTestUserRegistration();
    const docTestLogin = createTestUserLogin();
    const response = await request(app)
      .post("/api/auth/register", "/api/auth/login")
      .send(docTestRegister, docTestLogin);
    const responseGetId = await request(app).get("/api/auth/current");
    console.log(responseGetId.body);

    expect(responseGetId.statusCode).toBe(200);
    expect(responseGetId.body.message).toBe("Logged user");
  });
  */
});