import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const TaskModal = () => {
  const [todo, setTodo] = useState([""]);

  // We use the params hooks to retrieve the id in the route
  const params = useParams();
  console.log(params.id);

  const fetchTodo = async () => {
    const res = await axios.get("/todo/" + params.id);
    setTodo(res.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_titleCloseBtn">
          <Link to={"/"} data-testid="closeBtn">
            x
          </Link>
        </div>
        <div className="modal_title">
          <h1>{todo.title}</h1>
        </div>
        <div className="modal_description">
          <p>{todo.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
