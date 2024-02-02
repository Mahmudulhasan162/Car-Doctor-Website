/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id,img, title, price} = service 
  return (
    <div className="card border rounded-xl border-[#E8E8E8] mb-6 mr-6">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-around">
        <p className="text-[#FF3811] text-xl font-semibold">Price : ${price}</p>
        <Link to={`/checkout/${_id}`}><FaArrowRightLong className="text-xl text-[#FF3811]" /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
