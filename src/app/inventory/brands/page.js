"use client"
import FormSubmitBtn from "@/components/shared/buttons/FormSubmitBtn";
import ImageField from "@/components/shared/fields/ImageField";
import InputField from "@/components/shared/fields/InputField";
import UrenAccordion from "@/components/shared/UrenAccordion";
import { useCarBrand } from "@/context/CarContext";

const BrandsPage = () => {
  const { carBrandList } = useCarBrand();
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
    </>
  );
};

export default BrandsPage;
