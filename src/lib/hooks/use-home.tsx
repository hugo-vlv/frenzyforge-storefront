import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const useHome = () => {
    const { pathname } = useRouter();
    const [isHome, setIsHome] = useState(false);
    
    useEffect(() => {
        pathname === "/" ? setIsHome(true) : setIsHome(false);
    }, [pathname]);

    return {
        isHome,
    };
};

export default useHome;