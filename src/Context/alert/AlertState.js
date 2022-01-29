import Context from '../Context';
import { useState } from 'react';


const AlertState = (props) => {
   const [alert, setAlert] = useState(null)

   const ShowAlert = (message, type, icon) => {   // Alert Func..
      setAlert({
         icon: icon,
         msg: message,
         type: type
      })

      setTimeout(() => {
         setAlert(null)
      }, 1000)
  console.log(`Alert`)    
   }










   return (
      <Context.Provider value={{ alert , ShowAlert }}>
         {props.children}
      </Context.Provider>
   )
}

export default AlertState;

