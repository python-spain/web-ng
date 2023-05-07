import React from 'react';
import { Link } from 'gatsby';

const MyLink = (props) => {
    // en la versión instalada de Gatsby, Link ignora el atributo "target", por
    // lo que usamos un simple <a> en su lugar
    const feature = props.feature;
    if (feature.target) {
        return (
            <a
                href={feature.url}
                className='content'
                target={feature.target ?? '_self'}
            >
                {props.children}
            </a>
        );
    } else {
        return (
            <Link
                to={feature.url}
                className='content'
                target={feature.target ?? '_self'}
            >
                {props.children}
            </Link>
        );
    }
};

const FeaturesHome = ({ features }) => (
    <div className='features-home'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-2 justify-content-center'>
            {features.map((feature, i) => (
                <MyLink feature={feature} key={i}>
                    <img src={feature.image} />
                    <h3>{feature.title}</h3>
                </MyLink>
            ))}
        </div>
    </div>
);

export default FeaturesHome;
