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

export const addTodo = async (req, res, next) => {
    const newTodo = new Todo({ title: req.body.title, ...req.body });
    try {
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    } catch (err) {
        next(err);
    }
};

export const updateToCompleted = async (req, res, next) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                $set: { completed: true }
            },
            { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (error) {
        next(err);
    }
};

export const deleteTodo = async (req, res, next) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("The todo has been deleted.");
    } catch (err) {
        next(err);
    }
};
