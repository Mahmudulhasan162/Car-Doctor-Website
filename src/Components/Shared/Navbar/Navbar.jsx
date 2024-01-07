import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
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
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
    <Link to="/"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-10 font-semibold text-xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className="text-2xl flex p-10 space-x-4 items-center">
    <BsCart></BsCart>
    <IoSearchOutline/>
    </div>
    <a className="px-6 py-3 border border-[#FF3811] text-[#FF3811] text-lg font-semibold rounded-md">Appointment</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;