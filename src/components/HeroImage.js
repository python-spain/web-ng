import React from "react";
import { Link } from 'gatsby';



const HeroImage = ({image}) => (
    <div className="hero-image mb-5">
        <div className="container">
            <img className="my-1" src={image}/>
            <Link to="/hazte-socio"><h1 className="text-center mt-1">Te estamos esperando ¡Hazte socio! </h1></Link>
        </div>
    </div>
);

export default HeroImage;
