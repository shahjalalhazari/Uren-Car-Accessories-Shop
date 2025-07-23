"use client"
import { useState } from "react";
import FormSubmitBtn from "../buttons/FormSubmitBtn";
import ImageField from "../fields/ImageField";
import InputField from "../fields/InputField";
import ModalContent from "./ModalContent";




const UrenModal = ({category, onClose, heading}) => {
  const [loading, setLoading] = useState(false);

  const CategoryUpdateForm = (
    <form className="accordion-form-layout grid-cols-1 lg:grid-cols-3">
      {/* IMAGE FIELD */}
      <ImageField
        name={"categoryImg"}
        label={"Category Image"}
        required={false}
      />
      {/* NAME FIELD */}
      <InputField
        label={"Category Name"}
        name={"categoryName"}
        required={false}
        type={"text"}
        defaultValue={category.name}
        className="text-dark-gray"
      />
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Update"} size={"md"} />
    </form>
  );

  return (
    <div className="uren-modal-bg">
      <div className="uren-modal">
        <button
          className="modal-close-btn btn-body"
          onClick={onClose}
          title="Close"
        >
          ✕
        </button>
        <h2 className="modal-heading">{heading}</h2>
        <ModalContent form={CategoryUpdateForm} />
      </div>
    </div>
  );
};

export default UrenModal;