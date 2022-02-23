import React, { useContext } from 'react'
import "./LoginReg.css"
import "./Media_LogReg.css"
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { AlertContext } from '../../Context/Context';



const Login = (props) => {
   const { setCredential, credential, login, ShowAlert } = useContext(AlertContext)
   const naviget = useNavigate();


   const onChange = async (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value })
   }

   const HandleSubmit = async (e) => {
      e.preventDefault();
      if (credential.email === "" || credential.password === "") {
         (ShowAlert("Please Fill the Details", "info", "info-fill"))
      } else {
         const json = await login();
         if (json.success) {
            //redirect
            localStorage.setItem('token', json.token)
            naviget("/");
            window.location.reload()
            ShowAlert("Login Successfull", "success", "check-circle-fill")


         } else {
            ShowAlert("Invelid Email or Password", "danger", "exclamation-triangle-fill")
         }
      }
   }

   // ========= JSX =========
   return (
      <div className="containerr">
         <div className="coverContainer">

            <Link to="/" >
               <div className="headlogo">
                  <img src="img/jcLogo.png" alt="" className="logo" />
               </div>
            </Link>

            <div className="login">
               <form className="px-2 p-2" onSubmit={HandleSubmit} >
                  {/* Input form */}
                  <div className="">
                     <div className="mb-3  Email">
                        <label htmlFor="email" className="form-label"  >Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" aria-describedby="emailHelp" value={credential.email} onChange={onChange} />
                     </div>

                     <div className="mb-3 ">
                        <label htmlFor="password" className="form-label"  >Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={credential.password} onChange={onChange} />
                     </div>

                     <div className="form-check d-flex align-center justify-content-between">
                        <div className="">
                           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                           <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <Link to="/forgotPassword" className="text-primary text-decoration-underline d-flex justify-content-end">Forgot password?</Link>
                     </div>

                     <div className=" d-flex justify-content-center mt-2 container ">
                        <button type="submit" className="btn btn-outline-success w-75 mb-2 px-4">Login</button>
                     </div>
                  </div>

                  {/* OR Divider */}
                  <div className="ordivider">
                     <hr />
                     <span >OR</span>
                     <hr />
                  </div>

                  {/* Log in with Google , Facebook */}
                  <div className="d-flex flex-column  ">
                     <div className="btn-group my-2 ">
                        <Link to="/login" className="btn btn-primary active  googlefblogo" aria-current="page"><ImFacebook /></Link>
                        <Link to="/login" className="btn btn-primary px-5 googlefb">Login With Facebook</Link>
                     </div>
                     <div className="btn-group my-2">
                        <Link to="/login" className="btn btn-danger active googlefblogo" aria-current="page"><FcGoogle /></Link>
                        <Link to="/login" className="btn btn-danger px-5 googlefb">Login With Google</Link>
                     </div>
                  </div>

                  {/* Don't have an account? Register */}
                  <div className="d-flex justify-content-between align-items-center p-1 m-2">
                     <p className="text-secondary d-flex align-items-center ">Don't have an account?</p>
                     <Link to="/register" className="btn btn-outline-success mb-2">Register</Link>
                  </div>
               </form >
            </div>
         </div>
      </div >
   )
}

export default Login
