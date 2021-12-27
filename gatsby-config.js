const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
    siteMetadata: {
        title: 'Python España',
        description:
            'Python España es una asociación sin ánimo de lucro cuyo propósito es promover el uso del lenguaje de programación Python en España, servir como punto de encuentro a aquellos interesados en su uso y darles soporte en la medida de sus posibilidades.',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-transformer-json',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-leaflet',
        'gatsby-plugin-fontawesome-css',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/content`,
                name: 'content',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/data`,
                name: 'data',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: guid || 'UA-XXX-1',
                // Puts tracking script in the head instead of the body
                head: false,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'Limelight:400',
                    'Rubik+Mono+One:400',
                    'Rubik:400, 700, 900',
                    'Bowlby+One+SC: 400',
                ],
                display: 'swap',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
            },
        },
    ],
};
