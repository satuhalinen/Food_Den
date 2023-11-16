import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="heroImage">
        <h1>Delicious food is just a click away</h1>
        <p className="onPictureText">
          Whether you're craving the comfort of home-cooked meals, exploring
          exotic cuisines, or seeking a quick bite on a busy day, we've curated
          a menu that caters to every palate.
        </p>
      </div>

      <div className="aboutUs">
        <h1>About us</h1>
        <p className="story">
          Welcome to Food Den! your passport to flavor paradise! We're on a
          mission to bring exceptional food straight to your doorstep,
          hassle-free. Dive into our curated menu featuring top-notch dishes
          from local gems to international delights. Ordering is a breeze, and
          our speedy delivery ensures your meal is hot and fresh. Join us in
          celebrating good food, good times, and the ease of dining with Food
          Den. Cheers to savoring the moment!
        </p>
        <h1 className="menu">Menu</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
