import React from "react";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = ({ items, quantity, total }) => {
  console.log(items);
  const dispatch = useDispatch();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col justify-between md:flex-row md:items-start gap-6">
      <div className="md:w-2/3 space-y-8">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Cart</h2>
        <div className="px-4 space-y-4">
          {items && items.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <Link to="/">
          <button className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2">
            Clear cart
          </button>
        </Link>
      </div>
      <OrderSummary quantity={quantity} total={total} />
    </section>
  );
};

export default Cart;
