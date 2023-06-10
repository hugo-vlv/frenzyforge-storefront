import { useState, useEffect } from 'react';

type OffestData = {
    scrollY: number,
    isScrollTop: boolean
}

const usePageOffset = (): OffestData => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        scrollY,
        isScrollTop: scrollY <= 5
    };
};

export default usePageOffset;