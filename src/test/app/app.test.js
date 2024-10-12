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
  /*
  test("[GET] /users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const responseGetId = await request(app).get(`/news/${response.body._id}`);
    expect(responseGetId.statusCode).toBe(200);
    const idFaker = "507f191e810c19729de860ea";
    const getIdFail = await request(app).get(`/news/${idFaker}`);
    const responseGetFail = getIdFail.body.msg;
    expect(getIdFail.statusCode).toBe(404);
    expect(responseGetFail).toEqual(
      `No se encontró el id ${idFaker} en la base de datos.`
    );
  });
  test("[UPDATE]/users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const docUpdated = createNewMock();
    const responsePut = await request(app)
      .put(`/news/${response.body._id}`)
      .send(docUpdated);
    expect(responsePut.body._id).toBeDefined();
    expect(responsePut.statusCode).toBe(200);
  });
  test("[DELETE]/users/{id}", async () => {
    const doc = createNewMock();
    const response = await request(app).post("/news").send(doc);
    expect(response.body._id).toBeDefined();
    const responseDelete = await request(app).delete(
      `/news/id/${response.body._id}`
    );
    expect(responseDelete.statusCode).toBe(200);
    const responseGetById = await request(app).get(
      `/news/${response.body._id}`
    );
    //res.status(404).json({msg: `No se encontró el id ${id} en la base de datos.`});
    expect(responseGetById.statusCode).toBe(404);
    expect(responseGetById.body.msg).toEqual(
      `No se encontró el id ${response.body._id} en la base de datos.`
    );
  });*/
});
