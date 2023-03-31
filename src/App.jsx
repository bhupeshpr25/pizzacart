import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cartTotal } from "./redux/cart/cartSlice";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PizzasList from "./components/pizza/PizzasList";
import Cart from "./components/cart/Cart";

const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(cartTotal());
  }, [items]);

  return (
    <main
      className="pt-16 grid min-h-screen"
      style={{ gridTemplateRows: "1fr auto" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PizzasList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" exact={true} element={<PizzasList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
