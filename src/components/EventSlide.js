import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const EventSlide = ({ evento }) => {
    return (
        <div key={evento.id} className='mb-0'>
            <div className='event-slide'>
                <GatsbyImage
                    className='img-fluid event-image'
                    image={evento.image}
                />
                <div className='content'>
                    <GatsbyImage
                        image={evento.logo}
                        alt={evento.title}
                        className='event-logo'
                        imgClassName='event-logo-img'
                    />

                    <div className='mt-1'>
                        <h3>{evento.date}</h3>
                        <h2 className='title'>{evento.title}</h2>
                        <p>{evento.text}</p>
                        <Link to={evento.link} className='button'>
                            Más información
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSlide;
