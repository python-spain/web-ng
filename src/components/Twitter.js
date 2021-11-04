import React from 'react';

import '../scss/style.scss';

const Twitter = () => (
    <div>
        <a
            className='twitter-timeline'
            data-lang='es'
            data-width='400'
            data-height='600'
            data-theme='light'
            href='https://twitter.com/python_es?ref_src=twsrc%5Etfw'
        >
            Tweets by python_es
        </a>
        <script
            async
            src='https://platform.twitter.com/widgets.js'
            charSet='utf-8'
        ></script>
    </div>
);

export default Twitter;
