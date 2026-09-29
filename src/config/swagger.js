import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Airbnb Experience API",
      version: "1.0.0",
      description: "API REST para gestión de experiencias de Airbnb",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo"
      }
    ],
    components: {
      schemas: {
        Experience: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "65f1a2b3c4d5e6f7a8b9c0d1"
            },
            title: {
              type: "string",
              maxLength: 120,
              example: "Clase magistral de paella valenciana con visita al mercado"
            },
            city: {
              type: "string",
              maxLength: 80,
              example: "Valencia"
            },
            price: {
              type: "number",
              minimum: 0,
              example: 65
            },
            description: {
              type: "string",
              maxLength: 500,
              example: "Aprende los secretos para preparar una auténtica paella valenciana a fuego de leña."
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-09-17T08:00:00.000Z"
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-09-17T08:00:00.000Z"
            }
          }
        },
        CreateExperienceInput: {
          type: "object",
          required: ["title", "city", "price"],
          properties: {
            title: {
              type: "string",
              maxLength: 120,
              example: "Paseo en catamarán al atardecer"
            },
            city: {
              type: "string",
              maxLength: 80,
              example: "Barcelona"
            },
            price: {
              type: "number",
              minimum: 0,
              example: 85
            },
            description: {
              type: "string",
              maxLength: 500,
              example: "Disfruta de la vista panorámica del skyline mientras navegas por el Mediterráneo."
            }
          }
        },
        UpdateExperienceInput: {
          type: "object",
          properties: {
            title: {
              type: "string",
              maxLength: 120,
              example: "Paseo en catamarán al atardecer con cata de vinos"
            },
            city: {
              type: "string",
              maxLength: 80,
              example: "Barcelona"
            },
            price: {
              type: "number",
              minimum: 0,
              example: 90
            },
            description: {
              type: "string",
              maxLength: 500,
              example: "Disfruta de la vista panorámica del skyline de Barcelona mientras navegas."
            }
          }
        },
        ErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Experience not found"
            }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);
