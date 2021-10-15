import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Twitter from '../components/Twitter';
import PostList from '../components/PostList';
import ImageHome from "../components/ImageHome";
import FeaturedEvents from "../components/FeaturedEvents";


const Home = props => {
    const site = props.data.site.siteMetadata;
    const lastPosts = props.data.posts.edges.map(({ node }) => {
        return {
            id: node.id,
            image: node.frontmatter.featuredImage,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            summary: node.excerpt,
        };
    });
    const featuredEvents = props.data.featuredEvents.edges.map(({ node }) => {
        return {
            id: node.id,
            image: node.frontmatter.image,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.fullDate,
            logo: node.frontmatter.logo,
            text: node.excerpt,
        };
    });

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

            <ImageHome/>

            <div className="mt-8">
                <div className="container">
                    <h1 className='title'>Eventos destacados</h1>
                </div>
                <FeaturedEvents eventos={featuredEvents}></FeaturedEvents>
            </div>

            <div className='container mt-8'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        <h1 className='title'>Últimos posts</h1>
                        <PostList posts={lastPosts} twoColumns/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Twitter/>
                    </div>
                </div>    
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        featuredEvents: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/eventos/.*/" }, frontmatter: { featured: {eq: true}} }
            sort: { fields: [frontmatter___date], order: ASC }
        ) {
            edges {
                node {
                    id
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        featured
                        image
                        fullDate
                        logo
                    }
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
