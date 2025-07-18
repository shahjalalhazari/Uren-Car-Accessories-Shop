"use client";
import { useState } from 'react';
import FormSubmitBtn from '@/components/shared/buttons/FormSubmitBtn';
import ImageField from '@/components/shared/fields/ImageField';
import InputField from '@/components/shared/fields/InputField';
import UrenAccordion from '@/components/shared/UrenAccordion';
import { toast } from 'react-toastify';

const AddCategoryForm = () => {
  const [loading, setLoading] = useState(false);

  const handleAddCategory = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.target;
    const image = form.categoryImg.files[0];
    const name = form.categoryName.value;

    if (!name || !image) {
      toast.error("All fields are required!");
      setLoading(false);
      return;
    };

    const formDate = new FormData();
    formDate.append("file", image);
    formDate.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formDate,
        }
      );

      const cloudinaryData = await cloudinaryRes.json();
      console.log("cloudinary Date", cloudinaryData);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!")
    } finally {
      setLoading(false);
    }

  }

  const AddCateForm = (
    <form className="accordion-form-layout grid-cols-1 lg:grid-cols-3" onSubmit={handleAddCategory}>
      {/* IMAGE FIELD */}
      <ImageField name={"categoryImg"} label={"Category Image"} />
      {/* NAME FIELD */}
      <InputField
        label={"Category Name"}
        name={"categoryName"}
        required={true}
        type={"text"}
        placeholder={"Enter Category Name"}
      />
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Add New"} size={"md"} />
    </form>
  )

  return (
    <UrenAccordion form={AddCateForm} heading={"Want to add new Category?"} />
  );
};

export default AddCategoryForm;