import { useEffect, useState } from "react";

const useWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceWidth;
};

export default useWidth