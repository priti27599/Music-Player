import React from 'react'
import Cardsitem from './Cardsitem';
import './Cards.css';
import useFetch from './useFetch';

function Cards() {
    const { data: items } = useFetch('http://localhost:8000/songs')


    return (
        <div className="cards">
            <h1 style={{ alignItems: "center", textAlign: "center", fontSize: "55px" }}>Playlist</h1>
            {items && <Cardsitem items={items} />}
        </div>
    )
}

export default Cards
