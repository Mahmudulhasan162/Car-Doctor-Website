/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({service}) => {
    const {img, title, price} = service 
  return (
    <div className="card border rounded-xl border-[#E8E8E8] mb-6 mr-6">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body grow">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-around">
        <p className="text-[#FF3811] text-xl font-semibold">Price : ${price}</p>
        <FaArrowRightLong className="text-xl text-[#FF3811]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
