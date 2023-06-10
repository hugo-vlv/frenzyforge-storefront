import clsx from "clsx";

import UnderlineLink from "@modules/common/components/underline-link";
import usePageOffset from '@lib/hooks/use-page-offset';

import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={`h-[100vh] w-full relative ${styles.hero}`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Unleash Your Creativity: Dive into a World of Highly Detailed 3D Printed Minis
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            Immerse yourself in a world of highly detailed 3D printed miniatures, crafted with passion and precision, to elevate your gaming and hobby experiences.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <div className={styles.right}>
          3D Object
        </div>
      </div>
    </div>
  );
};

export default Hero;
