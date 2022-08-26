import React from "react";

function TaskModal({ title, description, closeModal }) {
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_titleCloseBtn">
          <button data-testid="closeBtn" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="modal_title">
          <h1>{title}</h1>
        </div>
        <div className="modal_description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
