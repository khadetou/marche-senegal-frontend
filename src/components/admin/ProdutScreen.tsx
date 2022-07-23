import React from "react";
import { BsCheck, BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import Image from "next/image";

const ProductScreen = () => {
  const theader = [
    "ID",
    "Image",
    "Nom",
    "Prix",
    "Catégorie",
    "Marque",
    "Action",
  ];

  const products = [
    {
      name: "Pomme",
      prix: "$50.00",
      category: "Fruits",
      marque: "fruits",
    },
    {
      name: "Pomme",
      prix: "$50.00",
      category: "Fruits",
      marque: "fruits",
    },
    {
      name: "Pomme",
      prix: "$50.00",
      category: "Fruits",
      marque: "fruits",
    },
    {
      name: "Pomme",
      prix: "$50.00",
      category: "Fruits",
      marque: "fruits",
    },
    {
      name: "Pomme",
      prix: "$50.00",
      category: "Fruits",
      marque: "fruits",
    },
  ];
  return (
    <section className="mb-36">
      <div className="containers">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[25px] text-dark-gray ">Produits</h1>
          <button className="text-white capitalize bg-primary text-sm font-medium  h-10 rounded-md px-3">
            Ajouter un produit
          </button>
        </div>
        <div className="overflow-auto rounded-lg shadow-md">
          <table className=" w-full ">
            <thead className="bg-gray-50 border-b-2 table-auto border-gray-200">
              <tr>
                {theader.map((item, idx) => (
                  <th
                    key={idx}
                    className="p-4 text-center  text-sm font-semibold tracking-wide text-[#2b2b2b]"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(({ category, marque, name, prix }) => (
                <tr className="bg-white border-b border-gray-200 even:bg-gray-50">
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>#idsfzefzefzef</div>
                  </td>

                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="text-xs flex items-center justify-center w-full h-full text-white">
                      <Image
                        src="https://res.cloudinary.com/didh3wbru/image/upload/v1658244260/Ecommerce/Images/Products/product-14_oaysxe.jpg"
                        width={42}
                        height={42}
                      />
                    </div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>{name}</div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>{prix}</div>
                  </td>
                  <td className="p-4 min-w-[161px] text-center text-sm  text-[#8f8f8f]">
                    <div className="font-medium">{category}</div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="flex justify-center items-center">
                      <div>{marque}</div>
                    </div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="w-full h-full flex justify-around items-center">
                      <TbEdit className="text-white text-[25px] bg-orange-500 p-1 rounded-md" />
                      <BsTrash className="text-white text-[25px] bg-red-500 p-1 rounded-md" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
