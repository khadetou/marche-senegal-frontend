import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const OrderScreen = () => {
  const router = useRouter();
  return (
    <section className="mb-10 mt-3">
      <div className="containers">
        <div className="flex my-3 justify-around border-b pb-3">
          <Link href="/login">
            <button
              className={`${
                router.pathname === "/order/placeorder"
                  ? "!text-dark-gray"
                  : "text-gray-400"
              } text-normal `}
            >
              Se Connecter
            </button>
          </Link>
          <Link href="/cart/shipping">
            <button
              className={`${
                router.pathname === "/order/placeorder"
                  ? "!text-dark-gray"
                  : "text-gray-400"
              } text-normal `}
            >
              Livraison
            </button>
          </Link>
          <Link href="/order/placeorder">
            <button
              className={`${
                router.pathname === "/order/placeorder"
                  ? "!text-dark-gray"
                  : "text-gray-400"
              } text-normal `}
            >
              Finalisez La Commande
            </button>
          </Link>
        </div>
        <h1 className="text-[25px] font-normal mb-12 uppercase ">
          COMMANDE N°:{" "}
          <span className="text-primary">#fzaifjazefpofeafefef</span>
        </h1>
        <div className="flex justify-between  flex-col md:flex-row">
          <div className="max-w-[970px] mr-3 w-full">
            <div className="w-full">
              <h1 className="text-xl font-normal text-black mb-4 uppercase">
                Livraison
              </h1>
              <div className="w-full overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300 pb-6">
                      <th className="text-sm pb-8 font-semibold">Nom</th>
                      <th className="text-sm pb-8 font-semibold">Email</th>
                      <th className="text-sm pb-8 font-semibold">Ville</th>
                      <th className="text-sm pb-8 font-semibold">Address</th>
                      <th className="text-sm pb-8 font-semibold">Livré</th>
                      <th className="text-sm pb-8 font-semibold">Payé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="text-sm py-8 px-1 min-w-[164px] text-dark-gray">
                        Khadetou Dianifabé
                      </td>
                      <td className="text-sm min-w-[185px] py-8 px-1 text-dark-gray">
                        khadetou96@gmail.com
                      </td>
                      <td className="text-sm  py-8 px-1 text-center text-dark-gray">
                        Castor
                      </td>
                      <td className="text-sm py-8 min-w-[189px] px-1 text-dark-gray">
                        39 Castors Dakar Derklé
                      </td>
                      <td className="w-5 py-8 px-1">
                        <div className="text-primary font-medium text-sm flex justify-center bg-[#5fff023e] min-w-[112px] rounded-md px-2  items-center py-1">
                          Livré
                        </div>
                      </td>
                      <td className="w-5 py-8 px-1">
                        <div className="text-red-600 font-medium text-sm flex justify-center bg-[#ff56023e] min-w-[112px] rounded-md px-2  py-1">
                          Non Payé
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full my-5">
              <h1 className="text-xl font-normal text-black mt-14 mb-4 uppercase">
                Produit
              </h1>
              <div className="w-full overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 pb-6">
                      <th className="text-sm pb-8 font-semibold">Image</th>
                      <th className="text-sm pb-8 font-semibold">
                        Produit Nom
                      </th>
                      <th className="text-sm pb-8 font-semibold">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="text-sm  px-2  text-dark-gray">
                        <div className="w-24 mx-auto">
                          <Image
                            src="https://res.cloudinary.com/didh3wbru/image/upload/v1658244260/Ecommerce/Images/Products/product-14_oaysxe.jpg"
                            layout="responsive"
                            width="100%"
                            height="100%"
                            objectFit="contain"
                          />
                        </div>
                      </td>
                      <td className="text-sm font-medium text-center px-2 text-dark-gray">
                        Pomme
                      </td>
                      <td className="text-sm font-medium text-center  px-2 text-dark-gray">
                        3 x $50.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[350px] p-5 bg-gray-100 flex flex-col ">
            <div className="flex border-b pb-4 justify-between">
              <h1 className="uppercase text-dark-gray  text-base font-bold">
                Produit
              </h1>

              <h1 className="uppercase text-dark-gray  text-base font-bold">
                Sous-total
              </h1>
            </div>
            <div className="flex py-4 border-b justify-between">
              <p className="text-sm text-gray-500">Broccoli x 1</p>
              <p className="text-sm text-gray-500">$32.00</p>
            </div>
            <div className="flex py-4 border-b justify-between">
              <p className="text-sm text-gray-500">Livraison</p>
              <p className="text-sm text-gray-500">$32.00</p>
            </div>
            <div className="flex py-4 border-b justify-between">
              <h1 className="text-lg font-medium text-dark-gray">Total</h1>
              <h1 className="text-lg font-semibold text-primary">$32.00</h1>
            </div>
            <div className="py-5 px-6 bg-primary my-5">
              <p className="text-white text-sm leading-[1.6]">
                Désolé, il semble qu’il n’y a pas de méthodes de paiement
                disponibles pour votre état. Veuillez communiquer avec nous si
                vous avez besoin d’aide ou souhaitez prendre d’autres
                dispositions.
              </p>
            </div>

            <button className="text-white font-bold uppercase bg-primary text-xs py-4 rounded-full my-7 hover:bg-secondary">
              Faite votre commande
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderScreen;
