import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <div className="overlay-screen">
        <div className="overlay-effect">
          <div className="container">
            <div className="text-center info">
              {/* <img src={logo} alt="brandname" width={300}/> */}
              <h2>Next Generation C.L.O.B.</h2>
              <p>"OUR MISSION AT TRUE TRADE IS TO DELIVER A TRULY TRANSPARENT TRADING VENUE, BASED ON LOW COST TRANSACTION FEES, 'ZERO' MARKUP SWAP, THE BEST RAW PRICING FOR ALL INSTRUMENTS AND NEVER TAKE A POSITION AGAINST OUR CLIENTS"</p>

              <button type="button" className="btn btn-outline-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
