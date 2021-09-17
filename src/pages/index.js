import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Call from '../components/Call';
import Twitter from '../components/Twitter';
import LastPosts from '../components/LastPosts';
import Image from "../components/Image";



const Home = props => {
    const intro = props.data.intro;
    const site = props.data.site.siteMetadata;
    const services = props.data.services.edges;
    const features = props.data.features.edges;
    const introImageClasses = `intro-image ${intro.frontmatter.intro_image_absolute && 'intro-image-absolute'
        } ${intro.frontmatter.intro_image_hide_on_mobile &&
        'intro-image-hide-mobile'
        }`;
    const lastPosts = props.data.posts.edges;

    useEffect(() => {
        if (typeof twttr.widgets !== 'undefined') {
            twttr.widgets.load();
        }
    }, []);

    return (
        <Layout bodyClass='page-home'>
            <SEO title={site.title} />
            <Helmet>
                <meta
                    name='description'
                    content='Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme.'
                />
            </Helmet>

            
            <div>
                <Image/>
            </div>
            <div className='d-flex justify-content pt-2 px-4'>
            
                <div className='flex-grow-1 pr-4'>
                    <LastPosts posts={lastPosts} />
                </div>
                <div className='min-w-max'>
                    <Twitter />
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        services: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/.*/" } }
            sort: { fields: [frontmatter___weight], order: ASC }
            limit: 6
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
        posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/.*/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 4
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                        featuredImage
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 280)
                }
            }
        }
        intro: markdownRemark(
            fileAbsolutePath: { regex: "/content/index.md/" }
        ) {
            html
            frontmatter {
                image
                intro_image
                intro_image_absolute
                intro_image_hide_on_mobile
                title
            }
        }
        features: allFeaturesJson {
            edges {
                node {
                    id
                    title
                    description
                    image
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default Home;
