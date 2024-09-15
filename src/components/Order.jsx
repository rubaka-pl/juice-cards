import React from 'react'

const Order = ({ closeHour, openHour, isOpen }) => {
    return (
        <div className='order'>
            {isOpen ? (
                <div>
                    <p>{`We're open until ${closeHour}:00. Welcome!`}</p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>{`Sorry, we're closed. We open at ${openHour}:00.`}</p>
            )}
        </div>
    );
};

export default Order