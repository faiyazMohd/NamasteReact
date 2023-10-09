import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeToLight, setThemeToDark } from "../store/themeSlice";

const useThemeDetector = () => {
  const darkTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState(darkTheme);
  const dispatch = useDispatch();
  const currentTheme = useSelector((store) => store.theme.currentTheme);
  useEffect(() => {
    const themeListerner = (e) => {
      setIsDarkTheme(e.matches);
      if (currentTheme === "Use device theme") {
        if (e.matches) {
          dispatch(setThemeToDark());
        } else {
          dispatch(setThemeToLight());
        }
      }
    };
    const darkThemeCheck = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeCheck.addEventListener("change", themeListerner);
    // darkThemeCheck.addListener(themeListerner);//depcreciated
    // console.log(isDarkTheme);
    return () => {
      //   darkThemeCheck.removeListener(themeListerner);//depcreciated
      darkThemeCheck.removeEventListener("change", themeListerner);
    };
  }, [currentTheme]);

  return isDarkTheme;
};

export default useThemeDetector;

/*
const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}
*/
