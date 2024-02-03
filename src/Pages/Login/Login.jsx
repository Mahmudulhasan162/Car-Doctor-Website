/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import login from "../../assets/images/login/login.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {Login, googleLogIn} = useContext(AuthContext);
  const [email, setEmail]= useState(" ");
  const [password, setPassword]= useState(" ");
  const Location= useLocation(); 
  const Navigate = useNavigate(); 

    const handleGoogleLogIn = ()=>{
      googleLogIn().then((result)=>{
        Swal.fire({
          title: "Logged In",
          text: "You've successfully logged in",
          icon: "success"
        }); 
        Navigate(Location?.state ? Location.state : "/")
        console.log(result.user)
        
      })
      .catch(error => {
        console.error(error);
      })
     
    }
    const handleLogin = event =>{
        event.preventDefault();
        
        if(email, password){
          Login(email,password).then(result => {
            Swal.fire({
              title: "Logged In",
              text: "You've successfully logged in",
              icon: "success"
            })
          const user= result.user;
          console.log(user)
         
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            title: "User Not Found",
            text: "You're Not a Registered User",
            icon: "error"
          })
        })
        }
      }
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border border-[#D0D0D0] bg-base-100">
            <div className="form-control">
            <h1 className="text-4xl font-semibold text-center mb-10">
                Login
              </h1>
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Confirm Password</span>
              </label>
              <input
              onChange={(e)=>setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>
            <button onClick={handleLogin} className="btn text-white bg-[#FF3811] mt-6">Sign In</button>
            <div className="text-center mx-auto">
              <h1>Or Sign In with</h1>
              <div className="flex items-center gap-5 my-5 justify-center">
                
                <svg
                  className="bg-[#F5F5F8] rounded-full "
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M17.3047 27.1211V16.5346H20.8761L21.407 12.3896H17.3047V9.74948C17.3047 8.55339 17.6379 7.73448 19.3545 7.73448H21.5297V4.03902C20.4714 3.9256 19.4076 3.87084 18.3432 3.87498C15.1863 3.87498 13.0189 5.80214 13.0189 9.34002V12.3819H9.4707V16.5269H13.0267V27.1211H17.3047Z"
                    fill="#3B5998"
                  />
                </svg>
                <svg
                  className="bg-[#F5F5F8] rounded-full "
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.48292 7.697C6.69132 7.697 7.67092 6.7174 7.67092 5.509C7.67092 4.3006 6.69132 3.321 5.48292 3.321C4.27452 3.321 3.29492 4.3006 3.29492 5.509C3.29492 6.7174 4.27452 7.697 5.48292 7.697Z"
                    fill="#0A66C2"
                  />
                  <path
                    d="M9.73673 9.355V21.494H13.5057V15.491C13.5057 13.907 13.8037 12.373 15.7677 12.373C17.7047 12.373 17.7287 14.184 17.7287 15.591V21.495H21.4997V14.838C21.4997 11.568 20.7957 9.055 16.9737 9.055C15.1387 9.055 13.9087 10.062 13.4057 11.015H13.3547V9.355H9.73673ZM3.59473 9.355H7.36973V21.494H3.59473V9.355Z"
                    fill="#0A66C2"
                  />
                </svg>
                <button onClick={handleGoogleLogIn}>
                <svg 
                  className="bg-[#F5F5F8] rounded-full "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_351_972)">
                    <path
                      d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28614V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z"
                      fill="#FBBD00"
                    />
                    <path
                      d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z"
                      fill="#0F9D58"
                    />
                    <path
                      d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.7139Z"
                      fill="#31AA52"
                    />
                    <path
                      d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z"
                      fill="#3C79E6"
                    />
                    <path
                      d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z"
                      fill="#CF2D48"
                    />
                    <path
                      d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z"
                      fill="#EB4132"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_351_972">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                </button>
              </div>
              <h1 className="text-lg font-normal text-[#737373]">Don't have an account? <NavLink to="/signup"><span className="text-lg font-semibold text-[#FF3811]">Sign Up</span></NavLink></h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
