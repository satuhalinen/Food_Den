const Header = ({ handleClick, showCart }) => {
  return (
    <header>
      <div>
        <img src="./src/assets/logo.png" alt="logo" className="logo" />
      </div>

      <div>
        <button className="btn" onClick={() => handleClick("menu")}>
          Menu
        </button>
        <button className="btn" onClick={() => handleClick("about")}>
          About us
        </button>
      </div>
      <span
        onClick={showCart}
        style={{ cursor: "pointer" }}
        className="material-symbols-outlined shopping_cart"
      >
        shopping_cart
      </span>
    </header>
  );
};

export default Header;
