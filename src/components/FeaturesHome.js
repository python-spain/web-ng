import React from 'react';
import { Link } from 'gatsby';
import Newsletter from './Newsletter';

const FeaturesHome = ({ features }) => (
    <div className='features-home'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-2 justify-content-center'>
            {features.map((feature, i) => (
                <Link to={feature.url} className='content' key={i}>
                    <img src={feature.image} />
                    <h3>{feature.title}</h3>
                </Link>
            ))}

            <Newsletter>
                <div className='content'>
                    <img src={'/images/features/newsletter.jpg'} />
                    <h3>No te olvides de subscribirte a nuestra newsletter</h3>
                </div>
            </Newsletter>
        </div>
    </div>
);

export default FeaturesHome;
