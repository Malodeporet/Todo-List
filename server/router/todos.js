import express from 'express';
import { getTodo, getTodos } from '../controllers/todo.js';

const router = express.Router();

// get all todo
router.get("/todos", getTodos)

// get a specific todo
router.get("/todo/:id", getTodo)

export default router;