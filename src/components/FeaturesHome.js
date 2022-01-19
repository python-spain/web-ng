import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Newsletter from './Newsletter';

const FeaturesHome = () => (
    <div className='features-home'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-2 justify-content-center'>
            <Link to='/comunidades/' className='content'>
                <StaticImage
                    alt='Comunidades'
                    src='../../static/images/features/comunidades.png'
                    width={400}
                />
                <h3>
                    ¿Conoces las comunidades locales de Python? Encuentra la
                    tuya
                </h3>
            </Link>
            <Link to='/aprende-python/' className='content'>
                <StaticImage
                    alt='Aprende Python'
                    src='../../static/images/features/aprende-python.jpg'
                    width={400}
                />
                <h3>
                    ¿Quieres aprender Python? Aquí encontrarás todos los
                    recursos
                </h3>
            </Link>
            <Newsletter>
                <div className='content'>
                    <StaticImage
                        src='../../static/images/features/newsletter.jpg'
                        alt='Newsletter'
                        width={400}
                    />
                    <h3>No te olvides de subscribirte a nuestra newsletter</h3>
                </div>
            </Newsletter>
        </div>
    </div>
);

export default FeaturesHome;
