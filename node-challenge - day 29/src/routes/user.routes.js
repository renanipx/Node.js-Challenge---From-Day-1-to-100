const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const controller = new UserController();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints para gerenciar usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João Silva"
 *               age:
 *                 type: integer
 *                 example: 25
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post('/', controller.create);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "João Silva"
 *                   age:
 *                     type: integer
 *                     example: 25
 *                   email:
 *                     type: string
 *                     example: "joao@email.com"
 */
router.get('/', controller.list);

module.exports = router;
