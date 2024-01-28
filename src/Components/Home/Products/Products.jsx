import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="text-center space-y-5">
        <h1 className="text-xl font-bold text-[#FF3811]">Popular Products</h1>
        <h1 className="text-5xl font-bold text-black">Browse Our Products</h1>
        <p className="w-2/4 mx-auto text-base font-normal text-[#737373]">
          t Car engine products encompass a range of components and systems
          vital for an automobile's propulsion. These include internal
          combustion engines, electric motors, fuel delivery systems, cooling
          systems, and exhaust systems. They are designed to generate power
          efficiently, ensuring optimal vehicle performance and reliability on
          the road.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
        {products.map((product) => (<ProductsCard key={product._id} product={product}></ProductsCard>))}
      </div>
      <div className="flex justify-center mb-20">
        <button className="btn btn-outline btn-error text-lg font-semibold">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
