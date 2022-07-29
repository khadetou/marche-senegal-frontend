import BannerImg from "@/components/Banner/BannerImg";
import CartItems from "@/components/cart";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next/types";
import React, { useState } from "react";

const Cart = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <SEO />
      <Header open={open} setOpen={setOpen} />
      <BannerImg />
      <CartItems open={open} setOpen={setOpen} />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Cart;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
