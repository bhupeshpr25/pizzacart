import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/cart/cartSlice";

import { Link } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const CartItem = ({ item }) => {
  const { id, image, title, price, quantity } = item;

  const dispatch = useDispatch();

  return (
    <article className="p-4 flex items-center gap-4 rounded-lg border border-gray-200">
      <Link to={`/${id}`}>
        <img
          src={image}
          alt={title}
          className="p-1 md:p-4 w-16 h-16 md:w-32 md:h-32 mix-blend-multiply"
        />
      </Link>
      <div className="flex-1">
        <Link to={`/${id}`}>
          <h5 className="font-bold text-gray-800">{title}</h5>
        </Link>
        <span className="text-gray-700">₹{price}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => dispatch(decrement(item))}>
              <MinusIcon className="w-6 h-6" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(increment(item))}>
              <PlusIcon className="w-6 h-6" />
            </button>
          </div>
          <button>
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
