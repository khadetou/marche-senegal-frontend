import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ResetScreen from "@/components/password/ResetScreen";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Reset = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <ResetScreen />
      <Footer />
    </Layout>
  );
};

export default Reset;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
