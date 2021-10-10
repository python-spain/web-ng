import React from "react";
import { Link } from 'gatsby';
import imagenSocios from "../../static/images/inicio/socios.jpg";
import imagenAprende from "../../static/images/inicio/aprende-python.jpg";
import imagenNewsletter from "../../static/images/inicio/newsletter.jpg";


const ImageHome = () => (
    <div className="image-home">
        <div className="image-top">
            <div className="container content mb-3">
                <img src={imagenSocios}/>
                <div className="text">
                    <h1>Ya somos 1000 socios, te estamos esperando. </h1>
                    <Link className="button" to="/hazte-socio">Hazte socio</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="content col-6">
                    <img src={imagenNewsletter}/>
                    <div className="text">
                        <h3>Si te gusta el contenido de lo que lees no te olvides de subscribirte a nuestra NEWSLETTER.</h3>
                    </div>
                </div>
                <div className="content col-6">
                    <img src={imagenAprende}/>
                    <div className="text">
                        <h3>¿Quieres aprender Python? En nuestra web encontrarás todos los recursos.</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default ImageHome;
