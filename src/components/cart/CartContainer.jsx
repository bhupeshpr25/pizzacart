import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CartContainer = () => {
  const [state, setState] = useState({
    items: [], // initialize items as an empty array
    quantity: 0,
    total: 0,
  });

  console.log(state.items.length);

  return (
    <>
      {state.items.length === 0 ? (
        <section className="grid place-items-center">
          <div className="text-center">
            <h5 className="mb-4 text-3xl text-gray-800 font-bold">
              Your cart is empty
            </h5>
            <Link
              to="/"
              className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
            >
              Go back
            </Link>
          </div>
        </section>
      ) : (
        <Cart
          items={state.items} // pass items as an array from the state
          quantity={state.quantity}
          total={state.total}
        />
      )}
    </>
  );
};

export default CartContainer;
