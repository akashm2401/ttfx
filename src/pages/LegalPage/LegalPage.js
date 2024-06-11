import React from 'react';
import './LegalPage.css';
import GeneralTermsPage from './GeneralTermsPage';
import RiskDisclosurePage from './RiskDisclosurePage';

import { Routes, Route, useLocation, Link } from 'react-router-dom';

export default function LegalPage() {
    const location = useLocation();

    return (
        // <div>LegalPage</div>
        <div id='legal-page' className="row m-0 p-0">
            <div className="legal-page-nav m-0 p-0">
                <ul className='m-0 p-0'>
                    <li className={
                        (location.pathname==='/legal' || location.pathname==='/legal/general-terms') ? 'legal-page-nav-menu-active' : ''
                    }>
                        <Link to={'/legal/general-terms'}>
                            <i><img src={require("../../assets/ico/google-docs.png")} alt="document" height={38} width={38} /></i>
                            <span className='ms-2'>General Buisness terms</span>
                        </Link>
                    </li>
                    <li className={
                        (location.pathname==='/legal/risk-disclosure-notice') ? 'legal-page-nav-menu-active' : ''
                    }>
                        <Link to={'/legal/risk-disclosure-notice'}>
                            <i><img src={require("../../assets/ico/google-docs.png")} alt="document" height={38} width={38} /></i>
                            <span className='ms-2'>Risk Disclosure Notice</span>
                        </Link>
                    </li>
                </ul>
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
