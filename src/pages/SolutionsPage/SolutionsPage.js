import React from "react";
import "./SolutionsPage.css";

export default function SolutionsPage() {
  const products = {
    101: {
      name: "MT4 pcClient Termina",
      info: {
        description:
          "For questions about sales, please contact our sales team.",
        link: "",
      },
    },
    102: {
      name: "MT4 MacOS Terminal",
      info: {
        description: "Description of Product B",
        link: "",
      },
    },
    103: {
      name: "Product C",
      info: {
        description: "Description of Product C",
        link: "",
      },
    },

    104: {
      name: "MT4 pcClient Termina",
      info: {
        description:
          "For questions about sales, please contact our sales team.",
        link: "",
      },
    },
    105: {
      name: "MT4 MacOS Terminal",
      info: {
        description: "Description of Product B",
        link: "",
      },
    },
    106: {
      name: "Product C",
      info: {
        description: "Description of Product C",
        link: "",
      },
    },
  };

  return (
    <div>

      <div className="product-container my-4 py-5">
        <h4 className="text-center mb-1">Downloads</h4>
        <p className="text-center mb-5">Please select your download</p>
        <div className="container">
          <div className="row">
            {Object.keys(products).map((id) => (
              <div className="cards col-sm-12 col-md-6 col-lg-4" key={id}>
                <div className="card-main">
                  <div className="card">
                    <h5 className="card-title">{products[id].name}</h5>
                    <p className="card-text">{products[id].info.description}</p>
                    <a className="underline-link" href={products[id].info.link}>
                      Download here!
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="product-container-2 container my-5">
        <div className="row m-0 p-0">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-5">
            <div className="product-info-box">
              <h4><i className="me-3"><img src={require('../../assets/ico/star.png')} alt="star img" style={{ 'height': '30px' }} /></i>Mt4</h4>
              <div className="p-heading-line ms-5 my-2">Download the True Trade Pro MetaTrader Terminal</div>
              <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam deleniti numquam non. Tempora commodi a mollitia reiciendis tempore incidunt cumque atque autem totam ad labore eligendi similique in libero molestiae deserunt, voluptas hic? Vel aliquid voluptates nesciunt ratione sint? Accusamus, doloremque inventore. Exercitationem tenetur suscipit doloribus enim, sit nostrum?</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-4">
            <div className=" product-download-box">
              <div className="row py-2 justify-content-between align-items-center" style={{ 'height': '100%' }}>
                <div className="col-12 col-sm-6  mb-2">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-2">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-2">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
                  </div>
                </div>

                <div className="col-12 col-sm-6  mb-2">
                  <div className="product-download-box-name">
                    MT4 PC Client Terminal
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <hr />

          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-5 pb-5">
            <div className="product-info-box">
              <h4><i className="me-3"><img src={require('../../assets/ico/pen.png')} alt="star img" style={{ 'height': '30px' }} /></i>Custom</h4>
              <div className="p-heading-line ms-5 my-2">Download the True Trade Pro MetaTrader Terminal</div>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam deleniti numquam non. Tempora commodi a mollitia reiciendis tempore incidunt cumque atque autem totam ad labore eligendi similique in libero molestiae deserunt, voluptas hic? Vel aliquid voluptates nesciunt ratione sint? Accusamus, doloremque inventore. Exercitationem tenetur suscipit doloribus enim, sit nostrum?</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-4">
            <div className=" product-download-box">
              <div className="row py-2 justify-content-between align-items-center" style={{ 'height': '100%' }}>
                <div className="col-12 col-sm-12 col-md-6 mb-2">
                  <div className="product-download-box-name">
                    <img src={require('../../assets/img/metatrader-4-logo.png')} alt="metatrader-logo" style={{ 'height': '60px' }} />
                  </div>
                  <div className="product-download-box-link">
                    {/* <button className="btn btn-sm btn-outline-primary">Web Trader</button> */}
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6 mb-2">
                  <div className="product-download-box-name">
                    <button className="btn btn-sm btn-outline-primary" style={{ 'fontSize': '1rem' }}>Web Trader</button>
                  </div>
                  <div className="product-download-box-link">
                    {/* <button className="btn btn-sm btn-outline-primary">Web Trader</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="col-12 col-sm-12 col-md-12 col-lg-7 pb-5">
            <div className="product-info-box">
              <h4><i className="me-3"><img src={require('../../assets/ico/iphone.png')} alt="star img" style={{ 'height': '30px' }} /></i>Documents</h4>
              <div className="p-heading-line ms-5 my-2">Please see Documents for Download</div>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam deleniti numquam non. Tempora commodi a mollitia reiciendis tempore incidunt cumque atque autem totam ad labore eligendi similique in libero molestiae deserunt, voluptas hic? Vel aliquid voluptates nesciunt ratione sint? Accusamus, doloremque inventore. Exercitationem tenetur suscipit doloribus enim, sit nostrum?</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-4">
            <div className=" product-download-box">
              <div className="row py-2 justify-content-between align-items-center" style={{ 'height': '100%' }}>
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="product-download-box-name">
                    Client Application
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                  <div className="product-download-box-name">
                    Customer Compliant
                  </div>
                  <div className="product-download-box-link">
                    <button className="btn btn-sm btn-outline-primary">Download</button>
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
