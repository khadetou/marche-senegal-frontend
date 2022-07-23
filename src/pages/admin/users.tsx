import UsersScreen from "@/components/admin/UsersScreen";
import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Users = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <UsersScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Users;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
