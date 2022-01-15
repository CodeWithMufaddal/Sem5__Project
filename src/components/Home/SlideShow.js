import React, { useState, useEffect, useRef } from 'react'


// const colors = [
//   "img/adbanner.jpg",
//   "banner.jpg",
//   "https://rukminim1.flixcart.com/flap/50/50/image/6123fd918d20b8e8.jpg?q=50",
//   "https://rukminim1.flixcart.com/flap/50/50/image/ff938f15fd1feb73.jpg?q=50",
//   "https://rukminim1.flixcart.com/flap/50/50/image/6e68305c3ec80a6c.jpg?q=50"
// ];
// const delay = 4000;


function Slideshow() {
  // const [index, setIndex] = useState(0);
  // const timeoutRef = useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);

  //   }
  // }

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(() =>
  //     setIndex((prevIndex) =>
  //       prevIndex === colors.length - 1 ? 0 : prevIndex + 1), delay);
  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);




  return (
    <div id="carouselExampleIndicators" className="carousel slide shadow-sm" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner ">
            <div className="carousel-item active">
               <img src="https://rukminim1.flixcart.com/flap/50/50/image/6123fd918d20b8e8.jpg?q=50" className="d-block w-100" style={{height: "350px"}}  alt="..."/>
            </div>
            <div className="carousel-item">
               <img src="img/banner.jpg" className="d-block w-100" style={{height: "350px"}}  alt="..."/>
            </div>
            <div className="carousel-item">
               <img src="img/adbanner.jpg" className="d-block w-100"  style={{height: "350px"}} alt="..."/>
            </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
      </div>
  );
}

export default Slideshow
