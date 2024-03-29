import React from 'react';
import { Link } from 'gatsby';

const HeroImage = ({ image, imageMobile }) => (
    <div className='hero-image mb-3'>
        <div className='container'>
            <img className='image-pc' src={image} />
            <img className='image-mobile mt-2' src={imageMobile} />
            <Link to='/participa/'>
                <h1 className='text-center'>
                    Te estamos esperando ¡participa!
                </h1>
            </Link>
        </div>
    </div>
);

export default HeroImage;
