import React, { useState } from "react";

const Todo = () => {
  // State
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter des fruits", completed: false },
    { id: 2, todo: "Coder une application", completed: false },
    { id: 3, todo: "Relancer Sogeti", completed: false },
  ]);

  // Action of the checkbox to change the state of a Todo to completed
  const completeTask = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          console.log(item.id, "Completed!");
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
    .map((todo) => {
      return (
        <li className="todo_item" key={todo.id} data-testid={`todo-${todo.id}`}>
          {todo.todo}
          <input
            type="checkbox"
            data-testid={`checkbox-${todo.id}`}
            onClick={() => completeTask(todo.id)}
          />
        </li>
      );
    });

  // Todo completed
  const myTodosCompleted = todos
    .filter((todo) => todo.completed === true)
    .map((todo) => {
      return (
        <li className="todo_item completed" key={todo.id}>
          {todo.todo}
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
