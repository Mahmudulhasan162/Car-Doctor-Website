import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdLogOut } from "react-icons/io";


const Navbar = () => {
    const {user, Logout}= useContext(AuthContext);

    const handleLogout = () =>{
        Swal.fire({
          title: "Do you want to Logout?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `No`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Logout().then(()=>{
              Swal.fire("Logged Out", "Thank You", "success");
            })
          } else if (result.isDenied) {
            Swal.fire("Didn't logged out", "", "info");
          }
        });
    }
    return (
        <div>
            <div className="navbar bg-base-100 my-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
    <Link to="/"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-10 font-semibold text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="text-2xl flex p-10 space-x-4 items-center">
    <BsCart></BsCart>
    <IoSearchOutline/>
                {user &&  <img className="rounded-full border-2 border-black h-10 w-10" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/StgTNjj/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"} alt="" />}
            { user && <button onClick={handleLogout}> <IoMdLogOut /></button> }
    </div>
    <button className="btn btn-outline btn-error text-lg">Appointment</button>
    
  </div>
  
</div>
        </div>
    );
};

export default Navbar;