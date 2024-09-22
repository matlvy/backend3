import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
faker.locale = "es";

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

export const generateUser = (cant = 5) => {
  let pets = [];
  for (let i = 0; i <= cant; i++) {
    pets.push(generatePet());
  }
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    pets,
  };
};
export const generatePet = () => {
  return {
    specie: faker.animal.dog(),
  };
};
