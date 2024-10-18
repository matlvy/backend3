import app from "../../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

const createMock = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    pets: { specie: faker.animal.dog() },
  };
};
const createUserRegister = () => {
  return {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@mail.com",
    password: "1234",
  };
};
const createUserLogin = () => {
  return {
    email: "johndoe@mail.com",
    password: "1234",
  };
};

describe("TestAPI", () => {
  beforeAll(async () => {
    await mongoose.connection.collections["users"].drop();
  });
  test("[POST] /users", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
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
    const response = await request(app).get("/api/users/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
  });

  test("[GET] /users/{id}", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
    const responseGetId = await request(app).get(
      `/api/users/${response.body._id}`
    );
    expect(response.body._id).toBeDefined();
    //console.log(response.body);
    expect(responseGetId.statusCode).toBe(200);
  });
  test("[GET] /pets", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
    const responseGetId = await request(app).get("/api/users/pets");
    //console.log(response.body[0].pets);
    expect(response.body.pets).toBeDefined();

    expect(responseGetId.statusCode).toBe(200);
  });
  test("[UPDATE] /users/{id}", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
    expect(response.body._id).toBeDefined();
    const docUpd = createMock();
    const responsePut = await request(app)
      .put(`/api/users/${response.body._id}`)
      .send(docUpd);
    expect(response.body._id).toBeDefined();
    expect(responsePut.statusCode).toBe(200);
  });
  test("[DELETE] /user/{id}", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
    expect(response.body._id).toBeDefined();
    const responseDel = await request(app).delete(
      `/api/users/${response.body._id}`
    );
    expect(responseDel.statusCode).toBe(200);
  });

  test("[DELETE] /users/", async () => {
    const doc = createMock();
    const response = await request(app).post("/api/users/").send(doc);
    expect(response.body._id).toBeDefined();
    const responseDel = await request(app).delete("/api/users/");
    expect(responseDel.statusCode).toBe(200);
  });
  test("[POST] /USER REGISTRATION", async () => {
    const docUserRegister = createUserRegister();
    const response = await request(app)
      .post("/api/auth/register")
      .send(docUserRegister);
    //console.log(response.body);
    //console.log(docUserRegister);
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("User created");
  });
  test("[POST] /USER LOGIN", async () => {
    const docUserLogin = createUserLogin();
    const response = await request(app)
      .post("/api/auth/login")
      .send(docUserLogin);
    //console.log(response.body);
    //console.log(docUserLogin);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Successful login");
  });
});
