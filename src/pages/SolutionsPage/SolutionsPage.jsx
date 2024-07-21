import React, { useEffect, useState } from "react";
import "./SolutionsPage.scss";
import SpinnerComponent from '../../components/SpinnerComponent/SpinnerComponent';
import starIcon from '../../assets/ico/star.png';
import penIcon from '../../assets/ico/pen.png';
import iphoneIcon from '../../assets/ico/iphone.png';

export default function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = {
    star: starIcon,
    pen: penIcon,
    iphone: iphoneIcon
  };

  const [solutionData, setSolutionData] = useState(null);

  useEffect(() => {
    fetch("/data/solutionPAgeData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then(data => setSolutionData(data))
      .catch(error => console.error("Error fetching features data:", error));
  }, []);

  if (!solutionData) {
    return <div><SpinnerComponent /></div>;
  }

  return (
    <div className="product">
      <div className="product-container my-4 py-2">
        <h4 className="text-center mb-1">Downloads</h4>
        <p className="text-center mb-2">Please select your download</p>
        <div className="container">
          <div className="row">
            {solutionData?.products.map((product, index) => (
              <div className="cards col-sm-12 col-md-6 col-lg-6" key={index}>
                <div className="card-main">
                  <div className="card">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.info.description}</p>
                    <a className="underline-link" href={product.info.link}>
                      {product.info.linkTitle}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="product-container-2 container my-2">
      <div className="row m-0 p-0">
        {solutionData?.productsInfo.map((product, index) => (
          <React.Fragment key={index}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-3">
              <div className="product-info-box">
                <h4>
                  <i className="me-3">
                    <img
                      src={icons[product.icon.split('.')[0]]}
                      alt={`${product.icon.split('.')[0]} img`}
                      style={{ height: "30px" }}
                    />
                  </i>
                  {product.title}
                </h4>
                <div className="p-heading-line ms-5 my-2">
                  {product.heading}
                </div>
                <p className="text-justify">
                  {product.description}
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 px-4 pb-3">
              <div className="product-download-box">
                <div
                  className="row py-2 justify-content-between"
                  style={{ height: "100%" }}
                >
                  {product.downloads.map((download, idx) => (
                    <div className="col-12 col-sm-6 mb-3" key={idx}>
                      <div className="product-download-box-name">
                        {download.name}
                      </div>
                      <div className="product-download-box-link">
                        {download.link ? (
                          <a
                            href={download.link}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Download
                          </a>
                        ) : (
                            <div>
                              <div className="mb-3"> 
                                <button className="btn btn-sm btn-outline-primary">
                                  Web Trader
                                </button>
                              </div>
                              <div>
                                <img
                                  src={require("../../assets/img/metatrader-4-logo.png")}
                                  alt="metatrader-logo"
                                  style={{ height: "60px" }}
                                />
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>


    </div>
  );
}
