import React, { useState, useEffect } from 'react';
import './FAQPage.css';

export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const questionAnsList = [
        {
            q: "Why is the moon sometimes out during the day?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            q: "Why is the moon sometimes out during the day?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            q: "Why is the moon sometimes out during the day?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            q: "Why is the moon sometimes out during the day?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        },
        {
            q: "Why is the moon sometimes out during the day?",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container">
            <h2 className="mb-5">Frequently Asked Questions</h2>
            <div className="accordion">
                {questionAnsList.map((item, index) => (
                    <div key={index} className="accordion-item p-2">
                        <button
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                            className="accordion-button"
                        >
                            <span className="accordion-title">{item.q}</span>
                            <span className="icon" aria-hidden="true"></span>
                        </button>
                        <div className={`accordion-content ${activeIndex === index ? 'expanded' : ''}`}>
                            <p>{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
