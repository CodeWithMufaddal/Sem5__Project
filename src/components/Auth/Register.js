import React, {  useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import "./Media_LogReg.css"
import "./LoginReg.css"
import { AlertContext } from '../../Context/Context';




const Register = () => {



   const { register, setRegcredential, regcredential, ShowAlert } = useContext(AlertContext)
   const naviget = useNavigate();


   const onChange = (e) => {
      setRegcredential({ ...regcredential, [e.target.name]: e.target.value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (regcredential.name === "" || regcredential.email === "" || regcredential.password === "") {
         (ShowAlert("Please Fill the Details", "info", "info-fill"))
      }
      else {
         const json = await register();
         if (json.success) {
            //redirect
            localStorage.setItem('token', json.token)
            naviget("/");
            window.location.reload();
            ShowAlert(`${regcredential.name} Your Account Created Succesfully`, "success", "check-circle-fill")
         } else {


            (ShowAlert("User Already exists", "warning", "exclamation-triangle-fill"))

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
               <form className="m-3" onSubmit={handleSubmit}>

                  <div className=""> {/* form input fild and btn */}
                     <div className="mb-3 name">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" id="name" name="name" value={regcredential?.name} placeholder="Enter your username" className="form-control" onChange={onChange} />
                     </div>
                     <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" id="email" name="email" value={regcredential?.email} placeholder="Enter your Email" className="form-control" onChange={onChange} aria-describedby="emailHelp" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" id="password" name="password" value={regcredential?.password} placeholder="Enter your Password" className="form-control" onChange={onChange} minLength={3} />
                     </div>

                     <div className="form-check ">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                     </div>

                     <div className=" d-flex justify-content-center mt-2 container ">
                        <button type="submit" className="btn btn-outline-success w-75 mb-2 px-4 ">Create Account</button>
                     </div>
                  </div>

                  <div className="ordivider">
                     <hr />
                     <span >OR</span>
                     <hr />
                  </div>

                  <div className="d-flex flex-column  ">
                     <div className="btn-group my-2  ">
                        <a href="/" className="btn btn-primary active" aria-current="page"><ImFacebook /></a>
                        <a href="/" className="btn btn-primary px-5 googlefb">Register With Facebook</a>
                     </div>
                     <div className="btn-group my-2 ">
                        <a href="/" className="  btn btn-danger active" aria-current="page"><FcGoogle /></a>
                        <a href="/" className="btn btn-danger px-5 googlefb ">Register With Google </a>
                     </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center ">
                     <p className="text-secondary d-flex align-items-center ">Already have an Account?</p>
                     <Link to="/login" className="btn btn-outline-success mb-2">Login</Link>
                  </div>
               </form >
            </div>
         </div>
      </div>
   )
}

export default Register
