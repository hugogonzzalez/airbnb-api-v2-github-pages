# Airbnb Experience API

API REST mínima con Express + MongoDB/Mongoose, organizada por capas:

- `controllers`: HTTP/request-response.
- `services`: reglas de negocio y validación.
- `repositories`: acceso a MongoDB.
- `models`: esquema Mongoose.
- `routes`: endpoints y documentación JSDoc para OpenAPI.
- `config`: conexión a MongoDB y configuración de Swagger.

## Campos de una experience

- `title`: string, obligatorio.
- `city`: string, obligatorio.
- `price`: number, obligatorio.
- `description`: string, opcional.

MongoDB añade `_id`, `createdAt` y `updatedAt`.

## Documentación de la API (Swagger UI)

Una vez iniciada la aplicación, la documentación interactiva OpenAPI/Swagger está disponible en:
- **URL**: `http://localhost:3000/api/docs`

## Ejecutar

```bash
npm install
cp .env.example .env
npm run dev
```

### Poblar la base de datos (Seed)

```bash
npm run seed
```

## Endpoints

| Método | Endpoint | Acción |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/docs` | Documentación Swagger UI |
| GET | `/api/experiences` | Listar |
| GET | `/api/experiences/:id` | Obtener una |
| POST | `/api/experiences` | Crear |
| PATCH | `/api/experiences/:id` | Actualizar |
| DELETE | `/api/experiences/:id` | Eliminar |

### Ejemplo POST

```json
{
  "title": "Clase de paella",
  "city": "Valencia",
  "price": 45,
  "description": "Cocina una paella valenciana con un local."
}
```
