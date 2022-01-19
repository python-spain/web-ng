import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const HeroImage = () => (
    <div className='hero-image mb-3'>
        <div className='container'>
            <StaticImage
                className='image-pc'
                src='../../static/images/hero-images/socios.jpg'
                alt='Socios'
                layout='fullWidth'
            />
            <StaticImage
                className='image-mobile'
                src='../../static/images/hero-images/socios-movil.jpg'
                alt='Socios'
                layout='fullWidth'
            />
            <Link to='/participa/'>
                <h1 className='text-center'>
                    Te estamos esperando ¡participa!
                </h1>
            </Link>
        </div>
    </div>
);

export default HeroImage;
