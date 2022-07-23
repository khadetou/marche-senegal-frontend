import EditProductScreen from "@/components/admin/EditProductScreen";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetServerSideProps } from "next";
import React from "react";

const EditProduct = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <EditProductScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default EditProduct;
export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { white: true } };
};
