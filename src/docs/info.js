export const info = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend3",
      version: "1.0.0",
      description: "API Backend3",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./src/docs/*.yml"],
};
