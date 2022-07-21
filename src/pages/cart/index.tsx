import BannerImg from "@/components/Banner/BannerImg";
import CartItems from "@/components/cart";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next/types";
import React from "react";

const Cart = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <CartItems />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Cart;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
