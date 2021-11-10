import React, { useEffect } from 'react';

const Newsletter = ({ children }) => {
    useEffect(() => {
        // `displayWidget` es una función que se define cuando se carga Mailjet
        // y que al llamarla añade un listener a los elementos con la clase "mj-w-btn"
        // para que al pulsarlos se abra el pop-in de subscripción

        // El archivo que carga esta función se incluye después del body en `gatsby-ssr.js` .
        if (typeof displayWidget !== 'undefined') {
            displayWidget();
        }
    }, []);
    return (
        <>
            <data
                id='mj-w-res-data'
                data-token='1ed34321b65ae94833b87a960f78136c'
                className='mj-w-data'
                data-apikey='5JG8'
                data-w-id='K5l'
                data-lang='es_ES'
                data-base='https://app.mailjet.com'
                data-width='640'
                data-height='433'
                data-statics='statics'
                style={{ position: 'absolute', top: 0 }}
            ></data>

            <div
                className='mj-w-button mj-w-btn'
                data-token='1ed34321b65ae94833b87a960f78136c'
            >
                <div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
