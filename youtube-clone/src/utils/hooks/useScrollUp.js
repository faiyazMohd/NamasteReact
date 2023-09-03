import { useState, useEffect } from "react";

const useScrollUp = () => {
  const [isScrollUp, setIsScrollUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
        window.requestAnimationFrame(() => {
          // console.log(lastScrollPosition);
          if (window.scrollY > lastScrollPosition) {
            setIsScrollUp(false);
          //   console.log("Scrolling Down");
            setLastScrollPosition(window.scrollY);
          } else {
            setIsScrollUp(true);
          //   console.log("Scrolling Up");
            setLastScrollPosition(window.scrollY);
          }
        });
      }
    window.addEventListener("scroll",handleScroll );
    return () => {
        window.removeEventListener("scroll",handleScroll)
    };
  }, [lastScrollPosition]);

  return isScrollUp;
};

export default useScrollUp;
