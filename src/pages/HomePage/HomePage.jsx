import React, { useEffect } from "react";
import "./HomePage.scss";
// import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import FeaturesComponent from "../../components/FeaturesComponent/FeaturesComponent";
import ToolsViewComponent from "../../components/ToolsViewComponent/ToolsViewComponent";
import ReviewComponet from "../../components/ReviewComponent/ReviewComponet";
import { useNavigate, Link, useLocation } from "react-router-dom";
// import { useEffect } from 'react'

export default function HomePage() {
  // const navigate = Navigate();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [location]);

  // const gotToAbout = () => {
  //   navigate("/about");
  // };
  return (
    <>
      <div className="home-page">
        <div className="main-screen-overlay">
          <div className="main-screen p-0 m-0">
            <div className="col-12 col-sm-9 col-lg-7 p-0 m-0">
              <div className="">
                <h2>Next Generation C.L.O.B.</h2>

                <p className="text-justify">
                  Our mission at true trade is to deliver a truly transparent
                  trading venue, based on low cost transaction fees, 'zero'
                  markup swap, the best raw pricing for all instruments and
                  never take a position against our clients
                </p>

                <Link to={"/about"} className="btn btn-sm btn-outline-primary">
                  Learn more
                </Link>
              </div>
            </div>
            {/* <div className="right col-0 col-sm-3 col-lg-5 p-0 m-0">
              <img src={require("../../assets/img/file.png")} alt="" />
            </div> */}
          </div>
        </div>
        <div className="carousel-screen">
          <div className="container-lg my-3">{/* <CarouselComponent /> */}</div>
        </div>
        {/* <hr/> */}
        <div id="feature" className="my-5">
          <FeaturesComponent />
        </div>
        <div id="tools-view">
          <ToolsViewComponent />
        </div>

        <div className="row home-about-section container my-2">
          <div className="col-md-6 col-lg-6 mb-3 home-about-left-section">
            <img
              style={{ width: "100%", borderRadius: "8px" }}
              src={require("../../assets/updated_graphics/about true trade.jpg")}
              alt=""
            />
          </div>
          <div className="col-md-6 col-lg-6 home-about-right-section">
            <h4>About True Trade Pro</h4>
            <p className="home-about-section-tag-line my-2">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="home-about-section-desc my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident et, quaerat nesciunt vero ipsum soluta tenetur.
              Voluptatem error molestias iste? Est inventore veritatis sit
              officia placeat reiciendis iusto quasi debitis.
            </p>

            <Link
              to={"/about"}
              type="button"
              className="btn btn-outline-primary"
            >
              Dicover True Trade Pro
            </Link>
          </div>
        </div>

        <div id="review-break" className="container p-0">
          <ReviewComponet />
        </div>
      </div>
    </>
  );
}
