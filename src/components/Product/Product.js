import React, { useContext } from 'react';
import "./Product.css"
import Context from '../../Context/Context';

const Product = ({ title, price, description, rating, img }) => {


   const context = useContext(Context);
   const AddToBasket = () => {
      console.log('add to basket')
      context.ShowAlert("Login Successfull", "success", "check-circle-fill")
   }
   return <div className="product">


      <div className="product__info">
         <p className="product__title">{title.length <= 50 ? title : `${title.slice(0, 50)}...`}</p>
         <p className="product__price d-flex text-danger">
            <small style={{fontSize: "10px"}}>₹</small>
            <strong>{price}</strong>
         </p>
         <div className="product__rating">
            {Array(rating).fill().map((i) => (
               <p>⭐</p>
            ))}
         </div>
      </div>

      <img src={img} alt="" />

      <button onClick={AddToBasket} className="">Add to Basket</button>
   </div>


   // </div >
};








// function Product() {

//    return (
//       <div className="product">
//          <div className="product__info">
//             <p>{title}</p>
//             <p className="product__price">
//                <small>₹</small>
//                <strong>{price}</strong>
//             </p>
//             <div className="product__rating">
//                {/* {Array(rating) */}
//                {/* // .fill() */}
//                {/* // .map((_, i) => ( */}
//                <p>🌟</p>
//                {/* // ))} */}
//             </div>
//          </div>

//          <img src={image} alt="" />

//          <button>Add to Basket</button>
//       </div>
//    );
// }

export default Product;