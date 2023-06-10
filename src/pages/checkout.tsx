import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CheckoutTemplate from "@modules/checkout/templates";
import Head from "@modules/common/components/head";

const Checkout = () => {
  return (
    <>
      <Head title="Checkout" />
      <CheckoutTemplate />
    </>
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

export default Checkout;
