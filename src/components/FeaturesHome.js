import React from "react";
import { Link } from 'gatsby';
import imagenAprende from "../../static/images/inicio/aprende-python.jpg";
import imagenNewsletter from "../../static/images/inicio/newsletter.jpg";
import imagenComunidades from "../../static/images/inicio/comunidades.png";



const FeaturesHome = () => (
    <div className="features-home">
        <div className="container">
            <div className="row">
                <Link to="/comunidades-locales" className="content col-12 col-md-6 col-lg-4">
                    <img src={imagenComunidades}/>
                    <h3>¿Conoces las comunidades locales de Python? Encuentra la tuya</h3>
                </Link>
                <Link to="/aprende-python"  className="content col-12 col-md-6 col-lg-4">
                    <img src={imagenAprende}/>
                    <h3>¿Quieres aprender Python? Aquí encontrarás todos los recursos</h3>
                </Link>
                <Link to=""  className="content col-12 col-md-6 col-lg-4">
                    <img src={imagenNewsletter}/>
                    <h3>No te olvides de subscribirte a nuestra newsletter</h3>
                </Link>
            </div>
        </div>
    </div>
);

export default FeaturesHome;