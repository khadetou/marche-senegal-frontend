import BannerImg from "@/components/Banner/BannerImg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import ProfileScreen from "@/components/Profile/ProfileScreen";
import SEO from "@/components/Seo";
import { GetStaticProps } from "next";
import React from "react";

const Profile = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <BannerImg />
      <ProfileScreen />
      <Footer bgColor="!bg-primary" textColor="!text-white" />
    </Layout>
  );
};

export default Profile;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: true } };
};
