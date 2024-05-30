import React from 'react'
import './HomePage.css'
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent'
import FeaturesComponent from '../../components/FeaturesComponent/FeaturesComponent'
import ToolsViewComponent from '../../components/ToolsViewComponent/ToolsViewComponent'
import ReviewComponet from '../../components/ReviewComponent/ReviewComponet'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  // const navigate = Navigate(); 
  const navigate = useNavigate();

  const gotToAbout = () => {
    navigate('/about')
  }
  return (
    <>
      <div className="overlay-screen">
        <div className="overlay-effect">
          <div className="container">
            <div className="text-center info">
              {/* <img src={logo} alt="brandname" width={300}/> */}
              <h2>  Next Generation C.L.O.B.</h2>
              <p>"OUR MISSION AT TRUE TRADE IS TO DELIVER A TRULY TRANSPARENT TRADING VENUE, BASED ON LOW COST TRANSACTION FEES, 'ZERO' MARKUP SWAP, THE BEST RAW PRICING FOR ALL INSTRUMENTS AND NEVER TAKE A POSITION AGAINST OUR CLIENTS"</p>

              <button type="button" className="btn btn-outline-primary" onClick={gotToAbout}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-screen">
        <div className="container-lg my-3">
          <CarouselComponent/>
        </div>
      </div>
      {/* <hr/> */}
      <div id="feature" className="my-5">
        <FeaturesComponent/>
      </div>
      <div id="tools-view">
        <ToolsViewComponent/>
      </div>

      <div className="home-about-section container my-5">
        <div className="home-about-left-section">
          <img src={require('../../assets/img/home-about-img.webp')} alt="" />
        </div>
        <div className="home-about-right-section">
          <h4>About True Trade Pro</h4>
          <p className="home-about-section-tag-line my-2">Lorem ipsum dolor sit amet.</p>
          <p className="home-about-section-desc my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et, quaerat nesciunt vero ipsum soluta tenetur. Voluptatem error molestias iste? Est inventore veritatis sit officia placeat reiciendis iusto quasi debitis.</p>

          <button type="button" className="btn btn-outline-primary">Dicover True Trade Pro</button>
        </div>
      </div>

      <div className="container my-5">
        <ReviewComponet/>
      </div>
    </>
  )
}
