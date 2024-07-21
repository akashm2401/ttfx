import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ClientsPage.scss';
import SpinnerComponent from '../../components/SpinnerComponent/SpinnerComponent';

export default function ClientsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data/clientsPageData.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // const myPhoneNumber = "+60196508002";
    // const message = "Hello";

    const openWhatsApp = (message, phoneNumber) => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    };

    if (!data) {
        return <div><SpinnerComponent /></div>;
    }

    return (
        <div className='container clients-page'>
            <div className="cover-image">
                {/* You can use data.coverImage here if you have a cover image */}
            </div>
            <div className="row m-0 p-0">
                <div className="col-12 col-lg-9">
                    <h2><img src={require('../../assets/img/client-heading.png')} alt="" /> {data?.heading}</h2>
                    <p>{data?.intro}</p>
                    {data?.details.map((detail, index) => (
                        <React.Fragment key={index}>
                            <p>{detail}</p>
                            {index === 0 && (
                                <ul>
                                    {data.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                            {index === 1 && (
                                <ul>
                                    {data.clients.map((client, idx) => (
                                        <li key={idx}>{client}</li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                    {data?.categories.map((category, index) => (
                        <section className="client-category mt-4" key={index}>
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </section>
                    ))}
                    <p><Link to={'/contact-us'}>Contact</Link> True Trade now to find out what solution is right for your business.</p>
                </div>
                <div className="col-12 col-lg-3 contact-box">
                    <h2 className='mb-2'>CONTACT US</h2>
                    <h5 className='mb-2'>
                        <Link onClick={() => openWhatsApp(data.contact.message, data.contact.phone)}>
                            {data.contact.phone}
                        </Link>
                    </h5>
                    <p>
                        If you are interested in learning about how True Trade can help you click the link below or alternatively call us on{' '}
                        <Link onClick={() => openWhatsApp(data.contact.message, data.contact.phone)}>
                            {data.contact.phone}
                        </Link>{' '}
                        and someone from our Relationship Management team will be happy to assist you.
                    </p>
                    <button
                        style={{ marginTop: '10px', width: '100%', backgroundColor: '#12487b', color: '#fff', border: 'none' }}
                        onClick={() => openWhatsApp(data.contact.message, data.contact.phone)}
                        className="btn btn-sm btn-outline-primary"
                    >
                        Request a Demo
                    </button>
                </div>
            </div>
        </div>
    )
}
