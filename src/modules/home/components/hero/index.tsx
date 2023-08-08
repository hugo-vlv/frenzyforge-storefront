import Link from 'next/link';
import clsx from "clsx";
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

// import LiquidButton from '@modules/common/components/liquid-button';
import UnderlineLink from "@modules/common/components/underline-link";
import HeroScene from '@modules/home/components/hero-scene';

import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={`h-[100vh] w-full relative ${styles.hero}`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
            Dive into miniature painting with ease
          </h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            Immerse yourself in a world of highly detailed 3D printed miniatures, crafted with passion and precision, to elevate your gaming and hobby experiences.
          </p>
          {/* <LiquidButton inverted>
            <Link href="/store">Par ici !</Link>
          </LiquidButton> */}
          <UnderlineLink href="/store">Voir les produits</UnderlineLink>
        </div>
        <div className={styles.right}>
          <div className={styles.scene}>
            <Canvas>
              <HeroScene />
            </Canvas>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
