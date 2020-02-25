import React from 'react';
import '../assets/styles/components/DeleteBadgeModal.css';

function DeleteBadgeModal(props) {
  return (
    <div className="delete-badge-modal d-flex align-items-center flex-column justify-content-center">
      <h1>Are You Sure?</h1>
      <p>You are about to delete this badge.</p>

      <div>
        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
          Delete
        </button>
        <button onClick={props.onClose} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBadgeModal;
