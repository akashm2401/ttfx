import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ClientsPage.css'

export default function ClientsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const myPhoneNumber = "+60196508002";
    const message = "Hello";

    function openWhatsApp(message, phoneNumber) {
        const whatsappMessage = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappMessage, "_blank");
    }

    return (
        <div className='container clients-page'>
            <div className="cover-image">

            </div>
            <div className="row m-0 p-0">

                <div className="col-12 col-lg-9">

                    <h2><img src={require('../../assets/img/client-heading.png')} alt="" /> Clients</h2>

                    <p>True Trade prefers to work with its institutional clients as partners and provides clients with custom solutions tailored to client needs.</p>

                    <p>Understanding that no client is the same, True Trade provides:</p>
                    <ul>
                        <li>Custom liquidity solutions.</li>
                        <li>Complete trading anonymity from our liquidity providers.</li>
                        <li>Tier 1 Bank Liquidity.</li>
                        <li>Tailored pricing per instrument.</li>
                        <li>Flexible Order Management (VWAP, Top of Book, Partial fill).</li>
                    </ul>

                    <p>True Trade is for Institutional clients, specifically:</p>
                    <ul>
                        <li>Professionals</li>
                        <li>Small to Mid-Market institutions</li>
                        <li>Brokers</li>
                        <li>Banks</li>
                        <li>Hedge funds & Money Managers</li>
                    </ul>

                    <section class="client-category mt-4">
                        <h3>Professionals</h3>
                        <p>True Trade provides professional clients with flexibility within its API offering, competitive pricing and dedicated customer service. Additionally, MetaTrader 5 customers can use our proprietary bridge or integrate with available bridge providers.</p>
                    </section>

                    <section class="client-category">
                        <h3>Small to Mid-Market Institutions</h3>
                        <p>True Trade's offering will keep liquidity costs low parallel to growth with no compromise to quality of service. Where potential clients would experience delays in onboarding and integration with other providers True Trade has the expertise and infrastructure to onboard with utmost efficiency.</p>
                    </section>

                    <section class="client-category">
                        <h3>Brokers</h3>
                        <p>Having worked for Forex and CFD brokers for many years True Trade's management team understands the challenges these providers face. With competitive pricing, various trading solutions, and our matched principal model True Trade is the ideal partner for brokers.</p>
                    </section>

                    <section class="client-category">
                        <h3>Hedge Funds & Money Managers</h3>
                        <p>True Trade's highly <Link to={'/solutions'} >sophisticated trading solutions</Link> and competitive pricing appeal to hedge funds and money managers. The ability to monitor trading in real time coupled with True Trade's dedicated customer service team benefit this market segment.</p>
                    </section>

                    <p> <Link to={'/contact-us'}>Contact</Link> True Trade now to find out what solution is right for your business.</p>
                </div>

                <div className="col-12 col-lg-3 contact-box">
                    <h2 className='mb-2'>CONTACT US</h2>
                    <h5 className='mb-2' ><Link onClick={() => openWhatsApp(message, myPhoneNumber)}>+44 (0) 20 8068 5220</Link></h5>

                    <p>If you are interested in learning about how True Trade can help you click the link below or alternatively call us on <Link onClick={() => openWhatsApp(message, myPhoneNumber)}>+44 (0) 20 8068 5220</Link> and someone from our Relationship Management team will be happy to assist you.
                    </p>

                    <button style={{marginTop: '10px', width: '100%', backgroundColor: '#12487b'}}
                        onClick={() => openWhatsApp("Request demo", myPhoneNumber)}
                        className="btn btn-sm btn-outline-primary"
                    >
                        Request a Demo
                    </button>
                </div>
            </div>
        </div>
    )
}
