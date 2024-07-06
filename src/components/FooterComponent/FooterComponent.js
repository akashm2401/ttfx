import React, { useState } from "react";
import "./FooterComponent.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function FooterComponent() {
  const [activeSections, setActiveSections] = useState([]);

  function toggleSection(index) {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((item) => item !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  }

  function openWhatsApp(message, phoneNumber) {
    const whatsappMessage = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappMessage, "_blank");
  }

  const myPhoneNumber = "+60196508002";
  const message = "Hello";

  return (
    <div className="footer">
      <div className="pt-5 footer-container">
        <div className="container">
          <div className="footer-container-main">
            <div className="footer-container-main-links">
              {[
                {
                  title: "Get Started",
                  links: [
                    { to: "/", text: "Home" },
                    {
                      to: "http://ttbo.ttprofx.com/#users.users.public-registration!groupId=-2365783785779775287",
                      text: "New user registration",
                    },
                    { to: "/solutions", text: "Downloads" },
                  ],
                },
                {
                  title: "About us",
                  links: [
                    { to: "/about", text: "Company Information" },
                    { to: "/contact-us", text: "Contact us" },
                    { to: "/#review-break", text: "Reviews" },
                  ],
                },
                {
                  title: "Support",
                  links: [
                    { to: "/faq", text: "FAQ" },
                    {
                      to: "#",
                      text: "Help desk",
                      onClick: () => openWhatsApp(message, myPhoneNumber),
                    },
                  ],
                },
                {
                  title: "Legal",
                  links: [
                    { to: "/legal/general-terms", text: "Terms of Service" },
                    {
                      to: "/legal/risk-disclosure-notice",
                      text: "Risk Disclosure",
                    },
                  ],
                },
              ].map((section, index) => (
                <div className="footer-container-main-col" key={index}>
                  <div className="footer-container-main-col-heading">
                    <h4>{section.title}</h4>
                    <button
                      className={`toggle-button ${
                        activeSections.includes(index) ? "active" : ""
                      }`}
                      onClick={() => toggleSection(index)}
                    >
                      {activeSections.includes(index) ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </button>
                  </div>
                  <div
                    className={`footer-container-main-col-links ${
                      activeSections.includes(index) ? "active" : ""
                    }`}
                  >
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.onClick ? (
                            <Link onClick={link.onClick}>{link.text}</Link>
                          ) : (
                            <Link to={link.to}>{link.text}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
    </div>
  );
}
