import express from 'express';
import { getTodo, getTodos, addTodo, updateToCompleted, deleteTodo } from '../controllers/todo.js';

const router = express.Router();

// get all todo
router.get("/todos", getTodos)

// get a specific todo
router.get("/todo/:id", getTodo)

// add todo
router.post("/addTodo", addTodo)

// update todo to complate State
router.put("/todoCompleted/:id", updateToCompleted)

// delete a todo
router.delete("/delete/:id", deleteTodo)

export default router;