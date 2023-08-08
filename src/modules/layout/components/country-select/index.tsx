import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Listbox, Transition } from "@headlessui/react";
import useToggleState from "@lib/hooks/use-toggle-state";
import { Fragment, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

type LocaleOption = {
  value: string,
  country: string,
  label: string,
}

const locales = [
  {
    value: 'en',
    country: 'gb',
    label: "English"
  },
  {
    value: 'fr',
    country: 'fr',
    label: "Français"
  }
];

const CountrySelect = () => {
  const { locale, pathname, asPath, query, push } = useRouter();
  const { t } = useTranslation('common');
  const [current, setCurrent] = useState<LocaleOption | undefined>(undefined);
  const { state, open, close } = useToggleState();
  
  const options: LocaleOption[] | undefined = locales;

  useEffect(() => {
    if (locale) {
      const option = options.find((o) => o.value === locale);
      setCurrent(option);
    }
  }, [locale, options]);

  const handleChange = (option: LocaleOption) => {
    push({ pathname, query }, asPath, { locale: option.value, scroll: false });
    close();
  };  

  return (
    <div onMouseEnter={open} onMouseLeave={close}>
      <Listbox
        onChange={handleChange}
        defaultValue={
          locale
            ? options?.find((o) => o.country === locale)
            : undefined
        }
      >
        <Listbox.Button className="py-1 w-full">
          <div className="text-small-regular flex items-center gap-x-2 xsmall:justify-end">
            <span>{t('footer.switchLanguage')}</span>
            {current && (
              <span className="text-small-semi flex items-center gap-x-2">
                <ReactCountryFlag
                  svg
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                  countryCode={current.country}
                />
                {current.label}
              </span>
            )}
          </div>
        </Listbox.Button>
        <div className="relative w-full min-w-[316px]">
          <Transition
            show={state}
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular text-black no-scrollbar"
              static
            >
              {options?.map((o, index) => {
                return (
                  <Listbox.Option
                    key={index}
                    value={o}
                    className="py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2"
                  >
                    <ReactCountryFlag
                      svg
                      style={{
                        width: "16px",
                        height: "16px",
                      }}
                      countryCode={o.country}
                    />{" "}
                    {o.label}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CountrySelect;
