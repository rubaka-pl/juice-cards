import React from 'react';

const Juice = ({ name, ingredients, photoName, price, soldOut }) => {
    const soldOutClass = soldOut ? 'sold-out' : '';

    return (
        <div className={`juice ${soldOutClass}`}>
            <li className='juice'>
                <img src={photoName} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>
                        {Array.isArray(ingredients)
                            ? ingredients.join(', ')
                            : ingredients}
                    </p>
                    <span>
                        {soldOut ? 'SOLD OUT' : `${price} zł`}
                    </span>
                </div>
            </li>
        </div>
    );
}

export default Juice;
