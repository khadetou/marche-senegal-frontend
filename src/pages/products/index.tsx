import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ProductsList from "@/components/Products";
import SEO from "@/components/Seo";
import { useAppSelector } from "@/hooks/index";
import jwtDecode from "jwt-decode";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { wrapper } from "store";
import { getCookie } from "store/actions/auth";
import { logout, getUser } from "store/reducers/auth";
import { getAllProducts } from "store/reducers/products/productSlice";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const { products } = useAppSelector((state) => state.products);

  return (
    <Layout openModal={openModal} setOpenModal={setOpenModal}>
      <SEO />
      <Header open={open} setOpen={setOpen} />
      <BannerImg />
      <ProductsList
        products={products}
        openModal={openModal}
        setOpenModal={setOpenModal}
        open={open}
        setOpen={setOpen}
      />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Products;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    const data = {
      req: context.req,
      keyword: context.query.keyword,
      pageNumber: context.query.pageNumber,
    };
    await store.dispatch<any>(getAllProducts(data));
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
      }
    }
  });
