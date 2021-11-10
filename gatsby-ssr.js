import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key='mailjet-widget-modal'
            type='text/javascript'
            src='https://app.mailjet.com/statics/js/widget.modal.js'
        ></script>,
    ]);
};
