import React from "react";

const OrderSummary = ({ quantity, total }) => {
  return (
    <div className="p-4 md:p-8 py-8 md:w-1/3 sticky top-20 rounded-lg bg-gray-100">
      <h2 className="mb-2 text-xl font-bold text-gray-800">Order summary</h2>
      <div className="mb-4">
        <p className="text-gray-700">
          Items: <span className="font-bold">{quantity}</span>
        </p>
        <p className="text-gray-700">
          Total: <span className="font-bold">₹{total}</span>
        </p>
      </div>
      <button className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
