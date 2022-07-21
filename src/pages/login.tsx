import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import LoginScreen from "@/components/Login";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Login = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <LoginScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Login;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
