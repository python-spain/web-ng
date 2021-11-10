import React, { useEffect } from 'react';

const Newsletter = ({ children }) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://app.mailjet.com/statics/js/widget.modal.js';
        script.type = 'text/javascript';
        script.async = true;

        document.body.appendChild(script);
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
