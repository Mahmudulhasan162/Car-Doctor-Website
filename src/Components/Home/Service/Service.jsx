/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Service</h1>
                <h1 className="text-5xl font-bold text-black">Our Service Area</h1>
                <p className="w-2/4 mx-auto text-base font-normal text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10">
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
            </div>
            <div className="flex justify-center mb-20">
            <button className="btn btn-outline btn-error text-lg font-semibold">More Services</button>
            </div>
        </div>
    );
};

export default Service;