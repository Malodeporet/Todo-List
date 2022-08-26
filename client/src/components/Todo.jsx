import React from "react";
import { Link } from "react-router-dom";

function Todo({ todos, updateTodo, deleteTodo }) {
  return (
    <>
      <ul className="todo_list">
        {todos.length > 0 &&
          todos
            .filter((todo) => todo.completed === false)
            .map((todo, index) => (
              <div className="todo_container" key={index}>
                <Link
                  to={`/todo/${todo._id}`}
                  className="todo_item"
                  key={todo._id}
                  data-testid={`todo-${todo._id}`}
                >
                  {todo.title}
                </Link>
                <input
                  className="todo_checkbox"
                  type="checkbox"
                  data-testid={`checkbox-${todo._id}`}
                  onClick={() => updateTodo(todo._id)}
                />
              </div>
            ))}
      </ul>
      <ul className="todo_list-completed">
        {todos.length > 0 &&
          todos
            .filter((todo) => todo.completed === true)
            .map((todo, index) => (
              <div key={index}>
                <li className="todo_item completed">{todo.title}</li>
                <button
                  className="todo_btnDelete"
                  onClick={() => deleteTodo(todo._id)}
                >
                  delete
                </button>
              </div>
            ))}
      </ul>
    </>
  );
}

export default Todo;
