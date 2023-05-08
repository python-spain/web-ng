import React from 'react';

const Newsletter = (props) => {
    return (
        <>
            <iframe
                data-w-type='embedded'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                src='https://xih15.mjt.lu/wgt/xih15/tsr/form?c=40a38d71'
                width='100%'
                style={{ height: 500 }}
            ></iframe>
            <script
                type='text/javascript'
                src='https://app.mailjet.com/pas-nc-embedded-v1.js'
            ></script>
        </>
    );
};

export default Newsletter;
