import React, { useState, useEffect } from 'react';
import './FAQPage.scss';
import SpinnerComponent from '../../components/SpinnerComponent/SpinnerComponent';

export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [faqList, setFaqList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        fetch('/data/faqPageData.json')
            .then((response) => response.json())
            .then((data) => setFaqList(data?.faqList))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (!setFaqList) {
        return <div><SpinnerComponent /></div>;
    }

    return (
        <div className="container">
            <h2 className="mb-5">Frequently Asked Questions</h2>
            <div className="accordion">
                {faqList.map((item, index) => (
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
