import React from "react";
import backgroundImage from "../../static/images/inicio/python2019.jpg";
import { Link } from 'gatsby';

const ImageHome = () => (
    <div className="image-home">
        <div className="container content">
            <img src={backgroundImage}/>
            <Link className="button" to="/hazte-socio/">¡HAZTE SOCIO!</Link>
        </div>
    </div>
);

export default ImageHome;
