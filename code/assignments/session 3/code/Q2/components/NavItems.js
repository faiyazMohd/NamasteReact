export const Logo = () => (
  <div id="left">
    <img
      src="https://endurefit.netlify.app/static/media/logowithname.3f6ee07af81e14903860.png"
      alt="Logo"
      className="h-8"
    />{" "}
  </div>
);

export const Search = () => (
  <div id="searchBar">
    <input
      type="text"
      className="m-4 w-[21vw] h-7 rounded-lg"
    />
    <button
    className=" bg-blue-500 rounded-lg p-1 hover:bg-[#63bccb]"
    >
      Search
    </button>
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

// const NavItems = {Logo,Search, UserIcon}
// export default NavItems
export default UserIcon;
