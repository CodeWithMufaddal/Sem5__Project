import React from 'react'


function ShowCart(props) {
   return (
      <div id="carouselExampleIndicators" className="carousel slide w-25 h-25 mb-1"
         style={{ height: "150px" }}
         data-bs-ride="carousel">

         <div className="carousel-inner">
            <div className="carousel-item active">
               <img src="img/adbanner.jpg" className="d-flex m-2" style={{ height: "150px", width: "150px" }} alt="..." />

               <div className="footer d-flex flex-column text-center">
               <span className="text">Men's Shirt And Trouser F...</span>
               <small className=" text-green-500">Top Picks</small>
               <small>Grab Now!</small>

               </div>
            </div>
          



















         </div>
     
      </div>
   )
}
export default ShowCart
