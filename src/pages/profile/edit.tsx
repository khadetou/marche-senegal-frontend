import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import EditScreen from "@/components/Profile/EditScreen";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React, { useState } from "react";

const Edit = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <SEO />
      <Header open={open} setOpen={setOpen} />
      <BannerImg />
      <EditScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Edit;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
