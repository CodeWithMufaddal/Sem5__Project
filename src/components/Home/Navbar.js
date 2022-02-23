import './Navbar.css'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "../../Context/StateProvider";
import { ProductContext } from '../../Context/Context';
import SearchBox from './SearchBox';

function Navbar() {

   const [{ basket, user }] = useStateValue();
   const { profile } = useContext(ProductContext)
   const naviget = useNavigate();
   const token = localStorage.getItem("token")


   const handlelogOut = async () => {
      if (token) {
         localStorage.removeItem('token');
         naviget("/login");
         window.location.reload()
         profile()
      }

   }





   return (
      <>
         <nav className="navbar_ shadow-sm">
            <Link to="/">
               <img src="img/jcLogo.png" alt="" className="navbar__logo" />
            </Link>

            <SearchBox />

            {/* ************  Header Options ************ */}
            <div className="navbar__header">

               <div className="dropdown list mx-1">
                  <Link to={!token ? "/login" : "/"} className="dropdown-toggle">
                     <div className="navbar__optionLine1"><span>Hello,{!token ? "Sign in" : user?.name?.split(" ")[0]}</span></div>
                     <span className="navbar__optionLine2 ">
                        Account & List
                     </span>
                  </Link>
                  <div className="dropdown-menu  dropdown__menulist">
                     <ul className=" ">
                        {!token ? <li className="border-bottom p-2">
                           <Link to={!token && "/login"} className="dropdown-item box" >Log in</Link>
                           <span className="text-nowrap px-1">New customer?<Link className=" text-decoration-underline p-2   link-primary" to="/register">Start here.</Link> </span>
                        </li> : <li className="border-bottom text-center d-flex justify-content-center w-100 p-2"> <button className="dropdown-item box" onClick={handlelogOut}>Log Out</button></li>}
                        <li><Link to={token ? "/profile" : "/login"}  className="dropdown-item font-monospace fw-bold " >Your Account</Link></li>
                        <li><Link to={token ? "/orderHistory" : "/login"} className="dropdown-item font-monospace fw-bold" >Your Order</Link></li>
                     </ul>
                  </div>
               </div>


               <div className="navbar__option   m-2">
                  <Link to="/cart">
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
