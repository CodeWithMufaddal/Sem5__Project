import React from 'react'
import ShowCart from './ShowCart'

function SubCat(props) {
   return (
      <div className="subCat pb-2 my-3 bg-light shadow-sm">
         <div className="SubCat__header d-flex justify-content-between my-2 mx-3 border-bottom border-3 p-2">
            <h2>{props.title}</h2>
            <button type="button" className="btn btn-primary shadow-sm ">VIEW ALL</button>
         </div>
         <div className="SubCat__main d-flex overflow-hidden">
            {/* <div className="left"><img src="" alt="icon" /></div>
            <div className="right"><img src="" alt="icon" /></div> */}
            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />

            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />
            
            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />

            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />

            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />

            <ShowCart Productimg="https://rukminim1.flixcart.com/image/150/150/kkzrpu80/screen-guard/impossible-screen-guard/z/6/h/fitbit-versa-2-smartwatch-pack-of-2-vprime-original-imagy7qknyhyynqy.jpeg?q=70" />





         </div>

        



      </div>
   )
}

export default SubCat


