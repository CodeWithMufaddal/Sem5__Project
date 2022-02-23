import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "../../Context/StateProvider";

function CheckoutProduct({ indexx, id, image, title, price, rating, hideButton }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <div className="checkoutProduct__index  ">
        <span >{indexx}</span>
      </div>
      <div className="checkoutProduct__img">
        <img className='checkoutProduct__image' src={image} alt="no" />
      </div>

      <div className='checkoutProduct__info'>
        <div className="">

          <p className='title checkoutProduct__title '>{title}</p>
          <p className="checkoutProduct__price d-flex  text-danger  ">
            <small style={{ fontSize: "10px" }}>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i} >⭐</p>
              ))}
          </div>
        </div>
        <div className="">
          {!hideButton && (
            <button className="box" onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </div >
  )
}

export default CheckoutProduct