import React, { useEffect, useState } from "react";
import "./AboutPage.scss";
import SpinnerComponent from '../../components/SpinnerComponent/SpinnerComponent';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/data/aboutPageData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then(data => setAboutData(data))
      .catch(error => console.error("Error fetching features data:", error));
  }, []);


  if (!aboutData) {
    return <div><SpinnerComponent /></div>;
  }
  

  return (
    <div className="about-comp">
      <div className="about-page">
        <div className="row m-0 about-page-img-container">
          <div className="col-0 col-lg-6"></div>
          <div className="col-12 col-lg-6 about-page-img-container-info pe-5">
            <h2>{aboutData.aboutPageImgContainerInfo.title}</h2>
            {aboutData.aboutPageImgContainerInfo.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        <div className="about-info-container py-5">
          <div className="container">
            <div className="row justify-content-between p-0 m-0">
              <div className="col-12 col-lg-4 about-info-heading">
                <h4>{aboutData.aboutInfoContainer.heading}</h4>
              </div>
              <div className="col-12 col-lg-8 row p-0 m-0 about-info-content">
                {aboutData.aboutInfoContainer.contents.map((content, index) => (
                  <div key={index} className="col-12 col-md-6 mb-4">
                    <p className="about-info-content-heading">{content.heading}</p>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-insights-container py-5">
          <div className="container px-5">
            <div className="row about-insights-data justify-content-evenly">
              {aboutData.aboutInsightsContainer.map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 about-insights-data-item">
                  <p className='fs-9'>{item.number}</p>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-members py-5">
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <h4 className="text-center">Working together to get ahead</h4>
              <p style={{ width: "60%" }} className="text-center">
                True Trade Pro is powered by the passion, expertise and dedication of hundreds of team members around the world.
              </p>
            </div>

            <div className="row my-4">
              {aboutData.aboutMembers.map((member, index) => (
                <div key={index} className="col-12 col-lg-4 mb-5">
                  <div className="about-member-info-box p-5 text-center">
                    <p className="about-member-name">{member.name}</p>
                    <p className="about-member-info">{member.info}</p>
                    <div className="d-flex px-2 my-2 justify-content-around">
                      <i>
                        <img src={require("../../assets/ico/linkedin.png")} alt="" />
                      </i>
                      <i>
                        <img src={require("../../assets/ico/facebook.png")} alt="" height={32} />
                      </i>
                      <i>
                        <img src={require("../../assets/ico/twitter.png")} alt="" />
                      </i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-more-info row justify-content-center my-5">
              <div className="col-12 text-center my-4">
                <h6>{aboutData.aboutMoreInfo[0]}</h6>
                <h6>{aboutData.aboutMoreInfo[1]}</h6>
              </div>
              <p style={{ width: "60%" }} className="text-center">{aboutData.aboutMoreInfo[2]}</p>
              <p style={{ width: "60%" }} className="text-center">{aboutData.aboutMoreInfo[3]}</p>
            </div>

            <div className="about-social-links text-center my-3">
              <p>Follow us to get the latest news</p>
              <div className="d-flex px-5 my-4 justify-content-around" style={{ width: "40%", margin: "auto" }}>
                <i>
                  <img src={require("../../assets/ico/linkedin.png")} alt="" />
                </i>
                <i>
                  <img src={require("../../assets/ico/facebook.png")} alt="" height={32} />
                </i>
                <i>
                  <img src={require("../../assets/ico/twitter.png")} alt="" />
                </i>
                <i>
                  <img src={require("../../assets/ico/instagram.png")} alt="" height={32} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
