import ProductLandingList from "@/components/Products/ProductLandingList";
import React, { Dispatch, FC } from "react";

interface ProductListProps {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
  img: string;
}
const ProductScreen: FC<ProductListProps> = ({
  openModal,
  setOpenModal,
  img,
}) => {
  return (
    <div>
      <ProductLandingList
        openModal={openModal}
        setOpenModal={setOpenModal}
        img={img}
      />
    </div>
  );
};

export default ProductScreen;
