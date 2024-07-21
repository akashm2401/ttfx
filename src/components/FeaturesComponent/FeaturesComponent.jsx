import React, { useRef, useEffect, useState, useCallback } from "react";
import "./FeaturesComponent.scss";
import { Link } from "react-router-dom";
import { getImage } from "../../utils/imageLoader";

const FeaturesComponent = ({ features }) => {
  // Dynamic refs using a map
  const featureRefs = useRef({});

  const featuresData = features;
  const [status, setStatus] = useState("success"); // loading, error, success

  // Create a ref for each feature dynamically
  useEffect(() => {
    console.log("featuresData::", featuresData);
    featureRefs.current = featuresData.reduce((acc, feature) => {
      acc[feature.id] = React.createRef();
      return acc;
    }, {});
  }, [featuresData]);

  const handleScrollToFeature = useCallback((featureId) => {
    const ref = featureRefs.current[featureId];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Failed to load features data.</div>;
  }

  return (
    <div className="feature-comp">
      <div className="heading">
        <h4 className="text-center">Features</h4>
      </div>
      <div className="features-main container px-4 my-2">
        <div className="row feature-summary">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="col-6 col-lg-3 feature-summary-item"
            >
              <div className="feature-summary-heading">
                <h6>
                  <Link onClick={() => handleScrollToFeature(feature.id)}>
                    {feature.heading}
                  </Link>
                </h6>
              </div>
              <div className="feature-summary-description">
                {feature.tagLine}
              </div>
            </div>
          ))}
        </div>

        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            ref={featureRefs.current[feature.id]}
            id={feature.id}
            className={`row feature-box mb-2 ${
              index % 2 !== 0 ? "feature-box-reverse" : ""
            }`}
          >
            <div className="col-md-6 col-lg-6 feature-box-left">
              <div className="feature-box-heading my-2">
                <h5>{feature.heading}</h5>
                <p className="feature-box-tagline my-1">{feature.tagLine}</p>
              </div>
              <div className="feature-box-description">
                <p>{feature.description}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 feature-box-right">
              <img src={getImage(feature.imgPath)} alt={feature.heading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
