import React from "react";
import useFetch from "../../hooks/useFetch";
import SinglePizza from "./SinglePizza";

const PizzasList = () => {
  const {
    data: pizzas,
    isLoading,
    error,
  } = useFetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
  return (
    <>
      {error ? (
        <div>error loading pizzas</div>
      ) : isLoading ? (
        <div>loading...</div>
      ) : (
        <section className="max-w-screen-xl mx-auto px-4 py-6 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pizzas.map((pizza) => (
            <SinglePizza key={pizza.id} pizza={pizza} />
          ))}
        </section>
      )}
    </>
  );
};

export default PizzasList;
