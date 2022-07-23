import ProductLandingList from "@/components/Products/ProductLandingList";
import React, { Dispatch, FC } from "react";

interface ProductListProps {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}
const ProductScreen: FC<ProductListProps> = ({ openModal, setOpenModal }) => {
  return (
    <div>
      <ProductLandingList openModal={openModal} setOpenModal={setOpenModal} />
      {/* <Products /> */}
    </div>
  );
};

export default ProductScreen;
