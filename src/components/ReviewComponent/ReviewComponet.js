import React from 'react';
import './ReviewComponent.css'
import { useState, useRef, useEffect } from 'react';
// import { querySelectorAll }
import client1 from '../../assets/img/client1.jpeg';
import client2 from '../../assets/img/client2.jfif'
import client3 from '../../assets/img/client3.png';

export default function ReviewComponet() {

    const reviews = [
        { 
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eum inventore aspernatur explicabo distinctio, commodi laboriosam sint. Quia, mollitia quis, quae accusamus recusandae culpa eaque ducimus laborum eos modi non.", 
            name: 'Jhon Doe', 
            imgPath: client1 
        },
        { 
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eum inventore aspernatur explicabo distinctio, commodi laboriosam sint. Quia, mollitia quis, quae accusamus recusandae culpa eaque ducimus laborum eos modi non.", 
            name: 'Jhon Boe', 
            imgPath: client2 
        },
        { 
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eum inventore aspernatur explicabo distinctio, commodi laboriosam sint. Quia, mollitia quis, quae accusamus recusandae culpa eaque ducimus laborum eos modi non.", 
            name: 'Jhon Doe', 
            imgPath: client3 
        }

        // Add more reviews as needed
    ];

    const [counter, setCounter] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        const clientReviews = carouselRef.current.querySelectorAll('.client-review');
        clientReviews.forEach((clientReview, index) => {
            clientReview.style.left = `${index * 100}%`;
        });
    }, [reviews]);

    const goNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % reviews.length);
    };

    const goPrev = () => {
        setCounter((prevCounter) => (prevCounter === 0 ? reviews.length - 1 : prevCounter - 1));
    };

    useEffect(() => {
        const clientReviews = carouselRef.current.querySelectorAll('.client-review');
        clientReviews.forEach((clientReview) => {
            clientReview.style.transform = `translateX(-${counter * 100}%)`;
        });
    }, [counter]);

    // Automatic slide
    useEffect(() => {
        const interval = setInterval(goNext, 6000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    return (
        <>
            <div className="container">
                <h4 className='text-center my-2'>WHAT USERS SAYS</h4>
                <div className="review-carousel">
                    <button className="prev" onClick={goPrev}>&lt;</button>
                    <div className="client-reviews" ref={carouselRef}>
                        {reviews.map((review, index) => (
                            <div className="client-review p-5" key={index}>
                                <div className="client-photo mb-2">
                                    <img src={review.imgPath} alt="profile-photo" />
                                </div>
                                <div className="client-name mb-4">
                                    {review.name}
                                </div>
                                <div className="client-comment">
                                    {review.review}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="next" onClick={goNext}>&gt;</button>
                </div>

                <div className="review-insights my-5">
                    <div className="count-insights">
                        <div className="count">
                            <span>260,000+</span>
                        </div>
                        <div className="count-title">
                            <span>Daily trades</span>
                        </div>
                    </div>

                    <div className="count-insights">
                        <div className="count">
                            <span>1,200,000+</span>
                        </div>
                        <div className="count-title">
                            <span>Clients</span>
                        </div>
                    </div>

                    <div className="count-insights">
                        <div className="count">
                            <span>100+ bn</span>
                        </div>
                        <div className="count-title">
                            <span>USD client assets</span>
                        </div>
                    </div>

                    <div className="count-insights">
                        <div className="count">
                            <span>17+ bn</span>
                        </div>
                        <div className="count-title">
                            <span>USD daily trade volume</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
