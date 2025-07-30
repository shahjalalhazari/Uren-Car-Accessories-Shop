"use client"
import { useState } from 'react';
import UrenModal from '@/components/shared/UrenModal';
import ImageField from '@/components/shared/fields/ImageField';
import InputField from '@/components/shared/fields/InputField';
import FormSubmitBtn from '@/components/shared/buttons/FormSubmitBtn';

const UpdateCategoryForm = ({ category, onClose }) => {
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
        defaultValue={category?.name}
        className="text-dark-gray"
      />
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Update"} size={"md"} />
    </form>
  );
    return (
      <UrenModal onClose={onClose} heading={"Edit Category"} modalContent={CategoryUpdateForm}/>
    );
};

export default UpdateCategoryForm;