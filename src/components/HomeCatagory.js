import React from 'react'
import './Flipcart.css';

function HomeCatagory(props) {
   return (
         <div className="cartShow__catagory__cart">
            <div className="cartShow__catagory__cart__product1">
               <div className="">
                  <a className="cartShow__product__link" href="">
                     <div className="cartShow__product__link__in">
                        <div className="cartShow__product__link__inner">
                           <img src={props.Productimg} alt="" className="cartShow__product__img" />
                        </div>
                     </div>
                     <div className="cartShow__title">Men's Shirt and Trouser F..</div>
                     <div className="text-success">Top Picks</div>
                     <div className="text-secondary">Buy Now!</div>
                     <div className=""></div>
                  </a>
               </div>
            </div>

         </div>
      
   )
}

export default HomeCatagory
