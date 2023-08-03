// import {Logo,Search,UserIcon} from "./NavItems";
// import NavItems from "./NavItems";
// import * as NavItems from "./NavItems"
// const {Logo,Search,UserIcon}  =  NavItems;
// import {Logo,Search,UserIcon}  from "./NavItems";
import UserIcon from "./NavItems";
import {Logo,Search}   from "./NavItems";

const Header = () => (
  <>
    <div
      id="header"
      className="flex items-center justify-between bg-blue-300"
    >
       
      <Logo />
      <Search />
      <UserIcon />
    </div>
    </>
  );

export default Header;