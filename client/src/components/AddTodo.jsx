import axios from "axios";
import React, { useState } from "react";

const AddTodo = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/addTodo", { title, desc });
      addNewTodo(res.data);
      setOpenModal(false);
      setTitle("");
      setDesc("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseClick = () => {
    setOpenModal(false);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <button className="addTodo_openModal" onClick={() => setOpenModal(true)}>
        Ajouter une Todo
      </button>
      {openModal && (
        <form className="addTodo" onSubmit={handleSubmit}>
          <div className="addTodo_container">
            <div className="addTodo_form">
              <label className="addTodo_label">Ajouter Todo</label>
              <div className="addTodo_titleCloseBtn">
                <button onClick={() => handleCloseClick()}>X</button>
              </div>
              <input
                className="addTodo_input"
                id="name"
                placeholder="Title *"
                label="Titre"
                value={title}
                onChange={handleTitle}
                required
              />
              <textarea
                className="addTodo_input"
                id="description"
                placeholder="Description"
                label="Description"
                value={desc}
                onChange={handleDescription}
              />
              <input className="addTodo_btn" type="submit" value="Ajouter" />
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AddTodo;
