const UrenModal = ({ onClose, heading, modalContent }) => {
  return (
    <div className="uren-modal-bg" onClick={onClose}>
      <div className="uren-modal">
        <button
          className="modal-close-btn btn-body"
          onClick={onClose}
          title="Close"
        >
          ✕
        </button>
        <h2 className="modal-heading">{heading}</h2>
        <>{modalContent}</>
      </div>
    </div>
  );
};
export default UrenModal;
