import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "../../Context/state/StateProvider";
import './Navbar.css'

function Navbar() {

   const [{ basket, user }, dispatch] = useStateValue();


   return (
      <>
         <nav className="navbar_ shadow-sm">
            <Link to="/">
               <img src="img/jcLogo.png" alt="" className="navbar__logo" />
            </Link>

            <div className="navbar__search ">
               <input className="navbar__searchInput" type="text" name="" id="" placeholder="Search for brand and more" />
               <div className="navbar__searchIconDiv " >
                  <SearchIcon fontSize="large" className="navbar__searchIcon" />
               </div>
            </div>


            {/* ************  Header Options ************ */}
            <div className="navbar__header">
               <Link to="/login" className="navbar__option d-none d-md-flex ">
                  <span className="navbar__optionLine1 ">Hello,Guest</span>
                  <span className="navbar__optionLine2 "> Login</span>
               </Link>
           
               <Link to="/orderhistory" className="navbar__option d-none d-md-flex">
                  <span className="navbar__optionLine1">Return</span>
                  <span className="navbar__optionLine2">& Orders</span>
               </Link>


               <div className="navbar__option   m-2">
                  <Link to="/checkout">
                     <ShoppingCartIcon className="text-secondary  basket " /> <span className="
                      navbar__optionLine1 top-0 start-100 translate-middle badge bg-warning p-1">
                    {basket?.length}
                     </span>
                  </Link>
               </div>
            </div>


         </nav>








      </>



   )
}

export default Navbar
