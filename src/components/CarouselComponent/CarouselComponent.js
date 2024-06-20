import React from "react";
import "./CarouselComponent.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import homeScreen from '../../../assets/img/home-screen.png'
export default function CarouselComponent() {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {/* <div className="col-md-4 img p-0" >
                            <img src={require('../../assets/images/img1.jpg')} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 info" >
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quo velit, possimus architecto quod vero at, distinctio iusto praesentium incidunt quis sapiente ratione! Odio corporis ipsum quo eligendi, in animi!</p>
                            <Link to={'/contact-us'} className="btn btn-sm btn-outline-primary">Learn more</Link>
                        </div> */}
            <div className="col-md-4 img p-0">
              <img src={require("../../assets/images/img1.jpg")} alt="" />
            </div>
            <div className="col-sm-12 col-md-8 info">
              <h4>Who We Are ? </h4>
              <p>
                True Trade Pro LTD, where we uphold 100% Transparency Standards
                and provide an Equal Opportunity Infrastructure for
                institutional and professional market participants. Our platform
                supports desktop, FIX, web, iOS, and Android devices, with
                seamless MetaTrader 4 integration.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="btn btn-sm btn-outline-primary"
              >
                Learn mores
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4 img p-0">
              <img src={require("../../assets/images/img2.jpg")} alt="" />
            </div>
            <div className="col-sm-12 col-md-8 info">
              <h4>Our Products</h4>
              <p>
                we offer 100% Transparency Standards and an Equal Opportunity
                Infrastructure tailored for institutional and professional
                market participants. Our versatile platform supports desktop,
                FIX, web, iOS, and Android devices, seamlessly integrating
                MetaTrader 4 automation addons.
              </p>
              <button
                onClick={() => navigate("/solutions")}
                className="btn btn-sm btn-outline-primary"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4 img p-0">
              <img src={require("../../assets/img/carousel3.jpg")} alt="" />
            </div>
            <div className="col-sm-12 col-md-8 info">
              <h4>Get in Touch</h4>
              <p>
                Feel free to reach out to True Trade Pro LTD for any inquiries
                or to learn more about our services. We're here to assist you in
                exploring our transparent and innovative trading solutions.
              </p>
              <button
                onClick={() => navigate("/contact-us")}
                className="btn btn-sm btn-outline-primary"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
