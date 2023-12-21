import { Link } from "react-router-dom";
import logoUrl from "./assets/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logoUrl} alt="logo" className="logo" />
      </Link>

      <div>
        <Link to="/menu">
          <button className="btn">Menu</button>
        </Link>
        <Link to="/about">
          <button className="btn">About us</button>
        </Link>
      </div>
      <Link to="/cart">
        <span
          style={{ cursor: "pointer" }}
          className="material-symbols-outlined shopping_cart"
        >
          shopping_cart
        </span>
      </Link>
    </header>
  );
};

export default Header;
