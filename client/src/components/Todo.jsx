import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const Todo = () => {
  // State
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Hooks to get data from the database
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  // Action of the checkbox to change the state of a Todo to completed
  const completeTask = (id) => {
    setTodos(
      todos.map((item) => {
        if (item._id === id) {
          console.log(item.title, "Completed!");
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  // List of the Tasks to do
  const myTodos = todos
    .filter((todo) => todo.completed === false)
    .map((todo, index) => {
      return (
        <div className="todo_container" key={index}>
          <li
            className="todo_item"
            key={todo._id}
            data-testid={`todo-${todo._id}`}
          >
            {todo.title}
            <Button
              className="todo_navlink"
              closeModal={() => setOpenModal}
              title={todo.title}
              description={todo.desc}
            />
          </li>

          <input
            className="todo_checkbox"
            type="checkbox"
            data-testid={`checkbox-${todo._id}`}
            onClick={() => completeTask(todo._id)}
          />
        </div>
      );
    });

  // Todo completed
  const myTodosCompleted = todos
    .filter((todo) => todo.completed === true)
    .map((todo) => {
      return (
        <li className="todo_item completed" key={todo._id}>
          {todo.title}
        </li>
      );
    });

  // Render
  return (
    <div className="todo">
      <h1 className="todo_title">Todo List</h1>
      <div className="todo_form">
        <ul className="todo_list">{myTodos}</ul>
        <ul className="todo_list-completed">{myTodosCompleted}</ul>
      </div>
    </div>
  );
};

export default Todo;
