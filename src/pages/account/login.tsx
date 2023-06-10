import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LoginTemplate from "@modules/account/templates/login-template";
import Head from "@modules/common/components/head";
import Layout from "@modules/layout/templates";
import { NextPageWithLayout } from "types/global";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sign in" description="Sign in to your ACME account." />
      <LoginTemplate />
    </>
  );
};

Login.getLayout = (page) => {
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

export default Login;
