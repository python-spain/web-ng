import React from "react";
import backgroundImage from "../../static/images/inicio/pycones-2019.jpg";
import { Link } from 'gatsby';

const ImageHome = () => (
    <div className="image-home">
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="content">
                <Link className="btn" to="/hazte-socio/"><h1>¡HAZTE SOCIO!</h1></Link>
            </div>
        </div>
    </div>
);

export default ImageHome
