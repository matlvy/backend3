import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
faker.locale = "es";

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

export const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.imageUrl(),
    pets: [faker.animal.dog()],
  };
};
