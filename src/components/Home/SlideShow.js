import React, { useState, useEffect, useRef } from 'react'
const delay = 4000;


const SlideShow__img = [
   // "https://m.media-amazon.com/images/I/41k+tk0Cc6L._SX1500_.jpg",
   // "https://m.media-amazon.com/images/I/618pdE2LxDL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/61l1XuNWaAL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
];


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
            prevIndex === SlideShow__img.length - 1 ? 0 : prevIndex + 1), delay);
      return () => {
         resetTimeout();
      };
   }, [index]);




   return (
      <>
         {
            SlideShow__img.map((img, index) => {
               return <img key={index} src={props.imgsrc} className="SlideShow__img" alt="SlideShow Image" />
            })
         }


      </>
   );
}

export default Slideshow

