import React, { useContext } from 'react';
import "./Product.css"
import { AlertContext } from '../../Context/Context';
import { useStateValue } from "../../Context/StateProvider";

const Product = ({ id ,title, price, description, rating, img }) => {

   const { ShowAlert } = useContext(AlertContext);
   const [, dispatch] = useStateValue()

   const addToBasket = (e) => {
      ShowAlert("Product added to basket", "success", "check-circle-fill")
      // dispatch the item into the data layer
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id: id,
            title: title,
            image: img,
            price: price,
            rating: rating,
         },
      });
   };



   return <div className="product">

      {/* <div className="product__container"> */}

      <div className="product__info text-start">
         <p className="product__title title">{title.length <= 50 ? title : `${title.slice(0, 50)}...`}</p>
         <p className="product__price d-flex text-danger">
            <small style={{ fontSize: "10px" }}>₹</small>
            <strong>{price}</strong>
         </p>
         <div className="product__rating">
            {Array(rating).fill().map((_, i) => (
               <p key={i}>⭐</p>
            ))}
         </div>
      </div>
      <div className="product__img">
         <img src={img} className="product__image" alt="" />
      </div>
      <div className="">
         <button onClick={addToBasket} className="box">Add to Basket</button>
      </div>


      {/* </div>   */}

   </div >
};

export default Product;