import React from 'react';
import { Link } from 'react-router-dom';
import './Cardsitem.css'

function Cardsitem({ items }) {
    return (
        <div className="cardsitem" >
            {items.map((item) => (
                <div className="item " key={item.id}>
                    <Link to={`/items/${item.id}`}>
                        <img src={item.cover} alt={item.name} />
                        <h2 >{item.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Cardsitem
