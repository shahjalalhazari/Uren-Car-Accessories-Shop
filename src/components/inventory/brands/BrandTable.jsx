"use client";
import TableActionBtn from "@/components/shared/buttons/TableActionBtn";
import { useCarBrand } from "@/context/CarContext";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";


const BrandTable = () => {
  const { carBrandList } = useCarBrand();

    return (
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
            brand.models?.map((model, index) => (
              <tr key={index}>
                {index === 0 && (
                  <>
                    <td rowSpan={brand.models.length} className="align-middle">
                      <Image
                        src={"/images/brand/1.jpg"}
                        alt={brand.name}
                        width={250}
                        height={250}
                        className="mx-auto"
                      />
                    </td>
                    <td rowSpan={brand.models.length} className="item-name">
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
                  <TableActionBtn
                    btn={<FaEdit />}
                    btnType={"btn-warning"}
                    title={"Edit Model"}
                  />
                  <TableActionBtn
                    btn={<FaTrash />}
                    btnType={"btn-secondary"}
                    title={"Delete Model"}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
};

export default BrandTable;