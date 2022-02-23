import React from 'react'
import { Link } from 'react-router-dom';
import './Categorise.css'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Categorise__inner(props) {
   return (
      <div className={`Categorise__listItem `}>

         <span>
            {props.icon}
         </span>
         <span className="Categorise__list__title ">
            {props.title}
         </span>
      </div>
   )
}





function Categorise() {
   return (
      <div className="Categorise d-flex p-2  ">

         <div className="Categorise__list">

            <Categorise__inner icon={<MenuIcon />} title="All" />
            <Link to="/login"><Categorise__inner title="Login" /></Link>
            <Link to="/orderHistory"><Categorise__inner title="Order History" /></Link>
            <Link to="/productDetail"><Categorise__inner title="product" /></Link>

            <Categorise__inner title="Today's Deals" />
            <Categorise__inner title="New Releases" />
            <Categorise__inner title="Fresh" />
            <Categorise__inner title="Sell" />
            <Categorise__inner title="Health, Household & Personal Care" />
            <Categorise__inner title="Best Sellers" />
            <Categorise__inner title="Buy Again" />
            <Categorise__inner title="Customer Service" />
            <Categorise__inner title="Browsing History" />
            <Categorise__inner title="Fashion" />
            <Categorise__inner title="Coupons" />
            <Categorise__inner title="Home Improvement" />
            <Categorise__inner title="Sports, Fitness & Outdoors " />

         </div>



      </div>
   )
}

export default Categorise
