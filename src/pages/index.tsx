import { ReactElement } from "react";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { NextPageWithLayout } from "types/global";
import Head from "@modules/common/components/head";
import FeaturedProducts from "@modules/home/components/featured-products";
import Hero from "@modules/home/components/hero";
import Layout from "@modules/layout/templates";

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head
        title={t('home.title') || undefined}
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
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

export default Home;
