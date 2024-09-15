import React from 'react';
import Order from './Order.jsx';

const Footer = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const openHour = 9;
    const closeHour = 21;

    const isOpen = currentHour >= openHour && currentHour < closeHour;

    return (
        <footer className="footer">
            <p>{`Current time: ${currentDate.toLocaleTimeString()}`}</p>
            <p>
                {isOpen ? (
                    <Order closeHour={closeHour} isOpen={isOpen} />
                ) : (
                    <Order openHour={openHour} isOpen={isOpen} />
                )}
            </p>
        </footer>
    );
}

export default Footer;
