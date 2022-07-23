import OrderScreen from "@/components/admin/OrderScreen";
import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Orders = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <OrderScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Orders;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
