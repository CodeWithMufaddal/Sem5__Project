import React from 'react'
import './Categorise.css'



function Categorise__inner(props) {
   return (
      <div className="Categorise__list">
         <a href="" className="Categorise__list__link">
            <div className="Categorise__list__inner">
               <div className="Categorise__list__inner__cat">
                  <img
                     className="Categorise__list__inner__cat__img"
                     src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />

               </div>

            </div>

            <div className="Categorise__list__title">{props.title}</div>
         </a>
      </div>
   )
}




function Categorise() {
   return (
      <div className="Categorise">
         <div className="Categorise__inner">
            <div className="Categorise__deep">
               <Categorise__inner title="Top Offers" />
               <Categorise__inner title="Grocery" />
               <Categorise__inner title="Mobiles" />

               <Categorise__inner title="Fashion" />
               <Categorise__inner title="Electronics" />
               <Categorise__inner title="Home" />

               <Categorise__inner title="Appliances" />
               <Categorise__inner title="Travel" />
               <Categorise__inner title="Beauty, Toys & More" />
            </div>
         </div>
      </div>
   )
}

export default Categorise
