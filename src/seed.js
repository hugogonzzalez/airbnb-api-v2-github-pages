import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./src/config/db.js";
import { Experience } from "./src/models/experience.model.js";

dotenv.config();

const sampleExperiences = [
  {
    title: "Clase magistral de paella valenciana con visita al mercado",
    city: "Valencia",
    price: 65,
    description: "Aprende los secretos para preparar una auténtica paella valenciana a fuego de leña. Incluye recorrido guiado por el Mercado Central para elegir ingredientes frescos."
  },
  {
    title: "Paseo en catamarán al atardecer con cata de vinos",
    city: "Barcelona",
    price: 85,
    description: "Disfruta de la vista panorámica del skyline de Barcelona mientras navegas por el Mediterráneo y degustas vinos locales con maridaje de tapas."
  },
  {
    title: "Tour nocturno de tapas y leyendas históricas",
    city: "Madrid",
    price: 45,
    description: "Explora los barrios más antiguos de Madrid mientras descubres historias fascinantes y pruebas las mejores tapas tradicionales en tabernas históricas."
  }
];

async function seedDatabase() {
  try {
    await connectDB();

    // Limpiar la colección previa si existe
    await Experience.deleteMany({});
    console.log("Colección de experiencias limpiada correctamente.");

    // Insertar las 3 experiencias
    const createdExperiences = await Experience.insertMany(sampleExperiences);
    console.log(`¡Éxito! Se han insertado ${createdExperiences.length} experiencias:`);
    console.log(createdExperiences);

    process.exit(0);
  } catch (error) {
    console.error("Error al ejecutar el seed:", error);
    process.exit(1);
  }
}

seedDatabase();
