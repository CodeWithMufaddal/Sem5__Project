import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';

const Register = () => {
   return (
      <form className="container bg-light my-5 rounded shadow login" >


         <div className="d-flex flex-column  ">
            <div class="btn-group my-2  ">
               <a href="#" class="btn btn-primary active" aria-current="page"><ImFacebook /></a>
               <a href="#" class="btn btn-primary px-5">Register With Facebook</a>
            </div>
            <div class="btn-group my-2 ">
               <a href="#" class="  btn btn-danger active" aria-current="page"><FcGoogle /></a>
               <a href="#" class="btn btn-danger px-5 ">Register With Google </a>
            </div>
         </div>


         <div className="ordivider">
            <hr />
            <span >OR</span>
            <hr />
         </div>

         <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>
         <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
         </div>
         <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
         </div>



         <div className="d-flex justify-content-between m-3">
            <Link to="/register" className=" shadow-sm btn btn-outline-success mb-2 w-100">Create Account</Link>
         </div>
      </form >
   )
}

export default Register
