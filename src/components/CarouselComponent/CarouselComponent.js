import React from 'react'
import './CarouselComponent.css'
import { Link } from "react-router-dom";

// import homeScreen from '../../../assets/img/home-screen.png'
export default function CarouselComponent() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-4 img p-0" >
                            <img src={require('../../assets/images/img1.jpg')} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 info" >
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quo velit, possimus architecto quod vero at, distinctio iusto praesentium incidunt quis sapiente ratione! Odio corporis ipsum quo eligendi, in animi!</p>
                            <Link to={'/contact-us'} className="btn btn-sm btn-outline-primary">Learn more</Link>
                        </div>
                    </div>   
                </div>
                <div className="carousel-item">
                <div className="row">
                        <div className="col-md-4 img p-0" >
                            <img src={require('../../assets/images/img2.jpg')} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 info">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quo velit, possimus architecto quod vero at, distinctio iusto praesentium incidunt quis sapiente ratione! Odio corporis ipsum quo eligendi, in animi!</p>
                            <button className="btn btn-sm btn-outline-primary">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row">
                        <div className="col-md-4 img p-0" >
                            <img src={require('../../assets/img/carousel3.jpg')} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-8 info">
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quo velit, possimus architecto quod vero at, distinctio iusto praesentium incidunt quis sapiente ratione! Odio corporis ipsum quo eligendi, in animi!</p>
                            <button className="btn btn-sm btn-outline-primary">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
