import NextHead from "next/head";
import React from "react";

type HeadProps = {
  title?: string | undefined
  description?: string | undefined
  image?: string | undefined
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{`${title ? `${title} - ` : ''}FrenzyForge`}</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
