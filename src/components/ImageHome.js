import React from "react";
import { Link } from 'gatsby';
import imagenSocios from "../../static/images/inicio/socios.jpg";
import imagenAprende from "../../static/images/inicio/aprende-python.jpg";
import imagenNewsletter from "../../static/images/inicio/newsletter.jpg";
import imagenComunidades from "../../static/images/inicio/comunidades.png";



const ImageHome = () => (
    <div className="image-home">
        <div className="image-top">
            <div className="container content mb-3">
                <img className="mt-1" src={imagenSocios}/>
                <div className="text mt-2">
                    <h1>Te estamos esperando ¡Hazte socio! </h1>
                    {/* <Link className="button" to="/hazte-socio"></Link> */}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="content col-4">
                    <img src={imagenComunidades}/>
                    <div className="text">
                        <h3>¿Conoces las comunidades locales de Python? Encuentra la tuya</h3>
                    </div>
                </div>
                <div className="content col-4">
                    <img src={imagenAprende}/>
                    <div className="text">
                        <h3>¿Quieres aprender Python? Aquí encontrarás todos los recursos</h3>
                    </div>
                </div>
                <div className="content col-4">
                    <img src={imagenNewsletter}/>
                    <div className="text">
                        <h3>No te olvides de subscribirte a nuestra newsletter</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
);

export default ImageHome;
