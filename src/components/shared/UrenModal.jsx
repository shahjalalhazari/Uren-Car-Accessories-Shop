import React from 'react';

const UrenModal = ({onClose, heading, modalContent}) => {
    return (
      <div className="uren-modal-bg">
        <div className="uren-modal">
          {/* CLOSE BUTTON */}
          <button
            className="modal-close-btn uren-transition"
            onClick={onClose}
            title="Close"
          >
            ✕
          </button>
          {/* HEADING */}
          <h2 className="modal-heading">{heading}</h2>

          {/* CONTENT */}
          {modalContent}
        </div>
      </div>
    );
};

export default UrenModal;