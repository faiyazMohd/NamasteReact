import Logo from "../assets/logos/craveyumLogo3.png";
import SignInIcon from "../assets/icons/IconsComponents/SignInIcon";
import OfferIcon from "../assets/icons//IconsComponents/OfferIcon";
import aboutOrange from "../assets/icons/aboutOrange.png";
import aboutBlack from "../assets/icons/aboutBlack.png";
import cartBlack from "../assets/icons/cartBlack.png";
import cartOrange from "../assets/icons/cartOrange.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserProfile from "../utils/contexts/userProfile/UserProfile";
import UserContext from "../utils/contexts/UserContext";

const Header = () => {
  const [signInColor, setSignInColor] = useState("#000000");
  const [aboutColor, setAboutColor] = useState("#000000");
  const [offerColor, setofferColor] = useState("#000000");
  const [cartColor, setCartColor] = useState("#000000");
  const {user} = useContext(UserContext);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="list">
        <a>
          <li>
            {user.name}
          </li>
        </a>
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
            About
          </li>
        </Link>
        <Link to="/offer">
          <li
            onMouseOver={() => setofferColor("#f3630b")}
            onMouseLeave={() => setofferColor("#000000")}
          >
            <OfferIcon color={offerColor} />
            Offers
          </li>
        </Link>
        <Link to="/cart">
          <li
            onMouseOver={() => setCartColor("#f3630b")}
            onMouseLeave={() => setCartColor("#000000")}
          >
            <img
              src={cartColor === "#000000" ? cartBlack : cartOrange}
              style={{ width: "1.3rem" }}
              alt="aboutIcon"
            />
            Cart
          </li>
        </Link>
        <Link to="/signIn">
          <li
            onMouseOver={() => setSignInColor("#f3630b")}
            onMouseLeave={() => setSignInColor("#000000")}
          >
            <SignInIcon color={signInColor} />
            Sign In
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
