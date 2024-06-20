import React from "react";
import "./ToolsViewComponent.css";
import { useNavigate } from "react-router-dom";

export default function ToolsViewComponent() {
  const navigate = useNavigate();

  const handleNavigateClick = (targetUrl) => {
    // Navigate to the desired page upon button click
    navigate("/solutions"); // Replace '/target-page' with the path you want to navigate to
  };

  return (
    <>
      <div className="container my-5">
        <div className="tools-heading">
          <h4 className="text-center">Trading Platforms</h4>
          <p className="text-center">
            Analyse, optimise and manage your trades with tools tailored to your
            needs.
          </p>
          <div className="button text-center">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={handleNavigateClick}
            >
              Discover our platforms
            </button>
          </div>
        </div>
        <div className="tools-main my-5">
          <div className="devices text-center">
            {/* <div className="mobile"></div> */}
            <div className="laptop"></div>
          </div>
        </div>
      </div>
    </>
  );
}
