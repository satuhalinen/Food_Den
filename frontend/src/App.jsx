import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./components/Card";
import "./App.css";
import Carousel from "react-multi-carousel";
import { foodMenu, responsive } from "./data";
import { useState } from "react";

function App(handleSearch) {
  const details = foodMenu.map((item, i) => (
    <Card
      key={i}
      name={item.name}
      url={item.image}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="heroImage">
        <h1>Delicious food is just a click away</h1>
        <p className="onPictureText">
          Whether you're craving the comfort of home-cooked meals, exploring
          exotic cuisines, or seeking a quick bite on a busy day, we've curated
          a menu that caters to every palate.
        </p>
      </div>

      <div className="aboutUs">
        <h2>About us</h2>
        <p className="story">
          Welcome to Food Den! your passport to flavor paradise! We're on a
          mission to bring exceptional food straight to your doorstep,
          hassle-free. Dive into our curated menu featuring top-notch dishes
          from local gems to international delights. Ordering is a breeze, and
          our speedy delivery ensures your meal is hot and fresh. Join us in
          celebrating good food, good times, and the ease of dining with Food
          Den. Cheers to savoring the moment!
        </p>
      </div>

      <div className="foodCard">
        <h2 className="menu">Menu</h2>
        <Carousel responsive={responsive}>{details}</Carousel>
      </div>

      <Footer />
    </>
  );
}

export default App;
