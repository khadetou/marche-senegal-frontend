import Ads from "@/components/Ads";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intersection from "@/components/Intersection";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import Services from "@/components/Services";
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import ProductScreen from "screen/ProductScreen";

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout openModal={openModal} setOpenModal={setOpenModal}>
      <SEO />
      <Header />
      <Banner />
      <Ads />
      <ProductScreen openModal={openModal} setOpenModal={setOpenModal} />
      <Intersection />
      <Category />
      <Services />
      <Footer />
    </Layout>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { white: false } };
};
