import Image from 'next/image'
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import usePageOffset from "@lib/hooks/use-page-offset"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import styles from './index.module.scss'

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(true)
  const { isScrollTop } = usePageOffset()

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
      <header className={clsx(styles.nav, { [styles.navScrolled]: !isScrollTop })}>
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
            <Link href="/">
              <a className="relative h-20 w-20">
                <Image
                  src="/logo_cropped.png"
                  layout='fill'
                  loading="eager"
                  priority={true}
                  objectFit="cover"
                  alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                  className="absolute inset-0"
                  draggable="false"
                />
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/contact">
                <a className='text-sm-regular'>Contact</a>
              </Link>
            </div>
            {/* <CartDropdown /> */}
          </div>
        </nav>
        <MobileMenu />
      </header>
  )
}

export default Nav
