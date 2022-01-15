import React from 'react'
import { Link } from 'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm h-25">
         <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="img/jcLogo.png" alt="" /></Link>
            <form className="d-flex flex-grow-1">
               <input className="form-control me-2" type="search" aria-label="Search" placeholder="Search for The product , Brand and More" />
               <button className="btn btn-outline-success me-4" type="submit">Search</button>
            </form>
            <div className="d-flex align-items-center justify-content-between">

               <div className="nav-item">
                  <Link className="nav-link" to="/"><ShoppingCartIcon className="text-secondary" /> <span className="top-0 start-100 translate-middle badge bg-warning">
                     9
                  </span></Link>
               </div>


               <li className="nav-item py-2">
                  <Link className="btn btn-outline-success me-4" aria-current="page" to="/login">Login</Link>
               </li>
            </div>


         </div>
      </nav>
   )
}

export default Navbar
