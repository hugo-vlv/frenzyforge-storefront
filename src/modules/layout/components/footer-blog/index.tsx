import Image from "next/image";
import Link from 'next/link';
import LiquidButton from '@modules/common/components/liquid-button';

import styles from './footer-blog.module.scss';

const FooterBlog = () => {
  return (
    <div className={styles.block}>
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi mb-5">Vous débutez dans la peinture sur figurines ?</h3>
          <LiquidButton>
            <Link href="/store">Par ici !</Link>
          </LiquidButton>
        </div>

        <div className={`${styles.image} relative w-full aspect-square small:w-[35%] small:aspect-[28/36]`}>
          <Image
            src="/blog-section-image.png"
            alt="blog-section-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBlog;
