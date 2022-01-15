import React from 'react'
import { Link } from 'react-router-dom'


const ForgotPass = () => {
   return (
      <>
         <form className="container bg-light my-5 login" >
            <div className="mb-3 ">
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               <div id="emailHelp" class="form-text">We'll send you an OTP on Your Email to Reset Password.</div>
            </div>

            <button type="submit" className="btn btn-outline-success  mb-2 px-4 bold">submit</button>



         </form >
      </>
   )
}

export default ForgotPass
