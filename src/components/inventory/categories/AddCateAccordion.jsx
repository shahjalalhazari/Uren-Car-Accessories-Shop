"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import InputField from "@/components/shared/fields/InputField";

const AddCateAccordion = () => {
  const [addCategory, setAddCategory] = useState(false);

  return (
    <div className="uren-transition add-cat-accordion">
      <p className="accordion-header">
        Want to add new Category?
        <span
          className="uren-transition accordion-header-action"
          onClick={() => setAddCategory(!addCategory)}
        >
          {" "}
          Click here.{" "}
          <FaAngleDown
            className={`uren-transition ${addCategory ? "rotate-180" : ""}`}
          />
        </span>
      </p>

      <div
        className={`accordion-body ${
          addCategory ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <form className="add-category-from">
          {/* IMAGE FIELD */}
          <InputField
            className={"file-input-field"}
            type={"file"}
            required={true}
            label={"Category Image"}
            name={"category-img"}
            placeholder={""}
          />

          {/* NAME FIELD */}
          <InputField
            label={"Category Name"}
            name={"category-name"}
            required={true}
            type={"text"}
            placeholder={"Enter Category Name"}
          />

          {/* SUBMIT BUTTON */}
          <input
            type="submit"
            value="Add New"
            className="submit-btn uren-transition"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCateAccordion;
