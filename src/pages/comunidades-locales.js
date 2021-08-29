import React from 'react';
import LeafletMap from '../components/LeafletMap';
import Layout from '../components/Layout';


const ComunidadesLocales = () => {

    return (
        <Layout bodyClass="page-default-single">
            <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
                <div className="row justify-content-start">
                    <div className="col-12 col-md-8">
                        <h1 className="title">Comunidades locales</h1>
                        <p className="content ">¡Python se disfruta mejor en compañía! Aquí puedes ver las comunidades locales de Python en España, enlaces a sus redes sociales y vídeo de presentación. Encuentra el grupo que más cerca te queda y conecta con gente como tú.</p>
                        <p className="content mb-2">¿Crees que falta alguna?<a href="https://github.com/python-spain/web/edit/master/content/pages/comunidades-locales.md" target="_blank">¡Puedes añadirla!</a></p>
                        <p className="content mb-2">¿No hay un grupo en tu zona y te gustaría crearlo? Escríbenos a <a href="mailto:contacto@es.python.org">contacto@es.python.org</a>  y te ayudaremos en todo lo que podamos. :)</p>
                    </div>
                </div>
                <LeafletMap />
            </div>
        </Layout>
    );


}
export default ComunidadesLocales
