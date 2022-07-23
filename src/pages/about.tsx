import AboutScreen from "@/components/About";
import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const About = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <AboutScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default About;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
