import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/cart/cartSlice";

const SinglePizza = ({ pizza }) => {
  const { id, name, price, description, rating, img_url, isVeg } = pizza;
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);

  const isInCart = () => items.some((item) => item.id === id);

  return (
    <article className="w-full max-w-sm flex flex-col rounded-lg bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer">
      <button type="button" onClick={() => setShowModal(true)}>
        <img
          className="p-8 w-64 h-64 mx-auto mix-blend-multiply"
          src={img_url}
          alt={description}
        />
      </button>
      <div className="flex-1 px-5 pb-5 flex flex-col gap-6">
        <button type="button" onClick={() => setShowModal(true)}>
          <h5 className="truncate text-gray-800 text-xl font-semibold tracking-tight">
            {name}
          </h5>
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{name}</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-3 text-slate-500 text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="flex justify-between p-6 text-lg font-bold leading-relaxed">
                    <div className="text-teal-500 mx-2">★ {rating}</div>
                    <div className="text-orange-600 text-xl">
                      ₹ {price} only
                    </div>
                    {isVeg ? (
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                          />
                        </svg>
                        <div className="text-green-700 mx-2">veg</div>
                      </div>
                    ) : (
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <div className="text-red-700 mx-2"> non-veg</div>
                      </div>
                    )}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-gray-600 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    {isInCart() ? (
                      <button
                        onClick={() => dispatch(remove(pizza))}
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(add({ ...pizza, quantity: 1 }))}
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className="">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-700">₹{price}</span>
            {isInCart() ? (
              <button
                onClick={() => dispatch(remove(pizza))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-red-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(add({ ...pizza, quantity: 1 }))}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-purple-400 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePizza;
