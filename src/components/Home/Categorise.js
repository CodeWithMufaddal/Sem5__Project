import React from 'react'
import { Link } from 'react-router-dom';
import './Categorise.css'
import MenuIcon from '@mui/icons-material/Menu';

function CategoriseInner(props) {
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

            <CategoriseInner icon={<MenuIcon />} title="All" />
            <Link to="/login"><CategoriseInner title="Login" /></Link>
            <Link to="/orderHistory"><CategoriseInner title="Order History" /></Link>
            <Link to="/productDetail"><CategoriseInner title="product" /></Link>

            <CategoriseInner title="Today's Deals" />
            <CategoriseInner title="New Releases" />
            <CategoriseInner title="Fresh" />
            <CategoriseInner title="Sell" />
            <CategoriseInner title="Health, Household & Personal Care" />
            <CategoriseInner title="Best Sellers" />
            <CategoriseInner title="Buy Again" />
            <CategoriseInner title="Customer Service" />
            <CategoriseInner title="Browsing History" />
            <CategoriseInner title="Fashion" />
            <CategoriseInner title="Coupons" />
            <CategoriseInner title="Home Improvement" />
            <CategoriseInner title="Sports, Fitness & Outdoors " />

         </div>



      </div>
   )
}

export default Categorise
