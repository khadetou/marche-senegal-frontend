import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/components/Products/product";
import { GetServerSideProps, GetStaticProps } from "next";

const Product = () => {
  const router = useRouter();

  return (
    <Layout>
      <SEO />
      <Header />
      <ProductDetail />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Product;
export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { white: true } };
};
