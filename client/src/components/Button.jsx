import React, { useState } from "react";
import TaskModal from "./TaskModal";

function Button(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="infosButton" onClick={() => setOpenModal(true)}></div>
      {openModal && (
        <TaskModal
          title={props.title}
          description={props.description}
          closeModal={setOpenModal}
        />
      )}
    </>
  );
}

export default Button;
