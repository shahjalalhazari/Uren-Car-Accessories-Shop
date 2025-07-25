"use client"
import FormSubmitBtn from "@/components/shared/buttons/FormSubmitBtn";
import ImageField from "@/components/shared/fields/ImageField";
import InputField from "@/components/shared/fields/InputField";
import UrenModal from "@/components/shared/UrenModal";
import { useState } from "react";

const UpdateFormModal = ({categories, onClose}) => {
  const [loading, setLoading] = useState(false);


  // CATEGORY UPDATE FORM
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
        defaultValue={categories?.name}
        className="text-dark-gray"
      />
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Update"} size={"md"} />
    </form>
  );

  return <>
    <UrenModal
      onClose={onClose}
      heading={"Edit Category"}
      modalContent={CategoryUpdateForm}
    />
  </>;
};

export default UpdateFormModal;