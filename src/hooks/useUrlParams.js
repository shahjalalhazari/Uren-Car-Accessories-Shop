import { useEffect, useState } from "react";

export const useUrlParams = () => {
    const [params, setParams] = useState(new URLSearchParams());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setParams(new URLSearchParams(window.location.search));

        const handleUrlChange = () => {
            setParams(new URLSearchParams(window.location.search));
        };

        window.addEventListener('popstate', handleUrlChange);
        return (() => window.removeEventListener('popstate', handleUrlChange));
    },[]);

    return { params, isClient };
}