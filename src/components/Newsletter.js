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
                data-token='2722fe3c3b864c03ac395a1f56b195f9'
                className='mj-w-data'
                data-apikey='5JG8'
                data-w-id='IT4'
                data-lang='es_ES'
                data-base='https://app.mailjet.com'
                data-width='640'
                data-height='437'
                data-statics='statics'
                style={{ position: 'absolute', top: 0 }}
            ></data>

            <div
                className='mj-w-button mj-w-btn'
                data-token='2722fe3c3b864c03ac395a1f56b195f9'
            >
                <div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
