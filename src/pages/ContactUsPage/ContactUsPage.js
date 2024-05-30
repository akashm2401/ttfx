import React from "react";
import mapImage from "../../assets/img/map-loc.png";
import "./ContactUsPage.css";
import { TbMap2 } from "react-icons/tb";
import ContectUsForm from "../../components/ContactForm/js/ContactUsForm";
import { BiSupport } from "react-icons/bi";

export default function ContactUsPage() {
  return (
    <div>
      <div className="container-fluid main-container">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-md-4" style={{ marginLeft: "17%" }}>
            <div className="col-md-12">
              <div className="col-md-12 map-logo">
                <TbMap2 size={36} color="#67a1d4" />
              </div>

              <div className="col-md-12 map-logo-name">Malaysia</div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-md-12">
                <p>
                  Office Suite 1652 Level16(A),
                  <br /> Main Office Tower <br />
                  Financial Park <br />
                  Complex Labuan <br />
                  Jalan Merdeka 87000 <br />
                  Labuan F.T
                </p>
              </div>
              <div className="col-sm">
                <hr className="divider"></hr>
              </div>

              <div class="v2-col-sm-12">
                <h4 className="heading-add">Enquiries Only</h4>
                <div className="row">
                  <div className="col-sm-6 heading-label">Email</div>
                  {/* <dt>Email</dt> */}
                  <div className="col-sm-6 label-values">
                    <a href=""></a>
                    <a href="">
                      <strong>ps@saxomarkets.com</strong>
                    </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6 heading-label">Phone</div>
                  <div className="col-sm-6 label-values">
                    <a href=""></a>
                    <a href="">
                      <strong>+65 6303 7788</strong>
                    </a>
                  </div>
                </div>
                <hr class="v2-divider v2-mav20"></hr>
              </div>

              <div class="v2-col-sm-12">
                <h4></h4>
                <div class="v2-mab30" data-qa="supportcentersection">
                  <div class="rte--output">
                    <snall>
                      All enquiries should be addressed via the above channels.
                      For meetings at our office, please contact us via the
                      relevant channels above in advance to schedule an
                      appointment.&nbsp;{" "}
                    </snall>
                  </div>
                </div>
                <hr class="v2-divider v2-mav20"></hr>
              </div>
            </div>
          </div>

          <div className="col-md-5 map-image-class">
            {/* <h2>Our Location</h2> */}
            <div style={{ position: "relative" }}>
              <img
                src={mapImage}
                alt="Map"
                style={{ width: "80%", height: "auto" }}
              />
              <a
                href="https://maps.app.goo.gl/xcLfKw3jcDVJAc1e8"
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
        <div className=".container queries-card">
          <div className="row">
            <div className="queries-card-heding">
              <h2>Other Inquiries</h2>
            </div>
            <div className="cards">
              <div className="col-md-4 card-main">
                <div className="card">
                  <BiSupport size={64} />
                  <h5 className="card-title">Complaints</h5>
                  <p className="card-text">
                    For questions about sales, please contact our sales team.
                  </p>
                  <a className="underline-link" href="#">
                    File a complaint
                  </a>
                </div>
              </div>
              <div className="col-md-4 card-main">
                <div className="card">
                  <BiSupport size={64} />
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">
                    If you need help, our support team is here for you.
                  </p>
                  <a className="underline-link" href="#">
                    Visit the support centre
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row m-0 p-0">
          <ContectUsForm />
        </div>
      </div>
    </div>
  );
}
