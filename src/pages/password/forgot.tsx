import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ForgotScreen from "@/components/password/ForgotScreen";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React, { useState } from "react";

const Forgot = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <SEO />
      <Header open={open} setOpen={setOpen} />

      <BannerImg />
      <ForgotScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Forgot;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
