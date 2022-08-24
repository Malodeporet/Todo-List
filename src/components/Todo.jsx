import React, { useState } from "react";

const Todo = () => {
  //State
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter des fruits", completed: false },
    { id: 2, todo: "Coder une application", completed: false },
    { id: 3, todo: "Relancer Sogeti", completed: false },
  ]);

  // List of the Tasks to do
  const myTodos = todos.map((todo) => {
    return (
      <li className="todo_item" key={todo.id} data-testid={`todo-${todo.id}`}>
        {todo.todo}
      </li>
    );
  });

  // Render
  return (
    <div className="todo">
      <h1 className="todo_title">
        {todos.length} {todos.length !== 1 ? "Todos" : "Todo"}
      </h1>
      <div className="todo_form">
        <ul className="todo_list">{myTodos}</ul>
      </div>
    </div>
  );
};

export default Todo;
