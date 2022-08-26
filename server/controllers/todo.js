import Todo from "../models/Todo.js"

export const getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo)
    } catch (err) {
        next(err)
    }
};

export const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find(req.params.id);
        res.status(200).json(todos)
    } catch (err) {
        next(err)
    }
};