import React from 'react'
import './offers.css'
import exclusive_image from '../../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offerinfo">

        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>

        <button className='offer-btn'>Check Now</button>
      </div>
      <div className="model">
        <img src={exclusive_image} alt="" />
      </div>


    </div>
  )
}

export default Offers
