import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = event =>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const date= form.date.value;
    const email = form.email.value;
    const price = form.price.value;

    const order= {
        customerName: name,
        orderDate: date,
        email: email,
        productPrice: price,
        productImage: img,
        productTitle: title
    }
    console.log(order);

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

  }
  return (
    <div>
      <center>
      <h1>{title}</h1>
      <div className="card shrink-0 w-full bg-[#F3F3F3] my-20 p-14">
        <form className="card-body" onSubmit={handleCheckOut}>
       <div className="grid grid-cols-2 gap-5">
       <div className="form-control">
       <label className="label">
            <span className="label-text">Name</span>
          </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              name="name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
            <input
              type="date"
              className="input"
              name="date"
              required
            />
            </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
            <input
              type="text"
              defaultValue={`$${price}`}
              className="input"
              name="price"
              required
            />
            </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              name="email"
              defaultValue={user?.email}
              required
            />
          </div>
       </div>
       <textarea name="" id="" cols="30" rows="10" className="p-4 my-5 rounded-lg" placeholder="Your Message">
        
       </textarea>
          <div className="form-control mt-6">
            <input type="submit" value="Confirm Order" className="text-white bg-[#FF3811] text-xl font-semibold p-3 rounded-lg"/>
          </div>
        </form>
      </div>
      </center>
    </div>
  );
};

export default CheckOut;
