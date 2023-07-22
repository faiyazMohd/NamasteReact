import Logo from "../../assets/craveyumLogo.png";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="list">
          <li>About</li>
          <li>Offers</li>
          <li>Cart</li>
          <li>Sign In</li>
        </ul>
      </div>
    );
  };
  
export default Header;