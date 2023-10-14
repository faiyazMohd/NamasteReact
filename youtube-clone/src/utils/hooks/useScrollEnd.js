import { useState, useEffect } from "react";

const useScrollEnd = () => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  useEffect(() => {
    const handleScrollend = (e) => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      // console.log("scrollPosition is "+Math.ceil(scrollPosition));
      // console.log("windowHeight is "+windowHeight);
      // console.log("scrollHeight is "+scrollHeight);
      if (Math.ceil((scrollPosition) + windowHeight) >= scrollHeight) {
        setIsScrollEnd(true);
        console.log("scrolled to the bottom");
      }
      else{
        setIsScrollEnd(false)
      }
    };
    window.addEventListener("scroll", handleScrollend);
    return () => {
      window.removeEventListener("scroll", handleScrollend);
    };
  }, []);

  return [isScrollEnd,setIsScrollEnd];
};

export default useScrollEnd;
