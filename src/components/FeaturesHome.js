import React from "react";
import { Link } from 'gatsby';



const FeaturesHome = ({features}) => (
    <div className="features-home">
        <div className="row row-cols-1 row-cols-lg-3 gy-2 justify-content-center">
            {features.map(feature => (
                <Link to={feature.url} className="content">
                    <img src={feature.image}/>
                    <h3>{feature.title}</h3>
                </Link>
            
            ))}
        </div>
    </div>
);

export default FeaturesHome;