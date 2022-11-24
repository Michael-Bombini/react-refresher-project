import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const deleteHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* 
            Le parentesi non vanno aggiunte nell'onclick perché sennò
            la funzione verrà richiamata quando il codice viene eseguito
        */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalOpen && <Backdrop onCloseModal={closeModalHandler} />}
  
    </div>
  );
};

export default Todo;
