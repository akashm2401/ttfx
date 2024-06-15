import React, { useState, useEffect } from 'react';
import './LegalPage.css';
import GeneralTermsPage from './GeneralTermsPage';
import RiskDisclosurePage from './RiskDisclosurePage';

import { Routes, Route, useLocation, Link } from 'react-router-dom';

export default function LegalPage() {
    const location = useLocation();
    const [isExpand, setIsExpand ]= useState(false);

    
    const toggleExpand = () => {
        setIsExpand(!isExpand)
    }

    const getClassNames1 = () => {
        let classes = 'legal-page-nav m-0 p-0';
        if (isExpand) classes += ' closed';
        else classes += ' expand';
        return classes;
    }

    const getClassNames2 = () => {
        let classes = 'legal-page-nav-btn-expand';
        if (isExpand) classes += ' expand';
        else classes += ' closed';
        return classes;
    };
    return (
        // <div>LegalPage</div>
        <div id='legal-page' className="row m-0 p-0">
            <div className="legal-page-nav m-0 p-0">
                <ul className={isExpand ? 'm-0 p-0 display-block' : 'm-0 p-0'}>
                    {isExpand
                        &&
                        <div onClick={toggleExpand} className="px-2 py-2 d-flex justify-content-end" style={{ "width": "100%" }}>
                            <i><img src={require("../../assets/ico/close.png")} alt="" height={20} /></i>
                        </div>
                    }
                    <li className={
                        (location.pathname === '/legal' || location.pathname === '/legal/general-terms') ? 'legal-page-nav-menu-active' : ''
                    }>
                        <Link to={'/legal/general-terms'}>
                            <i><img src={require("../../assets/ico/google-docs.png")} alt="document" height={38} width={38} /></i>
                            <span className='ms-2'>General Buisness terms</span>
                        </Link>
                    </li>
                    <li className={
                        (location.pathname === '/legal/risk-disclosure-notice') ? 'legal-page-nav-menu-active' : ''
                    }>
                        <Link to={'/legal/risk-disclosure-notice'}>
                            <i><img src={require("../../assets/ico/google-docs.png")} alt="document" height={38} width={38} /></i>
                            <span className='ms-2'>Risk Disclosure Notice</span>
                        </Link>
                    </li>
                </ul>

                <div onClick={toggleExpand} className={false ? "display-none" : "legal-page-nav-btn-expand"}>
                    <p>Legal Menu</p>
                </div>
                <div className="legal-page-nav-btn-close">

                </div>
            </div>
            <div className="legal-page-main-screen m-0 p-0">
                <Routes>
                    <Route path='' index element={<GeneralTermsPage />} />
                    <Route path='general-terms' element={<GeneralTermsPage />} />
                    <Route path='risk-disclosure-notice' element={<RiskDisclosurePage />} />
                </Routes>
            </div>
        </div>
    )
}
