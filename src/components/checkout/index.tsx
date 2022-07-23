import React from "react";
import { FaOpencart } from "react-icons/fa";
import StateManagedSelect from "react-select";
import Select from "react-select";

const CheckoutPage = () => {
  const options = [
    {
      value: "Bargny",
      label: "Bargny",
    },
    {
      value: "Centenaire",
      label: "Centenaire",
    },
    {
      value: "Castors",
      label: "Castors",
    },
  ];
  const styles = {
    control: (base: any, state: any) => ({
      ...base,
      border: "solid 1px #efefef",
      borderRadius: "0",
      height: "42px",
      "&:hover": {
        border: "solid 1px #efefef",
      },
      "&:focus": {
        // outline: "none",
        border: "none",
      },
      "&:active": {
        border: "none",
        outline: "none",
      },
    }),
  };
  const theme = (theme: any) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#Efefef",
      },
    };
  };
  return (
    <section>
      <div className="containers">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <form className="max-w-[730px] mb-7 md:mb-0 px-[20px] px- w-full">
            <div className="mb-3 flex flex-col">
              <label className="text-sm text-dark-gray mb-2" htmlFor="">
                Region <span className="text-red-700">*</span>{" "}
              </label>
              <Select
                options={[{ value: "Dakar", label: "Dakar" }]}
                styles={styles}
                className="select"
                theme={theme}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label className="text-sm text-dark-gray mb-2" htmlFor="">
                Ville <span className="text-red-700">*</span>{" "}
              </label>
              <Select
                options={options}
                styles={styles}
                className="select"
                theme={theme}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-sm text-dark-gray mb-2">
                Address <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                className="w-full border-gray-200 focus:border-gray-200 focus:ring-0"
              />
            </div>
            <div className="flex flex-col mt-4 w-full">
              <label htmlFor="" className="text-sm text-dark-gray mb-2">
                Numero de tel. <span className="text-red-700">*</span>
              </label>
              <input
                type="tel"
                className="w-full border-gray-200 focus:border-gray-200 focus:ring-0"
              />
            </div>
          </form>
          <div className="w-full max-w-[400px] p-5 bg-gray-100 flex flex-col ">
            <div className="flex border-b pb-4 justify-between">
              <h1 className="uppercase text-dark-gray  text-base font-bold">
                Product
              </h1>
              <h1 className="uppercase text-dark-gray  text-base font-bold">
                Subtotal
              </h1>
            </div>
            <div className="flex py-4 border-b justify-between">
              <p className="text-sm text-gray-500">
                Broccoli <span className="text-dark-gray">x 1</span>
              </p>
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

        {/* <div>
          <div className="text-white mb-1 flex items-center bg-primary p-3 w-full">
            <FaOpencart className="mr-4" /> <p>Votre panier est vide</p>
          </div>
          <button className="text-white rounded-full bg-primary px-14 py-3 mt-9 hover:bg-secondary">
            Retourner
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CheckoutPage;
