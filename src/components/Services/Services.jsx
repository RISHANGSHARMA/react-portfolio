import React, { useEffect, useState } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faUserShield, faInfinity, faLock } from '@fortawesome/free-solid-svg-icons';
// import servicesData from './servicedata.json';
import servicesData from "../../data/servicesdata.json";

const iconMap = {
    cloud: faCloud,
    code: faCode,
    'user-shield': faUserShield,
    infinity: faInfinity,
    lock: faLock
};

export const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    return (
        <section className="services-section" id="services">
            <h2 className="services-title">SERVICES</h2>
            <p className="services-subtitle">I will be able to help you with the following services</p>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-box" key={index}>
                        <div className="service-icon">
                            <FontAwesomeIcon icon={iconMap[service.icon]} />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;