import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import SEO from "@/components/Seo";
import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "@/components/Products/product";
import { GetServerSideProps, GetStaticProps } from "next";
import { wrapper } from "store";
import { getCookie } from "store/actions/auth";
import { off } from "process";
import jwtDecode from "jwt-decode";
import { getUser, logout } from "store/reducers/auth";

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
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context): Promise<any> => {
    const token: string = getCookie("token", context.req);
    if (token) {
      if (jwtDecode<any>(token).exp < Date.now() / 100) {
        await store.dispatch<any>(logout());
      } else {
        await store.dispatch<any>(getUser(token));
        return { props: { white: true } };
      }
      return { props: { white: true } };
    }
    return { props: { white: true } };
  });
