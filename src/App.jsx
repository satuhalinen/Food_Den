import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Card from "./components/Card";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import "./index.css";
import "./App.css";
import { foodMenu, responsive } from "./data";
import Swal from "sweetalert2";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchQuery(searchString);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (image, name, price) => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.push({ image, name, price });
    setCartItems(cartItemsCopy);

    let timerInterval;
    Swal.fire({
      icon: "success",
      title: `${name} added to cart`,
      timer: 2000,
      didOpen: () => (timerInterval = setInterval(() => {}, 1000)),
      willClose: () => clearInterval(timerInterval),
    });
  };

  const removeFromCart = (i) => {
    const cartItemsCopy = [...cartItems];
    cartItemsCopy.splice(i, 1);
    setCartItems(cartItemsCopy);
  };

  const details = foodMenu
    ?.filter((item) => item.name.toLowerCase().includes(searchQuery))
    ?.map((item, i) => (
      <Card
        key={i}
        name={item.name}
        url={item.image}
        price={item.price}
        description={item.description}
        addToCart={() => addToCart(item.image, item.name, item.price)}
      />
    ));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: (
            <Menu
              handleSearch={handleSearch}
              responsive={responsive}
              details={details}
            />
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: (
            <Cart
              {...cartItems}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
