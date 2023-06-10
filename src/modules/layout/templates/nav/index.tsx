import Link from "next/link";
import Image from 'next/image';
import clsx from "clsx";

import Hamburger from "@modules/common/components/hamburger";
// import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu";
import MobileMenu from "@modules/mobile-menu/templates";
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal";

import { useMobileMenu } from "@lib/context/mobile-menu-context";
import usePageOffset from "@lib/hooks/use-page-offset";
import useHome from "@lib/hooks/use-home";

import styles from './index.module.scss';

type NavProps = {
}

const Nav: React.FC<NavProps> = () => {
  const { isHome } = useHome();
  const { isScrollTop } = usePageOffset();

  const { toggle } = useMobileMenu();

  return (
    <header className={clsx(styles.nav, { [styles.navScrolled]: !isScrollTop || !isHome })}>
      <nav
        className={clsx("text-gray-900 flex items-center justify-between w-full h-full transition-colors duration-200")}
      >
        <div className="flex-1 basis-0 h-full flex items-center">
          <div className="block small:hidden">
            <Hamburger setOpen={toggle} />
          </div>
          <div className="hidden small:block h-full">
            <DropdownMenu />
          </div>
        </div>

        <div className="flex items-center h-full">
          <Link passHref href="/" className="relative h-20 w-20">

            <Image
              src="/logo_cropped.png"
              fill
              loading="eager"
              priority={true}
              alt="FrenzyForge"
              className="absolute inset-0"
              draggable="false"
            />

          </Link>
        </div>

        <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
          <div className="hidden small:flex items-center gap-x-6 h-full">
            {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
            <Link href="/contact" className='text-sm-regular'>
              Contact
            </Link>
          </div>
          {/* <CartDropdown /> */}
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Nav;
