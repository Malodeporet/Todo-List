import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import AddTodo from "./AddTodo";

const Todo = () => {
  // State
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Hooks to get data from the database
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("/todos");
      console.log(res.data);
      setTodos(res.data);
    };
    fetchTodos();
  }, []);
  console.log(todos);

  // Action of the checkbox to change the state of a Todo to completed

  const updateTodo = async (id) => {
    const res = await axios.put("/todoCompleted/" + id);
    setTodos(res.data);
    console.log(res.data);
  };

  //   useEffect(() => {
  //     // DELETE request using axios with async/await
  //     async function deletePost() {
  //         await axios.delete("/delete/" + id);
  //         setStatus('Delete successful');
  //     }

  //     deletePost();
  // }, []);

  // Delete a Todo
  // const deleteTodo = (id) => {
  //   const deleteTask = async () => {
  //     const res = await axios.delete("/delete/" + id);
  //     console.log(res.data);

  //   };
  //   deleteTask();
  // };

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
            onClick={() => updateTodo(todo._id)}
          />
        </div>
      );
    });

  // Todo completed
  const myTodosCompleted = todos
    .filter((todo) => todo.completed === true)
    .map((todo) => {
      return (
        <div key={todo._id}>
          <li className="todo_item completed">{todo.title}</li>
          {/* <button onClick={deleteTodo}>Delete</button> */}
        </div>
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
      <AddTodo />
    </div>
  );
};

export default Todo;
