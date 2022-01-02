import React from 'react'
import { Link } from 'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
         <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="img/jcLogo.png" alt="" /></Link>
            <form className="d-flex flex-grow-1">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" placeholder="Search for The product , Brand and More" />
               <button className="btn btn-outline-success me-4" type="submit">Search</button>
            </form>
            <div className="d-flex align-items-center justify-content-between">

               <div className="nav-item">
                  <a className="nav-link" href="#"><ShoppingCartIcon className="text-secondary" /> <span class=" top-0 start-100 translate-middle badge bg-warning">
                     9
                  </span></a>
               </div>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                     <li className="nav-item dropdown d-flex align-items-center me-4  ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           More
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a className="dropdown-item" href="#">Action</a></li>
                           <li><a className="dropdown-item" href="#">Another action</a></li>
                           <li><hr className="dropdown-divider" /></li>
                           <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                     </li>

                     <li className="nav-item py-2">
                       <a className="btn btn-outline-success me-4" aria-current="page" href="#">Login</a>
                     </li>

                  </ul>

               </div>
            </div>


         </div>
      </nav>
   )
}

export default Navbar
