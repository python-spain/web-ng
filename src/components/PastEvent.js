import React from 'react';
import { Link } from 'gatsby';

const PastEvent = ({ evento }) => {
    return (
        <div key={evento.id} className='mb-3 col'>
            <div className='past-event align-items-start '>
                <div
                    className='mb-1'
                    style={{ width: '100%', height: 'auto' }}
                >
                    <img
                        src={evento.image ?? evento.logo}
                        className='img-fluid cover-img'
                        alt={evento.title}
                    />
                </div>

                <h2 className='text-dark'>
                    <Link to={evento.link} className='event-title'>
                        {evento.title}
                    </Link>
                </h2>
                <p>{evento.date}</p>
            </div>
        </div>
    );
};

export default PastEvent;
