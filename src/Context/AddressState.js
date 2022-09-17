import React, { useState } from 'react';
import { AddressContext } from './Context.js';
import { useStateValue } from './StateProvider';


const AddressState = (props) => {
   const PORT = process.env.REACT_APP_PORT;
   const token = localStorage.getItem('token')
   // const [{ address }, dispatch] = useStateValue();
   const [address, setAddress] = useState([]);


   // ========== FetchAddress ==========
   const FetchAddress = async () => {
      if (token) {
         const response = await fetch(`${PORT}/api/Address/AllAddress`, {
            method: 'GET',
            headers: {
               contentType: 'application/json',
               Authorization: token
            }
         })
         let json = await response.json();
         console.log(json);
         // the user just logged in / the user was logged in
         setAddress(json.address)
      }
   }

   // ========== Create Address ==========
   const CreateAddress = async (Country, FullName, MobileNumber, PinCode, House, Street, Landmark, City, State) => {
      // const { } = address;
      console.log(FullName, MobileNumber, PinCode, House, Street, Landmark, "this is")
      let data = { Country, FullName, MobileNumber, PinCode, House, Street, Landmark, City, State }
      console.log(data + " data of CreateAddress");
      let response = await fetch(`${PORT}/api/Address/AddNewAddress`, {
         // let response = await fetch(`http://localhost:5000/api/Address/AddNewAddress`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': token
         },
         body: JSON.stringify(data)
      })
      await response.json()
      window.location.reload()
   }


   // ========== FetchAddress ==========
   const UpdateAddress = async (id, FullName, MobileNumber, PinCode, House, Street, Landmark) => {
      console.log(id, FullName, MobileNumber, PinCode, House, Street, Landmark, "this is")
      let data = { FullName, MobileNumber, PinCode, House, Street, Landmark }
      let response = await fetch(`${PORT}/api/Address/UpdateAddress/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': token
         },
         body: JSON.stringify(data)
      })
      await response.json()
      // FetchAddress()
      window.location.reload()
   }


   // ========== FetchAddress ==========
   const DeleteAddress = async (id) => {
      console.log(id)
      const response = await fetch(`http://localhost:5500/api/Address/DeleteAddress/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': token
         }
      })
   }




   return (
      <AddressContext.Provider value={{ FetchAddress, CreateAddress, UpdateAddress, DeleteAddress, address, setAddress }} >
         {props.children}
      </AddressContext.Provider>
   )
};

export default AddressState;

