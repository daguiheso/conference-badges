import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.css';

const Modal = (props) => {
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal-cb">
      <div className="modal-cb__container">
        <button
          onClick={props.onClose}
          className="modal-cb__close-button">
          X
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;
