import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Categorise from '../Home/Categorise';
import { useStateValue } from "../../Context/state/StateProvider";
import './CheckOut.css'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (<>
    <Navbar />
    <Categorise />
    <div className="checkout">
      <div className="checkout__left">


        <div>
          <h3>Hello, {user?.email}</h3>
          <h3 className="fs-2 checkout__title">Shopping Cart</h3>

          {basket.map((item , i) => (
            <CheckoutProduct
            index={i+1}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
    <Footer />
  </>
  );
}

export default Checkout;