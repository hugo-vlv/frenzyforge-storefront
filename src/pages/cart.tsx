import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CartTemplate from "@modules/cart/templates";
import Head from "@modules/common/components/head";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Shopping Bag" description="View your shopping bag" />
      <CartTemplate />
    </>
  );
};

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
      ])),
    },
  };
};

export default Cart;
