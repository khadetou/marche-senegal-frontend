import ProductLandingList from "@/components/Products/ProductLandingList";
import React, { Dispatch, FC } from "react";

interface ProductListProps {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
  img: string;
  open: any;
  setOpen: any;
}

const ProductScreen: FC<ProductListProps> = ({
  openModal,
  setOpenModal,
  img,
  open,
  setOpen,
}) => {
  return (
    <div>
      <ProductLandingList
        openModal={openModal}
        setOpenModal={setOpenModal}
        open={open}
        setOpen={setOpen}
        img={img}
      />
    </div>
  );
};

export default ProductScreen;
