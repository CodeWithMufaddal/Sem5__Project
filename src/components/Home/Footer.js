import React from 'react'
import StorefrontIcon from '@mui/icons-material/StorefrontTwoTone';
import HelpIcon from '@mui/icons-material/Help';
import { orange, red, blue } from '@mui/material/colors';
import CopyrightIcon from '@mui/icons-material/Copyright';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

function Footer(props) {
   return (
      <>
         <div className={`Footer ${props.footerStyle}`}   >

         <div className="go__top">
            <div className="Back__to__top">Back to top</div>
         </div>

         <div className="Footer__main container~">

            <div className="tableContent ">
               <div className="Footer__logo">
                  <div className="Footer__background__logo"></div>
                  <img src="img/jcLogo.png" className="" alt="" />
               </div>
               <div className="tableContent__inner">

                  <div className="tableContent__header">
                     ABOUT</div>
                  <a className="tableContent__main" href="/">Contact Us</a>
                  <a className="tableContent__main" href="/">About Us</a>
                  <a className="tableContent__main" href="/">Corporate</a>
                  <a className="tableContent__main" href="/">Information</a>
               </div>

               <div className="tableContent__inner">
                  <div className="tableContent__header">
                     Help</div>
                  <a className="tableContent__main" href="/">Payment</a>
                  <a className="tableContent__main" href="/">Shipping</a>
                  <a className="tableContent__main" href="/">Cancellation & Returns
                  </a>
                  <a className="tableContent__main" href="/">FAQ</a>
                  <a className="tableContent__main" href="/">Report</a>
                  <a className="tableContent__main" href="/">Infringement</a>
               </div>






               <div className="tableContent__inner">
                  <div className="tableContent__header">
                     SOCIAL</div>
                  <div className="d-flex">
                     <div className="d-flex flex-column mx-1 ">
                        <FacebookIcon className="my-1" sx={{ color: blue[600] }} />
                        <TwitterIcon className="my-1" sx={{ color: blue[300] }} />
                        <YouTubeIcon className="my-1" sx={{ color: red[500] }} />
                        <LinkedInIcon className="my-1" color="primary" />
                     </div>
                     <div className="">
                        <a className="tableContent__main" >
                           FaceBook </a>
                        <a className=" tableContent__main">
                           Twitter</a>
                        <a className="tableContent__main" >
                           Youtube</a>
                        <a className="tableContent__main" >
                           LinkedIn</a>
                     </div>
                  </div>
               </div>

               <div className="tableContent__inner">
                  <div className="tableContent__header">
                     POLICY</div>
                  <a className="tableContent__main" href="/">Return Policy</a>
                  <a className="tableContent__main" href="/">Terms Of Use</a>
                  <a className="tableContent__main" href="/">Security</a>
                  <a className="tableContent__main" href="/">Privacy</a>
                  <a className="tableContent__main" href="/">EPR Compliance</a>
               </div>




            </div>


         </div>


         <div className="Footer_Bootem">
            <ul className="Footer_Bootem_line">
               <li><StorefrontIcon sx={{ color: orange["500"] }} />Sell On Jamali-Collection</li>

               <li><HelpIcon sx={{ color: orange["500"] }}

               />Help Center</li>

               <li><CopyrightIcon
                  className="mb-2"
                  sx={{ fontSize: 15 }}
               />2021-2022 Jamali-Collection.com</li>

               <li><img className="img" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" alt="Secure Payment" /></li>
            </ul>
         </div>
      </div>
      </>
   )
}

export default Footer