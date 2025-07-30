"use client";
import ImageField from '@/components/shared/fields/ImageField';
import InputField from '@/components/shared/fields/InputField';
import SelectFromDD from '@/components/shared/fields/SelectFromDD';
import TagInputField from '@/components/shared/fields/TagInputField';
import { useCarBrand } from '@/context/CarContext';
import { useState } from 'react';

const AddProductForm = ({categories}) => {
  const { carBrandList, modelsList, selectedBrand, handleSelectedBrand } =
    useCarBrand();

  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedBrand, setPickedBrand] = useState("");
  const [pickedModel, setPickedModel] = useState("");
  const [tags, setTags] = useState([]);

  const handlePickedCategory = (e) => {
    setPickedCategory(e.target.value);
  };

    return (
      <form className="add-product-form-layout">
        {/* Name Field */}
        <div className="md:col-span-2">
          <InputField
            label={"Product Name"}
            name={"p_name"}
            placeholder={"Product Name"}
            required={true}
            type={"text"}
          />
        </div>

        {/* Current Price Field */}
        <InputField
          label={"Price"}
          name={"price"}
          placeholder={"Current Price"}
          required={true}
          type={"number"}
        />

        {/* Old Price Field */}
        <InputField
          label={"Old Price"}
          name={"old-price"}
          placeholder={"Old Price"}
          required={false}
          type={"number"}
        />

        {/* Category Field */}
        <SelectFromDD
          label={"Select Category"}
          defaultValue={"Pick Category"}
          myList={categories}
          required={true}
          value={pickedCategory}
          onChange={handlePickedCategory}
        />

        {/* Brand Field */}
        <SelectFromDD
          label={"Select Car Brand"}
          defaultValue={"Pick Your Brand"}
          myList={carBrandList}
          required={true}
          value={selectedBrand || ""} // From context
          onChange={(e) => {
            const brand = e.target.value;
            handleSelectedBrand(brand); // Update context
            setPickedBrand(brand); // Keep local for your display if needed
            setPickedModel(""); // Reset model field when brand changes
          }}
        />

        {/* Model Field */}
        <SelectFromDD
          label={"Select Car Model"}
          defaultValue={"Pick Your Model"}
          myList={modelsList?.map((name) => ({ name }))} // convert model names to objects
          required={true}
          value={pickedModel}
          onChange={(e) => setPickedModel(e.target.value)}
        />

        {/* Manufacturing Year Field */}
        <InputField
          label={"Year or Version"}
          name={"manuf-year"}
          placeholder="Year / Version"
          required={true}
          type={"text"}
        />

        {/* Size Field */}
        <InputField
          label={"Size"}
          name={"size"}
          placeholder="Size"
          required={false}
          type={"text"}
        />

        {/* Color Field */}
        <InputField
          label={"Color"}
          name={"color"}
          placeholder="Item color"
          required={false}
          type={"text"}
        />

        {/* Tags Field */}
        <div className="md:col-span-2">
          <TagInputField label="Tags" tags={tags} setTags={setTags} />
        </div>

        {/* Main Image */}
        <ImageField name={"main-img"} label={"Main Image"} />
        {/* Image 2 */}
        <ImageField name={"img2"} label={"Image 2"} />
        {/* Image 3 */}
        <ImageField name={"img3"} label={"Image 3"} />
        {/* Image 4 */}
        <ImageField name={"img4"} label={"Image 4"} required={false} />
        {/* Image 5 */}
        <ImageField name={"img5"} label={"Image 5"} required={false} />
        {/* Image 6 */}
        <ImageField name={"img6"} label={"Image 6"} required={false} />
        {/* Image 7 */}
        <ImageField name={"img7"} label={"Image 7"} required={false} />
        {/* Image 8 */}
        <ImageField name={"img8"} label={"Image 8"} required={false} />
        {/* Image 9 */}
        <ImageField name={"img9"} label={"Image 9"} required={false} />
        {/* Image 10 */}
        <ImageField name={"img10"} label={"Image 10"} required={false} />
        {/* Image 11 */}
        <ImageField name={"img11"} label={"Image 11"} required={false} />
        {/* Image 12 */}
        <ImageField name={"img12"} label={"Image12"} required={false} />
        {/* Image 13 */}
        <ImageField name={"img13"} label={"Image 13"} required={false} />
        {/* Image 14 */}
        <ImageField name={"img14"} label={"Image 14"} required={false} />
        {/* Image 15 */}
        <ImageField name={"img15"} label={"Image 15"} required={false} />
      </form>
    );
};

export default AddProductForm;