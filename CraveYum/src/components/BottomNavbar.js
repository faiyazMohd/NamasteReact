import Logo from "../assets/logos/craveyumLogo3.png";
import SignInIcon from "../assets/icons/IconsComponents/SignInIcon";
import OfferIcon from "../assets/icons//IconsComponents/OfferIcon";
import aboutOrange from "../assets/icons/aboutOrange.png";
import aboutBlack from "../assets/icons/aboutBlack.png";
import CartSvg from "../assets/icons/IconsComponents/CartSvg";
import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "../assets/icons/IconsComponents/HomeIcon";
import { openSignInSidebar } from "../utils/store/appSlice";

const BottomNavbar = () => {
  const [signInColor, setSignInColor] = useState("#000000");
  const [aboutColor, setAboutColor] = useState("#000000");
  const [homeColor, setHomeColor] = useState("#000000");
  const [cartColor, setCartColor] = useState("#000000");
  const cartItems = useSelector((store) => store.cart.cartItems);
  const placeId = useSelector((store) => store.app.place_id);
  const dispatch = useDispatch();
  const path = useLocation()
  console.log(path.pathname);
  const regexRestaurant = /\/restaurant\//;
if (regexRestaurant.test(path.pathname)) {
  console.log(path.pathname);
}
  return (
    <div className={`bottomNavbar ${(!placeId && path.pathname === "/") || regexRestaurant.test(path.pathname) ? "displayNoneAtPhone":""}`}>
      <ul className="bottomNavbarList">
        <Link to="/">
          <li
            onMouseOver={() => setHomeColor("#f3630b")}
            onMouseLeave={() => setHomeColor("#000000")}
            onTouchStart={() => setHomeColor("#f3630b")}
            onTouchEnd={() => setHomeColor("#000000")}
          >
            <div className="bottomNavIconContainer">
              <HomeIcon color={homeColor} />
            </div>
            <span style={{ color: homeColor }}>Home</span>
          </li>
        </Link>
        <Link to="/about">
          <li
            onMouseOver={() => setAboutColor("#f3630b")}
            onMouseLeave={() => setAboutColor("#000000")}
            onTouchStart={() => setAboutColor("#f3630b")}
            onTouchEnd={() => setAboutColor("#000000")}
            data-testid="about-list-item"
          >
            <div className="bottomNavIconContainer">
              <img
                src={aboutColor === "#000000" ? aboutBlack : aboutOrange}
                style={{ width: "1.3rem" }}
                alt="aboutIcon"
              />
            </div>
            {/* <AboutIcon color={aboutColor}/> */}
            <span style={{ color: aboutColor }}>
              About
            </span>
          </li>
        </Link>

        <Link to="/cart">
          <li
            onMouseOver={() => setCartColor("#f3630b")}
            onMouseLeave={() => setCartColor("#000000")}
            onTouchStart={() => setCartColor("#f3630b")}
            onTouchEnd={() => setCartColor("#000000")}
          >
            <span className="CartIconSpan">
              <CartSvg
                color={cartColor}
                fillColor={
                  cartItems.length === 0
                    ? "#fff"
                    : cartColor === "#000000"
                    ? "#60b246"
                    : "#f3630b"
                }
              />
              <span
                className="CartItemsLength"
                data-testid="cartItemLength"
                style={
                  cartItems?.length > 9
                    ? {
                        right: "17%",
                        color: cartItems.length === 0 ? cartColor : "#fff",
                      }
                    : { color: cartItems.length === 0 ? cartColor : "#fff" }
                }
              >
                {cartItems?.length}
              </span>
            </span>
            <span style={{  color: cartColor }}>Cart</span>
          </li>
        </Link>
        <Link to={"/signIn"} onClick={()=>dispatch(openSignInSidebar())}>
          <li
            onMouseOver={() => setSignInColor("#f3630b")}
            onMouseLeave={() => setSignInColor("#000000")}
            onTouchStart={() => setSignInColor("#f3630b")}
            onTouchEnd={() => setSignInColor("#000000")}
            data-testid="signIn-list-item"
          >
            <div className="bottomNavIconContainer">
              <SignInIcon color={signInColor} />
            </div>
            <span style={{  color: signInColor }}>
              Sign In
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BottomNavbar;
