import React, { useEffect } from 'react';
import './HomePage.css'
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent'
import FeaturesComponent from '../../components/FeaturesComponent/FeaturesComponent'
import ToolsViewComponent from '../../components/ToolsViewComponent/ToolsViewComponent'
import ReviewComponet from '../../components/ReviewComponent/ReviewComponet'
import { useNavigate, Link, } from 'react-router-dom'
// import { useEffect } from 'react'

export default function HomePage() {
  // const navigate = Navigate(); 
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gotToAbout = () => {
    navigate('/about')
  }
  return (
    <>
      <div className="main-screen-overlay">

        <div className="main-screen row p-0 m-0">
          <div className="left col-12 col-sm-9 col-lg-9 p-0 m-0">
            <div className="">
              <h4>Next Generation C.L.O.B.</h4>
            
              <p className='text-justify'>Our mission at true trade is to deliver a truly transparent trading venue, based on low cost transaction fees, 'zero' markup swap, the best raw pricing for all instruments and never take a position against our clients</p>
              
              <Link to={'/about'} className="btn btn-sm btn-outline-primary" >Learn more</Link>
            </div>
          </div>
          <div className="right col-0 col-sm-3 col-lg-3 p-0 m-0">
            {/* <img src={require('../../assets/images/img123-removebg-preview.png')} alt="" /> */}
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
