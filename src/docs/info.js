export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend III API",
      version: "1.0.0",
      description:
        "Platforms: Node.js, Express, MongoDB, Swagger, SuperTest-Jest, Docker.",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
