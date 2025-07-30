"use client";
import { useState } from 'react';
import FormSubmitBtn from '@/components/shared/buttons/FormSubmitBtn';
import ImageField from '@/components/shared/fields/ImageField';
import InputField from '@/components/shared/fields/InputField';
import UrenAccordion from '@/components/shared/UrenAccordion';
import { toast } from 'react-toastify';

const AddCategoryForm = () => {
  const [loading, setLoading] = useState(false);

  // HANDLER FOR ADD NEW CATEGORY.
  const handleAddCategory = async (event) => {
    event.preventDefault();
    setLoading(true);

    // GET THE FORM DATA
    const form = event.target;
    const image = form.categoryImg.files[0];
    const name = form.categoryName.value;

    try {
      // CHECK EMPTY FIELDS.
      if (!name || !image) {
        toast.error("All fields are required!");
        setLoading(false);
        return;
      }

      // CREATE NEW FORMDATA FOR CLOUDINARY AND APPEND SUBMITTED IMAGE/FILE FOR UPLOAD.
      const formData = new FormData();
      formData.append("file", image);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      // UPLOAD IMAGE TO CLOUDINARY.
      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const cloudinaryData = await cloudinaryRes.json();
      // CHECK IMAGE UPLOADED STATUS.
      if (!cloudinaryData.secure_url)
        toast.error(cloudinaryData.error.message || "Image Upload Failed!");

      // CREATE NEW CATEGORY DATA.
      const newCategory = {
        name,
        image: cloudinaryData.secure_url,
        publicId: cloudinaryData.public_id,
      };

      // SEND CATEGORY DATA TO DB WITH POST METHOD.
      const categoryRes = await fetch("/api/inventory/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });

      // GET THE RESPONSE OF POST METHOD ENDPOINT.
      const result = await categoryRes.json();

      // IF SUCCESSFULLY CATEGORY CREATED.
      if (result.success) {
        toast.success(result.message || "Category Created Successfully!");
        form.reset();
      } else {
        toast.error(
          result.message || "Something went wrong while creating category!"
        );
      }
    } catch (error) {
      // IF ANY ERROR
      toast.error("Something went wrong!", error);
    } finally {
      // STOP THE LOADING.
      setLoading(false);
    }
  };

  const AddCateForm = (
    <form
      className="accordion-form-layout grid-cols-1 lg:grid-cols-3"
      onSubmit={handleAddCategory}
    >
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
  );

  return (
    <UrenAccordion form={AddCateForm} heading={"Want to add new Category?"} />
  );
};

export default AddCategoryForm;