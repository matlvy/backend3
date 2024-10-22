<div align="center">

# Backend III API

<table class="no-border">
  <tr>
    <td><a href="https://github.com/aregtech/areg-sdk/actions/workflows/msbuild.yml" alt="MS Build"><img src="https://amsilabs.com/wp-content/uploads/2021/01/MongoDB-1.jpg" alt="MongoDB" style="width: 150px;"/></a></td>
    <td><a href="https://expressjs.com/es/"><img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="Express JS" style="width: 150px;"/></a></td>
        <td><a href="https://github.com/aregtech/areg-sdk/actions/workflows/codeql-analysis.yml"><img src="https://nodejs.org/static/images/logo.svg" alt="NodeJS" style="width: 150px;"/></a></td>
  </tr>
</table>
</div>

**Contents**📌

- [Getting Started](#getting-started)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)

## Getting Started📌

**Backend III API Project** is an API developed for the Backend III course in Coderhouse.

## About The Project📌

- Backend Server arquitecture development based on layers, routers, controllers, services, validations and persistance structure.
- Persistance throught usage of Mongo Atlas databases for the Production environment.
- Authentication system based on JWT
- Password encryption based on Bcrypt
- User register and login system
- User registered validation system

## Built With📌

- NodeJS
- Express JS
- MongoDB
- Mongoose
- Dotenv
- Bcrypt
- Json Web Token
- Cookie-Parser
- Morgan
- Passport
- Faker
- SuperTest
- Jest
- Swagger
- Docker

## Installation📌

```
GIT https://github.com/matlvy/backend3

DOCKER HUB

SWAGGER


```

### Scripts:📌

```

npm install
npm start
npm run dev

```

## Usage📌

### Credentials

A new user will be able to register, login and access the profile:

```
user: test@mail.com
password: 1234
```

### `/api/auth`

| Endpoint             | Http Req | Description           | Auth | Body                                                                                           |
| -------------------- | -------- | --------------------- | ---- | ---------------------------------------------------------------------------------------------- |
| `/api/auth/register` | POST     | User register         | Yes  | `{ "email": "johndoe@mail.com", "password" : "1234", "first_name": John, "last_name": "Doe" }` |
| `/api/auth/login`    | POST     | User login            | Yes  | `{ "email": "johndoe@mail.com", "password" : "1234" }`                                         |
| `/api/auth/current`  | GET      | Logged user's profile | Yes  | -                                                                                              |

### `/api/users`

| Endpoint                  | Http Req | Description          |     | Body                                                                                           |
| ------------------------- | -------- | -------------------- | --- | ---------------------------------------------------------------------------------------------- |
| `/api/users/`             | POST     | Create a user        |     | `{ "email": "johndoe@mail.com", "password" : "1234", "first_name": John, "last_name": "Doe" }` |
| `/api/users/:userId`      | GET      | Get a user by ID     |     | -                                                                                              |
| `/api/users/:userId`      | DELETE   | Delete user by ID    |     | -                                                                                              |
| `/api/users/:userId`      | PUT      | Edit user            |     | `{ "email": "johndoe@mail.com", "first_name": John, "last_name": "Doe"  }`                     |
| `/api/users/`             | DELETE   | Delete all the users |     | `                                                                                              |
| `/api/users/`             | GET      | Get all the users    |     |                                                                                                |
| `/api/users/:userId/pets` | GET      | Get the pets by user |     |                                                                                                |
