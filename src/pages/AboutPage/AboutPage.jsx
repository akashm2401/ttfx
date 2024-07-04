import React, { useEffect } from "react";
import "./AboutPage.scss";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-comp">
      <div className="about-page">
        <div className="row m-0 about-page-img-container">
          <div className="col-0 col-lg-6"></div>
          <div className="col-12 col-lg-6 about-page-img-container-info pe-5">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              magnam autem aliquam expedita fugit nemo, cumque illum tenetur
              necessitatibus repudiandae modi voluptatem cupiditate similique.
              Similique sequi odio vero velit repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              nihil perspiciatis consequuntur cupiditate architecto dolor,
              labore eveniet saepe pariatur vel! Doloribus, est!
            </p>
          </div>
        </div>

        <div className="about-info-container py-5">
          <div className="container">
            <div className="row justify-content-between p-0 m-0">
              <div className="col-12 col-lg-4 about-info-heading">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
              </div>
              <div className="col-12 col-lg-8 row p-0 m-0 about-info-content">
                <div className="col-12 col-md-6 mb-4">
                  <p className="about-info-content-heading">
                    Navigate the global markets
                  </p>
                  <p>
                    Everything you need to navigate the global markets is at
                    your fingertips in the Saxo platforms. Choose from a wide
                    choice of financial products and hundreds of different ways
                    to trade and invest.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <p className="about-info-content-heading">
                    Navigate the global markets
                  </p>
                  <p>
                    Everything you need to navigate the global markets is at
                    your fingertips in the Saxo platforms. Choose from a wide
                    choice of financial products and hundreds of different ways
                    to trade and invest.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <p className="about-info-content-heading">
                    Navigate the global markets
                  </p>
                  <p>
                    Everything you need to navigate the global markets is at
                    your fingertips in the Saxo platforms. Choose from a wide
                    choice of financial products and hundreds of different ways
                    to trade and invest.
                  </p>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <p className="about-info-content-heading">
                    Navigate the global markets
                  </p>
                  <p>
                    Everything you need to navigate the global markets is at
                    your fingertips in the Saxo platforms. Choose from a wide
                    choice of financial products and hundreds of different ways
                    to trade and invest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-insights-container py-5">
          <div className="container px-5">
            <div className="row about-insights-data justify-content-evenly">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 about-insights-data-item">
                <p className='fs-9'>1,200,000</p>
                <p>Clients worldwide</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 about-insights-data-item">
                <p className='fs-9'>100+ bn</p>
                <p>USD client assets</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 about-insights-data-item">
                <p className='fs-9'>260,000</p>
                <p>Daily executed trades</p>
              </div>
              <div className="col-12 col-sm-6 mb-2 col-md-4 col-lg-3 about-insights-data-item">
                <p className='fs-9'>30+ years</p>
                <p>Experience in the industry</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-members py-5">
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <h4 className="text-center">Working together to get ahead</h4>
              <p style={{ width: "60%" }} className="text-center">
                True Trade Pro is powered by the passion, expertise and
                dedication of hundreds of team members around the world.
              </p>
            </div>

            <div className="row my-4">
              <div className="col-12 col-lg-4 mb-5">
                <div className="about-member-info-box p-5 text-center">
                  <p className="about-member-name">Michael Frey</p>
                  <p className="about-member-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo praesentium optio sequi et ea accusamus aliquid
                    cupiditate neque.
                  </p>
                  {/* <p className="about-member-socials">
                    Lorem ipsum dolor sit.
                  </p> */}
                  <div className="d-flex px-2 my-2 justify-content-around">
                    <i>
                      <img
                        src={require("../../assets/ico/linkedin.png")}
                        alt=""
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/facebook.png")}
                        alt=""
                        height={32}
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/twitter.png")}
                        alt=""
                      />
                    </i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mb-5">
                <div className="about-member-info-box p-5 text-center">
                  <p className="about-member-name">Michael Frey</p>
                  <p className="about-member-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo praesentium optio sequi et ea accusamus aliquid
                    cupiditate neque.
                  </p>
                  {/* <p className="about-member-socials">
                    Lorem ipsum dolor sit.
                  </p> */}
                  <div className="d-flex px-5 my-4 justify-content-around">
                    <i>
                      <img
                        src={require("../../assets/ico/linkedin.png")}
                        alt=""
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/facebook.png")}
                        alt=""
                        height={32}
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/twitter.png")}
                        alt=""
                      />
                    </i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 mb-5">
                <div className="about-member-info-box p-5 text-center">
                  <p className="about-member-name">Michael Frey</p>
                  <p className="about-member-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo praesentium optio sequi et ea accusamus aliquid
                    cupiditate neque.
                  </p>
                  {/* <p className="about-member-socials">
                    Lorem ipsum dolor sit.
                  </p> */}
                  <div className="d-flex px-5 my-4 justify-content-around">
                    <i>
                      <img
                        src={require("../../assets/ico/linkedin.png")}
                        alt=""
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/facebook.png")}
                        alt=""
                        height={32}
                      />
                    </i>
                    <i>
                      <img
                        src={require("../../assets/ico/twitter.png")}
                        alt=""
                      />
                    </i>
                  </div>
                </div>
              </div>

              <div className="about-more-info row justify-content-center my-5">
                <div className="col-12 text-center my-4">
                  <h6>The markets never stand still.</h6>
                  <h6>And neither do we</h6>
                </div>
                <p style={{ width: "60%" }} className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto, necessitatibus eum. In nisi cumque expedita? Qui,
                  similique enim nulla et aperiam vitae repudiandae molestias.
                  Vel excepturi eos culpa temporibus ut.
                </p>
                <p style={{ width: "60%" }} className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate mollitia quasi cum et odit ex amet voluptatibus
                  eum, deleniti tenetur.
                </p>
              </div>

              <div className="about-social-links text-center my-3">
                <p>Follow us to get the latest news</p>
                <div
                  className="d-flex px-5 my-4 justify-content-around"
                  style={{ width: "40%", margin: "auto" }}
                >
                  <i>
                    <img
                      src={require("../../assets/ico/linkedin.png")}
                      alt=""
                    />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/ico/facebook.png")}
                      alt=""
                      height={32}
                    />
                  </i>
                  <i>
                    <img src={require("../../assets/ico/twitter.png")} alt="" />
                  </i>
                  <i>
                    <img
                      src={require("../../assets/ico/instagram.png")}
                      alt=""
                      height={32}
                    />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
