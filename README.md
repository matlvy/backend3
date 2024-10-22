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
- [Documentation](#documentation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Contact me](#contact-me)

## Getting Started📌

**Backend III API Project** is an API developed for the Backend III Coderhouse course.

## About the Project📌

- Backend Server arquitecture development based on layers, routers, controllers, services, validations and persistance structure.
- Persistance through usage of Mongo Atlas databases for the Production environment.
- Authentication system based on JWT
- Password encryption based on Bcrypt
- User register and login system
- User registered validation system

## Built with📌

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

GitHub

```
https://github.com/matlvy/backend3
```

DockerHub

```
https://hub.docker.com/r/mattlevyprg/backend3
```

## Documentation📌

Swagger:

Access the API's documentation in:

```
http://localhost:8081/docs/
```

## Scripts📌

- Run the Start script: npm start
  This command will start the aplication in the Production environment.

- Run the Development script: npm run dev
  This command will start the aplication in the Development environment.

- Run the Test script in Windows OS: npm run test
  This command will run several tests, such as the authentication and mocking users aplication.

- Run the Test script in Linux OS: npm run test:linux
  This command will run several tests, such as the authentication and mocking users aplication.

- To access the aplication locally:

```
http://localhost:8081`
```

## Usage📌

### Credentials

A new user will be able to register, login and access the profile:

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

## Contact me

Matias Levy

```
www.linkedin.com/in/matias-levy-990884a7
```

mattlevyprg@gmail.com
