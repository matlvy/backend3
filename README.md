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

**Tabla de contenidos**

- [Introducción](#introducción)
- [Características del proyecto Backend](#características-del-proyecto-backend)
- [Tecnologías utilizadas Backend](#tecnologías-utilizadas-backend)
- [Flujo del usuario](#flujo-del-usuario)
- [Instalación](#instalación)
  - [Backend](#levantar-el-backend)
  - [Uso](#uso)
  - [api/auth](#apiauth)
  - [api/users](#apiusers)

## Introducción📌

**Backend III API Project** es una API realizada como proyecto final para el curso de Programación Backend III de Coderhouse.

## Características del proyecto Backend📌

- Desarrollo de la arquitectura del servidor en base a capas definidas, con capa de ruteo, controladores, servicios, validaciones y capa de persistencia.
- Persistencia mediante uso de bases de datos con Mongo Atlas para el ambiente de producción.
- Sistema de autenticación basado en JWT
- Encriptación de contraseñas mediante Bcrypt
- Sistema de registro y login de usuarios
- Verificación de cuenta de usuario registrado
- Ruteo para el listado de users, así como su agregado a la base de datos, edición y eliminación

## Tecnologías utilizadas Backend📌

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

### Credenciales

Un nuevo usuario podra registrarse, o bien loguearse mediante las siguientes credenciales:

```
user: test@mail.com
password: 1234
```

## Instalación📌

```
git clone https://github.com/matlvy/backend3

```

### Levantar el backend:

```
cd backend
npm install
npm run dev
npm start

```

## Uso📌

A continuación se listan los endpoint correspondientes, junto con una breve descripción, y en caso de corresponder, un ejemplo del body que reciben. También se indica en la columna "Auth", si la ruta debe ser authorizada por JWT antes de llegar al controlador.

### `/api/auth`

| Endpoint    | Http Req | Description                            | Auth | Body                                                                                                    |
| ----------- | -------- | -------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| `/register` | POST     | Registrar nuevo usuario                | No   | `{ "email": "testing@mail.com", "password" : "12345678", "phone": 11236856546, "username": "testing" }` |
| `/login`    | POST     | Loguear usuario registrado             | No   | `{ "email": "testing@mail.com", "password" : "12345678" }`                                              |
| `/all`      | GET      | Obtener todos los usuarios             | No   | -                                                                                                       |
| `/:userId`  | DELETE   | Eliminar un usuario                    | No   | -                                                                                                       |
| `/`         | GET      | Authorizar un usuario con Bearer Token | Sí   | -                                                                                                       |

### `/api/users`

| Endpoint              | Http Req | Description                                | Auth | Body                                                   |
| --------------------- | -------- | ------------------------------------------ | ---- | ------------------------------------------------------ |
| `/create/:userId`     | GET      | Crear un carrito                           | Sí   | -                                                      |
| `/:userId`            | GET      | Obtener carrito de un usuario              | Sí   | -                                                      |
| `/remove/:userId`     | PUT      | Eliminar todos los productos de un carrito | Sí   | -                                                      |
| `/:userId`            | PUT      | Agregar un producto al carrito             | Sí   | `{ "_id": "644ca048b68b415727b1fc2e", "quantity": 1 }` |
| `/:userId/:productId` | PUT      | Actualizar o remover un producto           | Sí   | `{ "quantity": 3 }`                                    |
| `/:userId`            | DELETE   | Eliminar el carrito                        | Sí   | -                                                      |
