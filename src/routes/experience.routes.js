import { Router } from "express";
import { experienceController } from "../controllers/experience.controller.js";

const router = Router();

/**
 * @openapi
 * /api/experiences:
 *   get:
 *     summary: Obtener todas las experiencias
 *     tags:
 *       - Experiences
 *     responses:
 *       200:
 *         description: Lista de experiencias ordenada por fecha de creación descendente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/", experienceController.list);

/**
 * @openapi
 * /api/experiences/{id}:
 *   get:
 *     summary: Obtener una experiencia por ID
 *     tags:
 *       - Experiences
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de MongoDB de la experiencia
 *     responses:
 *       200:
 *         description: Experiencia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: ID de experiencia no válido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/:id", experienceController.getById);

/**
 * @openapi
 * /api/experiences:
 *   post:
 *     summary: Crear una nueva experiencia
 *     tags:
 *       - Experiences
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateExperienceInput'
 *     responses:
 *       201:
 *         description: Experiencia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/", experienceController.create);

/**
 * @openapi
 * /api/experiences/{id}:
 *   patch:
 *     summary: Actualizar una experiencia existente
 *     tags:
 *       - Experiences
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de MongoDB de la experiencia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateExperienceInput'
 *     responses:
 *       200:
 *         description: Experiencia actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: ID no válido o datos incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.patch("/:id", experienceController.update);

/**
 * @openapi
 * /api/experiences/{id}:
 *   delete:
 *     summary: Eliminar una experiencia
 *     tags:
 *       - Experiences
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de MongoDB de la experiencia
 *     responses:
 *       204:
 *         description: Experiencia eliminada correctamente (sin contenido)
 *       400:
 *         description: ID de experiencia no válido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Experiencia no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.delete("/:id", experienceController.remove);

export default router;
