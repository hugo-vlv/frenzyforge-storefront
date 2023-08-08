import { useMemo } from 'react';
import { useRouter } from 'next/router';
import localeFr from 'date-fns/locale/fr';
import localeEn from 'date-fns/locale/en-GB';

const useDateLocale = (): Locale => {
    const { locale } = useRouter();

    const dateLocale: Locale = useMemo(() => {
        if (locale === 'fr') return localeFr;
        else return localeEn;
    }, [locale]);

    return dateLocale;
};

export default useDateLocale;
