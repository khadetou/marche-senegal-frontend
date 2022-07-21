import BannerImg from "@/components/Banner/BannerImg";
import CheckoutPage from "@/components/checkout";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Checkout = () => {
  return (
    <Layout>
      <Header />
      <SEO />
      <BannerImg />
      <CheckoutPage />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Checkout;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
