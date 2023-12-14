const Header = ({ handleSearch, showCart }) => {
  return (
    <header>
      <div>
        <img src="./src/assets/logo.png" alt="logo" className="logo" />
      </div>
   
      <div>
        <button className="btn">Home</button>
        <button className="btn">About us</button>
      </div>
      <span onClick={showCart} style={{cursor: "pointer"}} className="material-symbols-outlined shopping_cart">
        shopping_cart
      </span>
    </header>
  );
};

export default Header;
