import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import React from "react";

const Products = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <Footer bgColor="bg-primary" textColor="text-white" />
    </Layout>
  );
};

export default Products;
