import React, { useEffect, useState } from "react";
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
  // const [data, setData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [mainContent, setMainContent] = useState({});
  const [homePageAbout, sethomePageAbout] = useState({});
  const [status, setStatus] = useState("loading"); // loading, error, success

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

  useEffect(() => {
    const fetchFeaturesData = async () => {
      try {
        const localResponse = await fetch("/data/homePage.json");
        if (!localResponse.ok) {
          throw new Error("Failed to fetch local data");
        }
        const localData = await localResponse.json();
        setFeatureData(localData.features);
        setMainContent(localData.homePageMainContent);
        sethomePageAbout(localData.homePageAbout);
        setStatus("success");
      } catch (localError) {
        console.error("Fetching local data failed:", localError);
        setStatus("error");
      }
    };

    fetchFeaturesData();
  }, [featureData]);

  return (
    <>
      <div className="home-page">
        <div className="main-screen-overlay">
          <div className="main-screen p-0 m-0">
            <div className="col-12 col-sm-9 col-lg-7 p-0 m-0">
              <div className="">
                <h2>{mainContent.title}</h2>

                <p className="text-justify">{mainContent.content}</p>

                <Link to={"/about"} className="btn btn-sm btn-outline-primary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-screen">
          <div className="container-lg my-3">{/* <CarouselComponent /> */}</div>
        </div>
        {/* <hr/> */}
        <div id="feature" className="my-5">
          <FeaturesComponent features={featureData} />
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
            <h4>{homePageAbout.title}</h4>
            <p className="home-about-section-tag-line my-2">
              {homePageAbout.subTtitle}
            </p>
            <p className="home-about-section-desc my-3">
              {homePageAbout.content}
            </p>

            <Link
              to={"/about"}
              type="button"
              className="btn btn-outline-primary"
            >
              {homePageAbout.buttonText}
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
