import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoForm = () => {
  // State
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("/todos");
    setTodos(res.data);
  };

  // Hooks to get data from the database
  useEffect(() => {
    setTodos(fetchTodos());
  }, []);

  // Action of the checkbox to change the state of a Todo to completed
  const updateTodo = async (id) => {
    const res = await axios.put("/todoCompleted/" + id);
    console.log(res);
    fetchTodos();
  };

  // Delete a Todo
  const deleteTodo = async (id) => {
    const res = await axios.delete("/delete/" + id);
    setTodos([...todos.filter((todo) => todo._id !== id)]);
    console.log(res.data);
  };

  // Function to add a new Todo that we pass in props to get it in another component
  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Render
  return (
    <div className="todo">
      <h1 className="todo_title">Todo List</h1>
      <div className="todo_form">
        <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
      <AddTodo addNewTodo={addNewTodo} />
    </div>
  );
};
export default TodoForm;
