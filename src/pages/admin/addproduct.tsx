import AddProductScreen from "@/components/admin/AddProductScreen";
import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Addproduct = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <AddProductScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Addproduct;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
