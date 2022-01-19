import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const Blog = (props) => {
    const lastPosts = props.data.posts.edges;
    const posts = lastPosts.map(({ node }) => {
        return {
            id: node.id,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            summary: node.excerpt,
            image: node.frontmatter.image.childImageSharp.gatsbyImageData,
        };
    });

    return (
        <Layout bodyClass='page-default-single'>
            <SEO
                title='Blog'
                description='Últimas noticias sobre la asociación y sus actividades.'
            />
            <div className='container my-6'>
                <div className='justify-content-start'>
                    <h1 className='title'>Blog</h1>
                    <div className='row'>
                        <div className='col'>
                            <PostList posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query BlogQuery {
        posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/.*/" } }
            sort: { fields: [frontmatter___date], order: DESC }
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
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 280)
                }
            }
        }
    }
`;

export default Blog;
