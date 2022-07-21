import BannerImg from "@/components/Banner/BannerImg";
import ContactScreen from "@/components/Contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <Header />
      <SEO />
      <BannerImg />
      <ContactScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Contact;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
