import React from 'react'
import { juicesData } from '../menu.js'
import Juice from './Juice'
const Menu = () => {
    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                <p>Your daily dose of freshness and flavor, served fast!</p>

                <ul className='juices'>
                    {juicesData.map((juice, index) => (
                        <li key={index}>
                            <Juice
                                name={juice.name}
                                ingredients={juice.ingredients}
                                photoName={juice.photoName}
                                price={juice.price}
                                soldOut={juice.soldOut}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default Menu