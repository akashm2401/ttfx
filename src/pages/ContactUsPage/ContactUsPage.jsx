import React, { useEffect, useState } from "react";
import mapImage from "../../assets/img/map-loc.png";
import "./ContactUsPage.scss";
import { TbMap2 } from "react-icons/tb";
import ContactUsForm from "../../components/ContactForm/js/ContactUsForm";
import SpinnerComponent from '../../components/SpinnerComponent/SpinnerComponent';
import { BiSupport } from "react-icons/bi";

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/contactUsPageData.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div><SpinnerComponent/></div>;
  }

  return (
    <div className="contact-comp">
      <div className="container-fluid main-container">
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-12 col-md-4" style={{ margin: "auto" }}>
            <div className="col-12 col-md-12">
              <div className="col-12 col-md-12 map-logo">
                <TbMap2 size={36} color="#67a1d4" />
              </div>
              <div className="col-md-12 map-logo-name"><strong>{data.country}</strong></div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12">
                <p>
                  {data.address.map((line, index) => (
                    <React.Fragment key={index}>
                      {line} <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="col-12">
                <h4 className="heading-add">Enquiries Only</h4>
                <div className="row py-1">
                  <div className="heading-label">
                    Email &nbsp; <br/>
                    {data.emails.map((email, index) => (
                      <a className="ms-4" href={`mailto:${email}`} key={index}>
                        <strong>{email}</strong> <br />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="row">
                  <div className="heading-label">
                    Phone &nbsp; <br/>
                    <a className="ms-4" href={`tel:${data.phone}`}>
                      <strong>{data.phone}</strong>
                    </a>
                  </div>
                </div>
                <hr className="v2-divider v2-mav20"></hr>
              </div>

              <div className="col-12">
                <div className="v2-mab30" data-qa="supportcentersection">
                  <div className="rte--output">
                    <small>{data.note}</small>
                  </div>
                </div>
                <hr className="v2-divider v2-mav20"></hr>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 map-image-className">
            <div
              className="d-flex justify-content-center"
              style={{ position: "relative" }}
            >
              <img
                src={mapImage}
                alt="Map"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "30px 10px",
                  textAlign: "center",
                }}
              />
              <a
                href={data.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                aria-label="Open map in new tab"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-form">
        <div className="row m-0 p-0">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
