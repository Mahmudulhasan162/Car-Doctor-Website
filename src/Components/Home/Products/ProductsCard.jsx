const ProductsCard = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div>
        <div className="card h-[400px] border-2 rounded-xl border-[#E8E8E8] mb-16 mr-24">
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-[250px] p-5"
        />
      </figure>
        <div className="rating mt-5 flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
     <div className="card-body text-center">
        <h2 className="card-title mx-auto text-2xl font-bold">{name}</h2>
        <div className="flex items-center justify-around">
        <p className="text-[#FF3811] text-xl font-semibold">Price : ${price}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
