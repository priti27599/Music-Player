import React from 'react';
import Cardsitem from './Cardsitem';
import useFetch from './useFetch';

function All() {
    const { data: items } = useFetch('http://localhost:8000/songs')
    return (

        < div className="all" >
            <h1 style={{ textAlign: 'center', marginTop: '30px' }}>All Tracks</h1>
            {items && <Cardsitem items={items} />}
        </div >
    )
}

export default All
