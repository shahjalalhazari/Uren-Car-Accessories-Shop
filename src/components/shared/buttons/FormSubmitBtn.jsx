import React from 'react';

const FormSubmitBtn = ({ loading, text, size }) => {
  return (
    <button
      type="submit"
      className="submit-btn uren-transition"
      disabled={loading}
    >
      {loading ? (
        <span className={`loading loading-infinity loading-${size}`}></span>
      ) : (
        text
      )}
    </button>
  );
};

export default FormSubmitBtn;