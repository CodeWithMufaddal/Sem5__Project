import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { getBasketTotal } from "../../Context/reducer";
import { useStateValue } from "../../Context/StateProvider";
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../../Context/Context';


const Subtotal = () => {
   const [{ basket },] = useStateValue();
   let naviget = useNavigate();
   let token = localStorage.getItem('token')
   const { ShowAlert } = useContext(AlertContext);

   const handleProcessToBuy = (e) => {
      if (token) {
         console.log(basket)
         if (basket.length === 0) {
            return ShowAlert("Empty Basket", "danger", "exclamation-triangle-fill")
         } else { naviget("/checkout") }
      } else {
         naviget("/login")
      }

   }

   return <div className="subtotal">
      <CurrencyFormat
         renderText={(value) => (
            <>
               <p className="subtotal__header">
                  {/* Part of the homework */}
                  Subtotal ({basket.length} items): <strong>{value}</strong>
               </p>
               <small className="subtotal__gift">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />This order contains a gift
               </small>
               <button className="box w-100 mt-2 " type="submit" onClick={handleProcessToBuy}>
                  Proceed to Buy
               </button>
            </>
         )}

         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandsSeparator={true}
         prefix={"₹"}
      />
   </div>;
};

export default Subtotal;
