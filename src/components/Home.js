import React from "react";
import Filters from "./Filters";
import { CartState } from "../context/Context";
import Singleproduct from "./singleproduct";
const Home = () => {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div>
      <Filters />
      <div className="productContainer">
        {products.map((item) => (
          <Singleproduct item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
