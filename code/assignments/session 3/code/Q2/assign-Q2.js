import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => (
  <div id="left">
    <img
      src="https://endurefit.netlify.app/static/media/logowithname.3f6ee07af81e14903860.png"
      alt="Logo"
      style={{ height: "2rem" }}
    />{" "}
  </div>
);

const Search = () => (
  <div id="searchBar" >
    <input type="text" style={{margin:"1rem",width:"21vw",height:"1.7rem",borderRadius:"0.5rem"}}/>
    <button style={{backgroundColor:"#63bccb",borderRadius:"0.5rem",padding:"0.3rem"}}>Search</button>
  </div>
);

const UserIcon = () => (
  <div id="right">
    <img
      style={{ height: "2.8rem" }}
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="UserIcon"
    />
  </div>
);

const Header = () => (
  <div
    id="header"
    style={{backgroundColor:"#aed8df", display: "flex", alignItems: "center",justifyContent:"space-between" }}
  >
    <Logo />
    <Search />
    <UserIcon />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
