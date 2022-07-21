import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import RegisterScreen from "@/components/Register";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Register = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <RegisterScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Register;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
