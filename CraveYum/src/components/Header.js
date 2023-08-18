import Logo from "../assets/logos/craveyumLogo3.png";
import SignInIcon from "../assets/icons/IconsComponents/SignInIcon";
import OfferIcon from "../assets/icons//IconsComponents/OfferIcon";
import aboutOrange from "../assets/icons/aboutOrange.png";
import aboutBlack from "../assets/icons/aboutBlack.png";
import cartBlack from "../assets/icons/cartBlack.png";
import cartOrange from "../assets/icons/cartOrange.png";
import CartSvg from "../assets/icons/IconsComponents/CartSvg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "../utils/contexts/userProfile/UserProfile";
import UserContext from "../utils/contexts/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [signInColor, setSignInColor] = useState("#000000");
  const [aboutColor, setAboutColor] = useState("#000000");
  const [offerColor, setofferColor] = useState("#000000");
  const [cartColor, setCartColor] = useState("#000000");
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="list">
        <Link to="/about">
          <li
            onMouseOver={() => setAboutColor("#f3630b")}
            onMouseLeave={() => setAboutColor("#000000")}
          >
            <img
              src={aboutColor === "#000000" ? aboutBlack : aboutOrange}
              style={{ width: "1.3rem" }}
              alt="aboutIcon"
            />
            {/* <AboutIcon color={aboutColor}/> */}
            <span  style={{paddingLeft:".2rem",color:aboutColor}} >About</span>
            
          </li>
        </Link>
        <Link to="/offer">
          <li
            onMouseOver={() => setofferColor("#f3630b")}
            onMouseLeave={() => setofferColor("#000000")}
          >
            <OfferIcon color={offerColor} />
            <span  style={{paddingLeft:".4rem",color:offerColor}} >Offers</span>
          </li>
        </Link>
       
        <Link to="/signIn">
          <li
            onMouseOver={() => setSignInColor("#f3630b")}
            onMouseLeave={() => setSignInColor("#000000")}
          >
            <SignInIcon color={signInColor} />
            <span  style={{paddingLeft:".5rem",color:signInColor}} >Sign In</span>

          </li>
        </Link>
        <Link to="/cart">
          <li
            onMouseOver={() => setCartColor("#f3630b")}
            onMouseLeave={() => setCartColor("#000000")}
          >
            <span className="CartIconSpan">
              <CartSvg color={cartColor} fillColor={cartItems.length ===0? "#fff": cartColor === "#000000"?"#60b246":"#f3630b"}/>
              <span className="CartItemsLength" style={cartItems?.length > 9?{right:"17%",color: cartItems.length===0 ?cartColor:"#fff"}:{color:cartItems.length===0 ?cartColor:"#fff"}}>{cartItems?.length}</span>
            </span>
            <span  style={{paddingLeft:".5rem",color:cartColor}} >Cart</span>
       
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
