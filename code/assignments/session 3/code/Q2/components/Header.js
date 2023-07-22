// import {Logo,Search,UserIcon} from "./NavItems";
import NavItems from "./NavItems";
// import * as NavItems from "./NavItems"
// const {Logo,Search,UserIcon}  =  NavItems;
// import {Logo,Search,UserIcon}  from "./NavItems";
const Header = () => (
    <div
      id="header"
      style={{backgroundColor:"#aed8df", display: "flex", alignItems: "center",justifyContent:"space-between" }}
    >
        
      <NavItems.Logo />
      <NavItems.Search />
      <NavItems.UserIcon />
    </div>
  );

export default Header;