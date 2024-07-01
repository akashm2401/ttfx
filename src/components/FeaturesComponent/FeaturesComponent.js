import React from "react";
import "./FeaturesComponent.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function FeaturesComponent() {
  const featureRefs = {
    feature1: useRef(null),
    feature2: useRef(null),
    feature3: useRef(null),
    feature4: useRef(null),
  };

  // useEffect(() => {
  //     // Ensure refs are not null before accessing their properties
  //     Object.keys(featureRefs).forEach(key => {
  //         if (featureRefs[key].current) {
  //             const offsetTop = featureRefs[key].current.offsetTop;
  //             console.log(`${key}: ${offsetTop}`);
  //         }
  //     });
  // }, []);

  useEffect(() => {
    // Ensure refs are not null before accessing their properties
    Object.keys(featureRefs).forEach((key) => {
      if (featureRefs[key].current) {
        const offsetTop = featureRefs[key].current.offsetTop;
        console.log(`${key}: ${offsetTop}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollToFeature = (featureId) => {
    if (featureRefs[featureId].current) {
      window.scrollTo({
        top: featureRefs[featureId].current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="headeing">
        <h4 className="text-center">Features</h4>
      </div>
      <div className="features-main container px-4 my-4">
        <div className="feature-summary">
          <div className="feature-summary-item">
            <div className="feature-summary-heading">
              <h6>
                <Link
                  to="#F.I.X."
                  onClick={() => handleScrollToFeature("feature1")}
                >
                  F.I.X. 4.2 / 4.4
                </Link>
              </h6>
            </div>
            <div className="feature-summary-description">
              Financial Information eXchange (FIX®) Protocol
            </div>
          </div>

          <div className="feature-summary-item">
            <div className="feature-summary-heading">
              <h6>
                <Link
                  to="#Customizable"
                  onClick={() => handleScrollToFeature("feature2")}
                >
                  Customizable
                </Link>
              </h6>
            </div>
            <div className="feature-summary-description">
              100% Transparency Standards, Equal Opportunity 
              Infrastructure, and
              Next Generation Technology
            </div>
          </div>

          <div className="feature-summary-item">
            <div className="feature-summary-heading">
              <h6>
                <Link
                  to="#C.L.O.B"
                  onClick={() => handleScrollToFeature("feature3")}
                >
                  Central Limit Order Book
                </Link>
              </h6>
            </div>
            <div className="feature-summary-description">
              Understanding the Central Limit Order Book (CLOB)
            </div>
          </div>

          <div className="feature-summary-item">
            <div className="feature-summary-heading">
              <h6>
                <Link
                  to="#FAST"
                  onClick={() => handleScrollToFeature("feature4")}
                >
                  FAST
                </Link>
              </h6>
            </div>
            <div className="feature-summary-description">
              Ultra Low Latency Access for Optimal Trade Execution
            </div>
          </div>
        </div>

        <div ref={featureRefs.feature1} id="#feature1" className="feature-box">
          <div className="feature-box-left">
            <div className="feature-box-heading my-2">
              <h5>F.I.X. 4.2 / 4.4</h5>
              <p className="feature-box-tagline my-1">
                Financial Information eXchange (FIX®) Protocol
              </p>
            </div>
            <div className="feature-box-description">
              <p>
                The Financial Information eXchange (FIX®) Protocol has
                revolutionized the trading environment, proving fundamental in
                facilitating many of the electronic trading trends that have
                emerged over the past decade.
              </p>
            </div>
          </div>
          <div className="feature-box-right">
            <img
              src={require("../../assets/img/fix.jpg")}
              alt="feature1"
            />
          </div>
        </div>

        <div
          ref={featureRefs.feature2}
          className="feature-box feature-box-reverse"
        >
          <div className="feature-box-left">
            <div className="feature-box-heading my-2">
              <h5>Customizable</h5>
              <p className="feature-box-tagline my-1">
                100% Transparency Standards, Equal Opportunity Infrastructure,
                and Next Generation Technology
              </p>
            </div>
            <div className="feature-box-description">
              <p>
                We are committed to pioneering 100% transparency standards,
                fostering equal opportunity infrastructure, and integrating
                next-generation technology. These initiatives shape a more
                equitable and advanced future, ensuring that everyone benefits
                from cutting-edge advancements and fair practices.
              </p>
            </div>
          </div>
          <div className="feature-box-right">
            <img
              src={require("../../assets/img/customizable.jpg")}
              alt="feature1"
            />
          </div>
        </div>

        <div ref={featureRefs.feature3} className="feature-box">
          <div className="feature-box-left">
            <div className="feature-box-heading my-2">
              <h5>Central Limit Order Book</h5>
              <p className="feature-box-tagline my-1">
                Understanding the Central Limit Order Book (CLOB)
              </p>
            </div>
            <div className="feature-box-description">
              <p>
                A Central Limit Order Book (CLOB) is a common trading system
                used in financial markets to match buy and sell orders for
                various financial instruments, such as stocks, bonds,
                commodities, and derivatives. This centralized electronic system
                aggregates and displays all outstanding limit orders for a
                particular asset at any given time, ensuring transparency and
                efficiency in trading.
              </p>
            </div>
          </div>
          <div className="feature-box-right">
            <img
              src={require("../../assets/img/clo.jpg")}
              alt="feature1"
            />
          </div>
        </div>

        <div
          ref={featureRefs.feature4}
          className="feature-box feature-box-reverse"
        >
          <div className="feature-box-left">
            <div className="feature-box-heading my-2">
              <h5>FAST</h5>
              <p className="feature-box-tagline my-1">
                Ultra Low Latency Access for Optimal Trade Execution
              </p>
            </div>
            <div className="feature-box-description">
              <p>
                TRUE TRADE delivers ultra-low latency access from our servers,
                which are strategically located in major liquidity hubs. This
                ensures consistently minimal latency, providing the best
                possible fill on your orders for an optimal trading experience.
              </p>
            </div>
          </div>
          <div className="feature-box-right">
            <img
              src={require("../../assets/img/fast.jpg")}
              alt="feature1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
