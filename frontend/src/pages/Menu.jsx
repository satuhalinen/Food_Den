import Carousel from "react-multi-carousel";

const Menu = ({ handleSearch, responsive, details }) => {
  return (
    <div className="foodCard">
        <h2 className="menu">
        Menu
        </h2>
        <div className="search-grp">
        <span className="material-symbols-outlined search-icon">
            search
        </span>
        <input type="text" onChange={handleSearch} className="search" />
        </div>
        <Carousel responsive={responsive}>{details}</Carousel>
    </div>
  )
}

export default Menu;