import React from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <>
      <div className="pt-5 footer-container">
        <div className="container">
          <div className="footer-container-main">
            <div className="footer-container-main-links">
              <div className="footer-container-main-col">
                <div className="footer-container-main-col-heading">
                  <h4>Get Started</h4>
                </div>
                <div className="footer-container-main-col-links">
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Register Back Office</Link>
                    </li>
                    <li>
                      <Link to={"/solutions"}>Downloads</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-container-main-col">
                <div className="footer-container-main-col-heading">
                  <h4>About us</h4>
                </div>
                <div className="footer-container-main-col-links">
                  <ul>
                    <li>
                      <Link to={"/about"}>Company Information</Link>
                    </li>
                    <li>
                      <Link to={"/contact-us"}>Contact us</Link>
                    </li>
                    <li>
                      <Link>Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-container-main-col">
                <div className="footer-container-main-col-heading">
                  <h4>Support</h4>
                </div>
                <div className="footer-container-main-col-links">
                  <ul>
                    <li>
                      <Link>FAQ</Link>
                    </li>
                    <li>
                      <Link>Help desk</Link>
                    </li>
                    <li>
                      <Link>Back Office</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-container-main-col">
                <div className="footer-container-main-col-heading">
                  <h4>Legal</h4>
                </div>
                <div className="footer-container-main-col-links">
                  <ul>
                    <li>
                      <Link to={"/legal/general-terms"}>Terms of Service</Link>
                    </li>
                    <li>
                      <Link to={"/legal/risk-disclosure-notice"}>
                        Risk Diclosure
                      </Link>
                    </li>
                    {/* <li><Link>Privacy Policy</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-container-main-info my-5">
              <p>True Trade is a trading name of TRUE TRADE PRO LTD .</p>
              <address>
                <p>Office Suite 1652 Level16(A), Main Office Tower</p>
                <p>
                  Financial Park Complex Labuan Jalan Merdeka 87000 Labuan F.T,
                  Malaysia.
                </p>
                <p>TRUE TRADE PRO LTD. (LL18002) Lic: MB/22/0103 . </p>
              </address>
              <p>Labuan phone number: +60196508002</p>
              <p>
                Authorized and Regulated by the Money Broking License from
                Labuan Financial Services Authority (LFSA).
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyrights-container">
          <p>&copy; 2024 True Trade Pro Ltd</p>
        </div>
      </div>
    </>
  );
}
