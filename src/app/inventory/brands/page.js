"use client"
import FormSubmitBtn from "@/components/shared/buttons/FormSubmitBtn";
import ImageField from "@/components/shared/fields/ImageField";
import InputField from "@/components/shared/fields/InputField";
import UrenAccordion from "@/components/shared/UrenAccordion";
import { useCarBrand } from "@/context/CarContext";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./brands.css"
import TableActionBtn from "@/components/shared/buttons/TableActionBtn";

const BrandsPage = () => {
  const { carBrandList, modelsList } = useCarBrand();
  const loading = false;



  // ADD CAR BRAND FORM
  const addBrandForm =(
    <form className="accordion-form-layout grid-cols-1 lg:grid-cols-3">
      {/* IMAGE FIELD */}
      <ImageField name={"brand-img"} label={"Brand Logo"} />
  
      {/* NAME FIELD */}
      <InputField
        label={"Brand Name"}
        name={"brand-name"}
        required={true}
        type={"text"}
        placeholder={"Enter Brand Name"}
      />
  
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Add New"} size={"md"}/>
    </form>
  );

  // ADD CAR MODEL FORM
  const addModelForm =(
    <form className="accordion-form-layout grid-cols-1 lg:grid-cols-4">
      {/* IMAGE FIELD */}
      <ImageField name={"model-img"} label={"Model Image"} />
  
      {/* NAME FIELD */}
      <InputField
        label={"Model Name"}
        name={"model-name"}
        required={true}
        type={"text"}
        placeholder={"Enter Model Name"}
      />
  
      {/* BRANDS LIST FIELD */}
      <fieldset className="fieldset form-group w-full">
        <label className="fieldset-legend">Brand Name <span>*</span></label>
        <select defaultValue="Pick Your Brand" className="select w-full rounded-none outline-none select-md text-sm">
          <option disabled={true}>Pick Your Brand</option>
          {carBrandList?.map((brand, index) => (
            <option key={index}>{brand.name}</option>
          ))}
        </select>
      </fieldset>
  
      {/* SUBMIT BUTTON */}
      <FormSubmitBtn loading={loading} text={"Add New"} size={"md"}/>
    </form>
  )

  return (
    <>
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {/* ADD BRANDS ACCORDION & FORM */}
        <UrenAccordion form={addBrandForm} heading={"Want to add new Brand?"}/>
        {/* ADD MODELS ACCORDION & FORM */}
        <UrenAccordion form={addModelForm} heading={"Can't find your Model?"}/>
      </div>

      {/* BRAND & MODEL LIST TABLE */}

      <table className="inventory-table w-full border-collapse">
      <thead className="table-head bg-gray-100">
        <tr>
          <th className="border">Brand Image</th>
          <th className="border">Brand</th>
          <th className="border">Model Name</th>
          <th className="border">Model Image</th>
          <th className="border">Actions</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {carBrandList?.map((brand) =>
          brand.models.map((model, index) => (
            <tr key={index}>
              {index === 0 && (
                <>
                  <td
                    rowSpan={brand.models.length}
                    className="align-middle"
                  >
                    <Image
                      src={"/images/brand/1.jpg"}
                      alt={brand.name}
                      width={250}
                      height={250}
                      className="mx-auto"
                    />
                  </td>
                  <td
                    rowSpan={brand.models.length}
                    className="item-name"
                  >
                    {brand.name}
                  </td>
                </>
              )}
              <td className="uppercase">{model}</td>
              <td>
                <Image
                  src={"/images/product/small-size/1.jpg"}
                  alt={model}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </td>
              <td className="table-btns">
                <TableActionBtn btn={<FaEdit />} btnType={"btn-warning"} title={"Edit Model"}/>
                <TableActionBtn btn={<FaTrash />} btnType={"btn-secondary"} title={"Delete Model"}/>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    </>
  );
};

export default BrandsPage;
