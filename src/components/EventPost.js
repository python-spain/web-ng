import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const EventPost = ({ evento }) => {
    return (
        <div key={evento.id}>
            <Link to={evento.link} className='event-post'>
                <div className='mb-1' style={{ width: '100%', height: 'auto' }}>
                    <GatsbyImage
                        image={evento.image}
                        className='img-fluid'
                        alt={evento.title}
                    />
                </div>
                <h2>{evento.title}</h2>
                <p>{evento.date}</p>
            </Link>
        </div>
    );
};

export default EventPost;
