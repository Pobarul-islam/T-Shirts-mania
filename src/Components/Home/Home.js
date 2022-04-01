import React from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  return (
    <div className="home-container">
      <div className="tShirts-container">
        <h3>{tShirts.length}</h3>
      </div>
      <div className="cart-container"></div>
      <Cart></Cart>
    </div>
  );
};

export default Home;
