import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AccountLayout from "@modules/account/templates/account-layout";
import OverviewTemplate from "@modules/account/templates/overview-template";
import Head from "@modules/common/components/head";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Account" description="Overview of your account activity." />
      <OverviewTemplate />
    </>
  );
};

Account.getLayout = (page: ReactElement) => {
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

export default Account;
