import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // console.log("online");
    };
    const hadnleOffline = () => {
      setIsOnline(false);
      // console.log("offline");
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", hadnleOffline);
    return ()=>{
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",hadnleOffline)
    }
  }, []);

  return isOnline;
};
export default useOnline;
