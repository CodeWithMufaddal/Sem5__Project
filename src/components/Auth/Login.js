import React from 'react'
import "./LoginReg.css"
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';


const Login = (props) => {
   return (
      <>
         <form className="container bg-light my-5 login" >
            <div className="mb-3 ">
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
               <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>

            <div className=" d-flex justify-content-between align-items-center">

               <button type="submit" className="btn btn-outline-success  mb-2 px-4 bold">Login</button>
               <Link to="/forgotPassword" className="text-primary text-decoration-underline d-flex justify-content-end">Forgot password?</Link>
            </div>


            <div className="ordivider">
               <hr />
               <span >OR</span>
               <hr />
            </div>

            <div className="d-flex flex-column ">
               <div class="btn-group my-2">
                  <a href="#" class="btn btn-primary active" aria-current="page"><ImFacebook /></a>
                  <a href="#" class="btn btn-primary px-5">Login With Facebook</a>
               </div>
               <div class="btn-group my-2 ">
                  <a href="#" class="btn btn-danger active" aria-current="page"><FcGoogle /></a>
                  <a href="#" class="btn btn-danger px-5">Login With Google</a>
               </div>
            </div>
            <div className="d-flex justify-content-between">
               <p className="text-secondary d-flex align-items-center ">Don't have an account?</p>
               <Link to="/register" className="btn btn-outline-success mb-2">Register</Link>
            </div>
         </form >
      </>
   )
}

export default Login
