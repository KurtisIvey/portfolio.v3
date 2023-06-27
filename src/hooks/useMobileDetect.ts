import { useState, useEffect } from "react";

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileRegex = /Mobile|Android|iP(hone|od|ad)|Windows Phone/i;
    const isMobileBrowser = mobileRegex.test(userAgent);

    setIsMobile(isMobileBrowser);
  }, []);

  return isMobile;
};

export default useMobileDetect;
