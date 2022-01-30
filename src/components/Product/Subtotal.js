import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { getBasketTotal } from "../../Context/state/reducer";
import { useStateValue } from "../../Context/state/StateProvider";


const Subtotal = () => {




   const [{ basket }, dispatch] = useStateValue();




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
            </>
         )}

         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandsSeparator={true}
         prefix={"₹"}
      />

      <button className="box">Proceed to Buy</button>


   </div>;
};

export default Subtotal;
