import React from "react";
import OrderScreen from "@/components/OrderScreen/indext";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BannerImg from "@/components/Banner/BannerImg";
import { GetServerSideProps } from "next";

const Order = () => {
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

export default Order;
export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { white: true } };
};
