import useOnline from "../utils/hooks/useOnline";
import OfflinePage from "./OfflinePage";
import SideNavbar from "./SideNavbar";
import { useSelector } from "react-redux";
import VideosContainer from "./VideosContainer";
import { Outlet } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import Header from "./Header";
import SideBar from "./SideBar";

const Body = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const isOnline = useOnline();
  if (!isOnline) {
    return <OfflinePage />;
  }
  return (
    <div className="body  flex justify-end w-full mt-12">
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
      <Outlet/>
    </div>
  );
};

export default Body;
