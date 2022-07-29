import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ProductsList from "@/components/Products";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React, { useState } from "react";

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
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
