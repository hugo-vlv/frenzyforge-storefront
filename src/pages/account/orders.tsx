import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AccountLayout from "@modules/account/templates/account-layout";
import OrdersTemplate from "@modules/account/templates/orders-template";
import Head from "@modules/common/components/head";
import Layout from "@modules/layout/templates";
import { NextPageWithLayout } from "types/global";

const Orders: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Orders" description="Overview of your previous orders." />
      <OrdersTemplate />
    </>
  );
};

Orders.getLayout = (page) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  );
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

export default Orders;
