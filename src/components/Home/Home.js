import React from 'react';
import './Home.css';
import Slideshow from './SlideShow';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';


const Home = () => {
   return <div className="home">
      <div className="home__container">
         <div className="SlideShow">
            {SlideshowImg.map((SlideShow, index) => {
               return <Slideshow key={index} className="SlideShow__img m-0" imgsrc={SlideShow} />
            })}
         </div>

         <div className="home__row">
            <Product
               title="Dennis Lingo Men's Solid Slim Fit Casual Shirt"
               img="https://m.media-amazon.com/images/I/61Z4RuwOZeL._AC_UL480_FMwebp_QL65_.jpg"
               price="674"
               rating={4} />
            <Product
               title="Gadgets Appliances Men's Slim Fit Shirt ( Black )"
               img="https://m.media-amazon.com/images/I/61tcWabN6KL._AC_UL480_FMwebp_QL65_.jpg"
               price="549"
               rating={3} />

         </div>

         <div className="home__row">
            <Product
               title="Juârez Acoustic Guitar, 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black"
               img="https://m.media-amazon.com/images/I/71y1TJbygLL._AC_UL480_FMwebp_QL65_.jpg"
               price="2,649"
               rating={4} />

            <Product
               title="boAt Bassheads 242 in Ear Wired Earphones with Mic(Carbon Black)"
               img="https://m.media-amazon.com/images/I/5107rSB7r-L._AC_UL480_FMwebp_QL65_.jpg"
               price="499"
               rating={4} />

            <Product
               title="Redgear Pro Wireless Gamepad (Compatible with Windows 7/8/8.1/10 only)"
               img="https://m.media-amazon.com/images/I/51300qVfYmL._AC_UY327_FMwebp_QL65_.jpg"
               price="1699"
               rating={4} />
         </div>

         <div className="home__row">
            <Product
               title="OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black) (2021 Model)"
               img="https://m.media-amazon.com/images/I/41rUpquzA5S.jpg"
               price="45,999.00"
               rating={5} />
         </div>

         <div className="product__case">
            {productCat.map((img, index) => {
               return <HomeCat key={index} imgsrc={img} />
            })}
         </div>


      </div>
   </div>;
};

export default Home;




let productCat = [
   // array --- 1
   [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
   ],

   // array --- 2
   [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
   ],
   // array --- 3
   [

      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
   ],

   // array --- 4
   [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
   ],

   // array --- 5
   [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
   ],
   // array --- 6
   [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"
   ]
]

function HomeCat(props) {
   return <div className="productCat">
      <div className="productCat__main">
         {/* Header--1    */}
         <div className="productCat__title">
            <span className="productCat__titletext">up to 70% off | Electronics clearance store</span>
         </div>

         {/* main--2    */}
         <div className="productCat__main">
            {props.imgsrc.length === 1 ? <img src={props.imgsrc} alt="product Single img" className="productCat__img" /> :
               <div className="productCat__mainGrid">
                  {props.imgsrc.map((indexedimg, index) => {
                     return <img key={index} src={indexedimg} alt="productcat img" className="productCat__img"></img>
                  })}
               </div>
            }
         </div>

         {/* bottom--3    */}
         <div className="productCat__Bottom">
            <Link to="/ProductList" className="productCat__disc">
               See More
            </Link>
         </div>

      </div>
   </div>

}

let SlideshowImg = [
   // "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/61yYX4j5gtL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/51GfbsdnQvL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/81+00MxHmrL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/61-HbB2UbeL._SX3000_.jpg",
   // "https://m.media-amazon.com/images/I/71JQj-h-ewL._SX3000_.jpg",
   "https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
]
