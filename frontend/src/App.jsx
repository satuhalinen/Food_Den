import Card from "./components/Card";
import "./App.css";
import Carousel from "react-multi-carousel";
import { foodMenu, responsive } from "./data";

function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const details = foodMenu.map((item) => (
    <Card
      name={item.name}
      url={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <div className="foodCard">
        <h1>Food Items</h1>
      </div>
      <Carousel responsive={responsive}>{details}</Carousel>
    </>
  );
}

export default App;
