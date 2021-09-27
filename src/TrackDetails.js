import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch';
import './TrackDetails.css';


function TrackDetails() {
    const { id } = useParams();
    const { data: item } = useFetch('http://localhost:8000/songs/' + id)


    return (
        <div className="track-details">
            <h1>Selected Track Details</h1>
            {item && (
                <div className="item-content">
                    <img src={item.cover} alt={item.name} />
                    <div className="details">
                        <p><span>Name:</span> {item.name}</p>
                        <p><span>Artist:</span> {item.artist}</p>
                        <p>{item.description}</p>
                        <button style={{ background: "lightBlue", padding: '5px 20px 5px 20px', fontWeight: '500', borderRadius: '10px' }} >Play</button>
                    </div>
                </div>
            )}



        </div>
    )
}

export default TrackDetails
