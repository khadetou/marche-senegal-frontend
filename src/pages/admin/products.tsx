import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import ProductScreen from "@/components/admin/ProdutScreen";
import { GetStaticProps } from "next";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <ProductScreen />
      <Footer bgColor="!bg-primary" textColor="!text-primary" />
    </Layout>
  );
};

export default Products;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
