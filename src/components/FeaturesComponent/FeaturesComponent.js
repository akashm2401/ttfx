import React from 'react';
import './FeaturesComponent.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function FeaturesComponent() {
    const featureRefs = {
        feature1: useRef(null),
        feature2: useRef(null),
        feature3: useRef(null),
        feature4: useRef(null)
    };
    
    
    // useEffect(() => {
    //     // Ensure refs are not null before accessing their properties
    //     Object.keys(featureRefs).forEach(key => {
    //         if (featureRefs[key].current) {
    //             const offsetTop = featureRefs[key].current.offsetTop;
    //             console.log(`${key}: ${offsetTop}`);
    //         }
    //     });
    // }, []);

    useEffect(() => {
        // Ensure refs are not null before accessing their properties
        Object.keys(featureRefs).forEach(key => {
            if (featureRefs[key].current) {
                const offsetTop = featureRefs[key].current.offsetTop;
                console.log(`${key}: ${offsetTop}`);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleScrollToFeature = (featureId) => {
        if (featureRefs[featureId].current) {
            window.scrollTo({
                top: featureRefs[featureId].current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="headeing">
                <h4 className='text-center'>Features</h4>
            </div>
            <div className="features-main container px-4 my-4">
                <div className="feature-summary">
                    <div className="feature-summary-item">
                        <div className="feature-summary-heading">
                            <h6>
                            <Link to='#F.I.X.' 
                            onClick={() => handleScrollToFeature('feature1')}>
                            F.I.X. 4.2 / 4.4</Link></h6>
                        </div>
                        <div className="feature-summary-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi nemo illo!
                        </div>
                    </div>

                    <div className="feature-summary-item">
                        <div className="feature-summary-heading">
                            <h6>
                                <Link to='#Customizable'
                                onClick={() => handleScrollToFeature('feature2')}
                                >Customizable</Link>
                            </h6>
                        </div>
                        <div className="feature-summary-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi nemo illo!
                        </div>
                    </div>

                    <div className="feature-summary-item">
                        <div className="feature-summary-heading">
                            <h6>
                                <Link to='#C.L.O.B' 
                                onClick={() => handleScrollToFeature('feature3')}
                                >Central Limit Order Book</Link>
                            </h6>
                        </div>
                        <div className="feature-summary-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi nemo illo!
                        </div>
                    </div>

                    <div className="feature-summary-item">
                        <div className="feature-summary-heading">
                            <h6>
                                <Link to='#FAST'
                                onClick={() => handleScrollToFeature('feature4')}
                                >FAST</Link>
                            </h6>
                        </div>
                        <div className="feature-summary-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi nemo illo!
                        </div>
                    </div>
                </div>

                <div ref={featureRefs.feature1} id='#feature1' className="feature-box">
                    <div className="feature-box-left">
                        <div className="feature-box-heading my-5">
                            <h5>F.I.X. 4.2 / 4.4</h5>
                            <p className='feature-box-tagline my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="feature-box-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere totam, earum corrupti pariatur quis. Repellat amet ipsam, corrupti nemo ea dolor quia delectus labore eaque unde dolores est molestias illum libero placeat dicta sequi quo. Error harum earum nesciunt deleniti libero asperiores suscipit sunt blanditiis, veniam sint aspernatur accusantium.</p>
                        </div>
                    </div>
                    <div className="feature-box-right">
                        <img src={require('../../assets/img/feature3.webp')} alt="feature1" />
                    </div>
                </div>

                <div ref={featureRefs.feature2} className="feature-box feature-box-reverse">
                    <div className="feature-box-left">
                        <div className="feature-box-heading my-5">
                            <h5>Customizable</h5>
                            <p className='feature-box-tagline my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="feature-box-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere totam, earum corrupti pariatur quis. Repellat amet ipsam, corrupti nemo ea dolor quia delectus labore eaque unde dolores est molestias illum libero placeat dicta sequi quo. Error harum earum nesciunt deleniti libero asperiores suscipit sunt blanditiis, veniam sint aspernatur accusantium.</p>
                        </div>
                    </div>
                    <div className="feature-box-right">
                        <img src={require('../../assets/img/feature4.jpg')} alt="feature1" />
                    </div>
                </div>

                <div ref={featureRefs.feature3} className="feature-box">
                    <div className="feature-box-left">
                        <div className="feature-box-heading my-5">
                            <h5>Central Limit Order Book</h5>
                            <p className='feature-box-tagline my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="feature-box-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere totam, earum corrupti pariatur quis. Repellat amet ipsam, corrupti nemo ea dolor quia delectus labore eaque unde dolores est molestias illum libero placeat dicta sequi quo. Error harum earum nesciunt deleniti libero asperiores suscipit sunt blanditiis, veniam sint aspernatur accusantium.</p>
                        </div>
                    </div>
                    <div className="feature-box-right">
                        <img src={require('../../assets/img/feature3.webp')} alt="feature1" />
                    </div>
                </div>

                <div ref={featureRefs.feature4} className="feature-box feature-box-reverse">
                    <div className="feature-box-left">
                        <div className="feature-box-heading my-5">
                            <h5>FAST</h5>
                            <p className='feature-box-tagline my-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="feature-box-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere totam, earum corrupti pariatur quis. Repellat amet ipsam, corrupti nemo ea dolor quia delectus labore eaque unde dolores est molestias illum libero placeat dicta sequi quo. Error harum earum nesciunt deleniti libero asperiores suscipit sunt blanditiis, veniam sint aspernatur accusantium.</p>
                        </div>
                    </div>
                    <div className="feature-box-right">
                        <img src={require('../../assets/img/feature4.jpg')} alt="feature1" />
                    </div>
                </div>
            </div>
        </>
    )
}
