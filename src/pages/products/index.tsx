import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ProductsList from "@/components/Products";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <ProductsList />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Products;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
