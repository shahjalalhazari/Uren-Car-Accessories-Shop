// "use client"

import AddBrandAccordion from "@/components/inventory/brands/AddBrandAccordion";
import AddModelAccordion from "@/components/inventory/brands/AddModelAccordion";
import Image from "next/image";

const BrandsPage = () => {
  // const [addBrand, setAddBrand] = useState(false);
  // const [addCarModel, setAddCarModel] = useState(false);

  return (
    <div>
      <AddBrandAccordion/>
      <AddModelAccordion/>
      Brands & Models List
    </div>
  );
};

export default BrandsPage;