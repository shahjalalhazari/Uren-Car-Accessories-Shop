"use client";
import InputField from "@/components/shared/fields/InputField";
import "./add-products.css";
import { useState } from "react";

const AddProductPage = () => {

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form className="grid grid-cols-2 gap-6">
				<InputField label={"Name"} name={"name"} placeholder={"Product Name"} required={true} type={"text"} />
				<InputField label={"Price"} name={"price"} placeholder={"Current Price"} required={true} type={"text"} />
				<InputField label={"Old Price"} name={"old-price"} placeholder={"Old Price"} required={false} type={"text"} />
      </form>
    </div>
  );
};

export default AddProductPage;
