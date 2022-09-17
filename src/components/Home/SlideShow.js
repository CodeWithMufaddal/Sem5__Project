import React, { useState, useEffect, useRef } from 'react';
import "./SlideShow.css"
const delay = 5000;




const SlideshowImg = [
   "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/61yYX4j5gtL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/51GfbsdnQvL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/81+00MxHmrL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/61-HbB2UbeL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/71JQj-h-ewL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
]


function Slideshow(props) {
   const [index, setIndex] = useState(0);
   const timeoutRef = useRef(null);

   function resetTimeout() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);

      }
   }

   useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(() =>
         setIndex((prevIndex) =>
            prevIndex === SlideshowImg.length - 1 ? 0 : prevIndex + 1), delay);
      return () => {
         resetTimeout();
      };
   }, [index]);





   return (
      <>
         <div className="slideshow" >
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
               {SlideshowImg.map((SlideshowImg, index) => 
               <img
                  className="SlideShow__img"
                  key={index}
                  src={SlideshowImg}
                  alt="Slider"
               />)}
            </div>
         </div>
      </>


   );
}

export default Slideshow

