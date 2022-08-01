import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ProductsList from "@/components/Products";
import SEO from "@/components/Seo";
import jwtDecode from "jwt-decode";
import { GetServerSideProps, GetStaticProps } from "next";
import React, { useState } from "react";
import { wrapper } from "store";
import { getCookie } from "store/actions/auth";
import { logout, getUser } from "store/reducers/auth";
import { getAllProducts } from "store/reducers/products/productSlice";

const Products = () => {
  const [openModal, setOpenModal] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <Layout openModal={openModal} setOpenModal={setOpenModal}>
      <SEO />
      <Header open={open} setOpen={setOpen} />
      <BannerImg />
      <ProductsList openModal={openModal} setOpenModal={setOpenModal} />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Products;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);

    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 1000) {
        console.log("----------------------------------------------outdated");
        await store.dispatch<any>(logout());
      } else {
        console.log("----------------------------------------------------");
        await store.dispatch<any>(getUser(token));
      }
    }
  });
