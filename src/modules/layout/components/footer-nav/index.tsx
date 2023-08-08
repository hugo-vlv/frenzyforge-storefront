import Link from "next/link";
import clsx from "clsx";
import { useCollections } from "medusa-react";
import { useTranslation } from 'next-i18next';

import CountrySelect from "@modules/layout/components/country-select";
import { BRAND_NAME } from "@lib/constants";

const FooterNav = () => {
  const { collections } = useCollections();
  const { t } = useTranslation('common');
  
  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/" className="text-xl-semi">
            {BRAND_NAME}
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">{t('footer.sections.collections.title')}</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Footer Section</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog (WIP)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  About (WIP)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact (WIP)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 {BRAND_NAME}
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
