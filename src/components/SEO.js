import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/fav.png';

const SEO = (props) => (
    <StaticQuery
        query={detailsQuery}
        render={(data) => {
            const title = props.title;
            const fullTitle = props.dontFormat
                ? `${title}`
                : `${title} - ${data.site.siteMetadata.title}`;
            const description =
                props.description || data.site.siteMetadata.description;
            const imageURL = props.image || data.intro.frontmatter.image_mobile;
            return (
                <Helmet
                    htmlAttributes={{
                        lang: 'en',
                    }}
                    title={title}
                    titleTemplate={
                        props.dontFormat
                            ? `%s`
                            : `%s - ${data.site.siteMetadata.title}`
                    }
                    link={[
                        {
                            rel: 'shortcut icon',
                            type: 'image/png',
                            href: `${favicon}`,
                        },
                    ]}
                >
                    <meta name='description' content={description} />

                    <meta property='og:title' content={fullTitle} />
                    <meta property='og:description' content={description} />
                    <meta property='og:image' content={imageURL} />

                    <meta name='twitter:card' content='summary_large_image' />
                    <meta name='twitter:site' content='@python_es' />
                    <meta name='twitter:title' content={fullTitle} />
                    <meta name='twitter:description' content={description} />
                    <meta name='twitter:image' content={imageURL} />
                </Helmet>
            );
        }}
    />
);

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    keywords: [],
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        intro: markdownRemark(
            fileAbsolutePath: { regex: "/content/index.md/" }
        ) {
            frontmatter {
                image_mobile
            }
        }
    }
`;
