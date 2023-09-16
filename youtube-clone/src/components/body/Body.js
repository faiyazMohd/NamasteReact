import useOnline from "../../utils/hooks/useOnline";
import OfflinePage from "../others/OfflinePage";
import SideNavbar from "./sidebars/SideNavbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MobileHeader from "./header/MobileHeader";
import Header from "./header/Header";
import SideBar from "./sidebars/SideBar";
import useThemeDetector from "../../utils/hooks/useThemeDetector";

const Body = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const isDeviceDarkTheme = useThemeDetector();
  const darkTheme = useSelector((store) => store.theme.darkTheme);
 
  return (
    <div
      className={`body   ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }  flex justify-end w-full min-h-screen`}
    >
      <div className="md:hidden ">
        <MobileHeader />
      </div>
      <div className="hidden md:block ">
        <Header />
      </div>
      <div className="">
        <SideBar />
      </div>
      {!showSidebar && <SideNavbar />}
      <Outlet />
    </div>
  );
};

export default Body;
