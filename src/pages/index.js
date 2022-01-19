import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Twitter from '../components/Twitter';
import PostList from '../components/PostList';
import HeroImage from '../components/HeroImage';
import FeaturesHome from '../components/FeaturesHome';
import FeaturedEvents from '../components/FeaturedEvents';

const Home = (props) => {
    const site = props.data.site.siteMetadata;
    const lastPosts = props.data.posts.edges.map(({ node }) => ({
        id: node.id,
        image: node.frontmatter.image,
        link: node.fields.slug,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        summary: node.excerpt,
    }));
    const featuredEvents = props.data.featuredEvents.edges.map(({ node }) => ({
        id: node.id,
        image: node.frontmatter.image,
        link: node.fields.slug,
        title: node.frontmatter.title,
        date: node.frontmatter.fullDate,
        logo: node.frontmatter.logo,
        text: node.frontmatter.description,
    }));

    useEffect(() => {
        if (typeof twttr.widgets !== 'undefined') {
            twttr.widgets.load();
        }
    }, []);

    return (
        <Layout bodyClass='page-home'>
            <SEO title={site.title} dontFormat />
            <Helmet></Helmet>

            <HeroImage />

            <div className='container'>
                <FeaturesHome />

                <div className='mt-8'>
                    <h1>Eventos destacados</h1>
                    <FeaturedEvents eventos={featuredEvents}></FeaturedEvents>
                </div>

                <div className='mt-8 mb-3'>
                    <div className='row'>
                        <div className='col-12 col-lg-8'>
                            <h1>Últimos posts</h1>
                            <PostList posts={lastPosts} twoColumns />
                        </div>
                        <div className='col-12 col-lg-4'>
                            <Twitter />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        intro: markdownRemark(
            fileAbsolutePath: { regex: "/content/index.md/" }
        ) {
            html
            frontmatter {
                image
                image_mobile
            }
        }
        featuredEvents: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/eventos/.*/" }
                frontmatter: { featured: { eq: true } }
            }
            sort: { fields: [frontmatter___date], order: ASC }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        image
                        fullDate
                        logo
                        description
                    }
                }
            }
        }
        posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/.*/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 2
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(
                            formatString: "D [de] MMMM [de] YYYY"
                            locale: "es"
                        )
                        image
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 280)
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
