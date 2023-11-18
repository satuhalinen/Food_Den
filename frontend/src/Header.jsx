const Header = () => {
  return (
    <header>
      <div>
        <img src="./src/assets/logo.png" alt="logo" className="logo" />
      </div>
      <div className="search-grp">
        <span className="material-symbols-outlined search-icon">search</span>
        <input type="text" className="search" />
      </div>
      <div>
        <button className="btn">Home</button>
        <button className="btn">About us</button>
      </div>
      <span className="material-symbols-outlined shopping_cart">
        shopping_cart
      </span>
    </header>
  );
};

export default Header;
