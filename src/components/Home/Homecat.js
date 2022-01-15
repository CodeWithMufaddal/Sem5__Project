import React, { useState } from 'react'
import './Homecat.css'
import HomeProductLink from './HomeCatagory'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Homecart(props) {



   return (
      <div className="cartShow">
         <div className="cartShow__inner">
            <div className="cartShow__header">
               <div className="">
                  <h2 className="cartShow__header__title">{props.title}</h2>
                  <div className="cartShow__header__btn">
                     <a className="cartShow__header__btn__link" href="">VIEW ALL</a>
                  </div>
               </div>
               <h3 className="subTitle ">From ₹199</h3>
            </div>
            {/* ======== Catagory Cart ======= */}
            <div className="">
               <div className="cartShow__main">
                  <div className="cartShow__main__inner">
                     <div className="cartShow__catagory" id="cartShow__catagory">


                        <HomeProductLink Productimg="https://rukminim1.flixcart.com/image/150/150/kri3xjk0/fabric/g/m/w/no-unstitched-shirt-pan-indian-fashionista-original-imag5aautxyhecdw.jpeg?q=70" />


                        <HomeProductLink Productimg="https://rukminim1.flixcart.com/image/150/150/kt7jv680/screen-guard/edge-to-edge-screen-guard/m/n/c/ml-ismart-dz09-scmartwatch-vprime-original-imag6hkpafncfa2b.jpeg?q=70" />


                        <HomeProductLink Productimg="https://rukminim1.flixcart.com/image/150/150/kuvkcy80/headphone/7/7/c/air-tune-buds-true-wireless-bluetooth-headset-avlokan-original-imag7wfdyg39hg2v.jpeg?q=70" />


                        <HomeProductLink Productimg="https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70" />


                        <HomeProductLink Productimg="" />
                        <HomeProductLink />
                        <HomeProductLink />

                     </div>

                     {/* ========== left arrow ========= */}
                     {/* <div className="ArrowTest" onClick={BackwardIos} >
                        <div className="leftArrow">
                           <ArrowBackIosNewIcon />
                        </div>
                     </div> */}


                     {/* ========== Right arrow ========= */}
                     {/* <div className="ArrowRight" onClick={ForwardIos}>
                        <div className="rightArrow">
                           <ArrowForwardIosIcon />

                        </div> 
                     </div>
                        */}
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}



function Homecat() {
   return (
      <div>
         <Homecart title="Deal Of The Day"  />

         <Homecart title="Top Deals" />
         <Homecart title="Top Picks" />

         <Homecart title="Letest Launch" />
         <Homecart title="Best Deals" />
      </div>
   )
}

export default Homecat


