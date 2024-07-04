import React, { useEffect } from "react";
import "./SolutionsPage.scss";

export default function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 101,
      name: "Clobber Demo",
      info: {
        description: "Enter your name and fill details to get acces of demo.",
        linkTitle: "Demo",
        link: "https://demofix.ttprofx.com:2228/login/index.html",
      }
    },
    {
      id: 102,
      name: "Clobber Live",
      info: {
        description: "Acces the live clobber",
        linkTitle: "Live here!",
        link: "https://fix.ttprofx.com:2218/login/index.html",
      },
    },
    {
      id: 103,
      name: "MT4 pcClient Termina",
      info: {
        description: "Description",
        linkTitle: "Download here!",
        link: "https://ttprofx.com/truetradepro4setup.exe",
      },
    },
    {
      id: 104,
      name: "MT4 iOS Terminal",
      info: {
        description: "Description",
        linkTitle: "Download here!",
        link: "https://download.mql5.com/cdn/mobile/mt4/ios?server=TrueTradePro-Demo,TrueTradePro-Live",
      },
    },
    {
      id: 105,
      name: "MT4 MacOS Terminal",
      info: {
        description: "Description ",
        linkTitle: "Download here!",
        link: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg",
      },
    },
    {
      id: 106,
      name: "MT4 Android Terminal",
      info: {
        description: "Description",
        linkTitle: "Download here!",
        link: "https://download.mql5.com/cdn/mobile/mt4/android?server=TrueTradePro-Demo,TrueTradePro-Live",
      }
    }
  ];

  return (
    <div className="product">
      <div className="product-container my-4 py-2">
        <h4 className="text-center mb-1">Downloads</h4>
        <p className="text-center mb-2">Please select your download</p>
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-3">
            <div className="product-info-box">
              <h4>
                <i className="me-3">
                  <img
                    src={require("../../assets/ico/star.png")}
                    alt="star img"
                    style={{ height: "30px" }}
                  />
                </i>
                Mt4
              </h4>
              <div className="p-heading-line ms-5 my-2">
                Download the True Trade Pro MetaTrader Terminal
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quibusdam deleniti numquam non. Tempora commodi a mollitia
                reiciendis tempore incidunt cumque atque autem totam ad labore
                eligendi similique in libero molestiae deserunt, voluptas hic?
                Vel aliquid voluptates nesciunt ratione sint? Accusamus,
                doloremque inventore. Exercitationem tenetur suscipit doloribus
                enim, sit nostrum?
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 px-4 pb-3">
            <div className=" product-download-box">
              <div
                className="row py-2 justify-content-between"
                style={{ height: "100%" }}
              >
                <div className="col-12 col-sm-6  mb-3">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-3">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-3">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-3">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-3">
            <div className="product-info-box">
              <h4>
                <i className="me-3">
                  <img
                    src={require("../../assets/ico/pen.png")}
                    alt="star img"
                    style={{ height: "30px" }}
                  />
                </i>
                Custom
              </h4>
              <div className="p-heading-line ms-5 my-2">
                Download the True Trade Pro MetaTrader Terminal
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quibusdam deleniti numquam non. Tempora commodi a mollitia
                reiciendis tempore incidunt cumque atque autem totam ad labore
                eligendi similique in libero molestiae deserunt, voluptas hic?
                Vel aliquid voluptates nesciunt ratione sint? Accusamus,
                doloremque inventore. Exercitationem tenetur suscipit doloribus
                enim, sit nostrum?
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 px-4 pb-3">
            <div className=" product-download-box">
              <div
                className="row py-2 justify-content-between"
                style={{ height: "100%" }}
              >
                <div className="col-12 col-sm-6 mb-3">
                  <div className="product-download-box-name">
                    <img
                      src={require("../../assets/img/metatrader-4-logo.png")}
                      alt="metatrader-logo"
                      style={{ height: "60px" }}
                    />
                  </div>
                  <div className="product-download-box-link">
                    {/* <button className="btn btn-sm btn-outline-primary">Web Trader</button> */}
                  </div>
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <div className="product-download-box-name">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      style={{ fontSize: "1rem" }}
                    >
                      Web Trader
                    </button>
                  </div>
                  <div className="product-download-box-link">
                    {/* <button className="btn btn-sm btn-outline-primary">Web Trader</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-3">
            <div className="product-info-box">
              <h4>
                <i className="me-3">
                  <img
                    src={require("../../assets/ico/iphone.png")}
                    alt="star img"
                    style={{ height: "30px" }}
                  />
                </i>
                Documents
              </h4>
              <div className="p-heading-line ms-5 my-2">
                Please see Documents for Download
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quibusdam deleniti numquam non. Tempora commodi a mollitia
                reiciendis tempore incidunt cumque atque autem totam ad labore
                eligendi similique in libero molestiae deserunt, voluptas hic?
                Vel aliquid voluptates nesciunt ratione sint? Accusamus,
                doloremque inventore. Exercitationem tenetur suscipit doloribus
                enim, sit nostrum?
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 px-4 pb-3">
            <div className=" product-download-box">
              <div
                className="row py-2 justify-content-between"
                style={{ height: "100%" }}
              >
                <div className="col-12 col-sm-6 mb-3">
                  <div className="product-download-box-name">
                    Client Application
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>

                <div className="col-12 col-sm-6 mb-3">
                  <div className="product-download-box-name">
                    Customer Compliant
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
}
