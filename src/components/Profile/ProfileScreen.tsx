import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";

import { IoClose } from "react-icons/io5";

const ProfileScreen = () => {
  const theader = [
    "ID",
    "Image",
    "Date",
    "Totale",
    "Payé",
    "Delivré",
    "Action",
  ];

  const users = [
    {
      date: "2022-06-1",
      total: "$578.00",
    },
    {
      date: "2022-06-1",
      total: "$578.00",
    },
    {
      date: "2022-06-1",
      total: "$578.00",
    },
    {
      date: "2022-06-1",
      total: "$578.00",
    },
    {
      date: "2022-06-1",
      total: "$578.00",
    },
  ];

  return (
    <section className="mb-28">
      <div className="containers">
        <button className="mb-8 text-white font-bold text-sm uppercase bg-primary hover:bg-secondary px-7 py-3 rounded-md">
          Modifier Mon Profile
        </button>

        <h1 className="text-[25px] text-dark-gray mb-10">Mes Commandes</h1>
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
              {users.map(({ date, total }) => (
                <tr className="bg-white border-b border-gray-200 even:bg-gray-50">
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>#idsfzefzefzef</div>
                  </td>

                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="text-xs py-2 text-white w-[46px]">
                      <Image
                        src="https://res.cloudinary.com/didh3wbru/image/upload/v1658328125/Ecommerce/Images/Products/product-14-2_mn4tmo.jpg"
                        width={42}
                        height={42}
                      />
                    </div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>{date}</div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div>{total}</div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  ">
                    <div className="flex justify-center items-center">
                      <IoClose className="!text-white bg-red-600  text-[25px] rounded-md" />
                    </div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="flex justify-center items-center">
                      <BsCheck className="text-white bg-green-600 text-[25px]  rounded-md" />
                    </div>
                  </td>
                  <td className="p-4 min-w-[94px] text-center text-sm  text-[#8f8f8f]">
                    <div className="w-full h-full flex justify-around items-center bg-white shadow-md text-dark-gray text-md py-2 font-bold">
                      Détails
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

export default ProfileScreen;
