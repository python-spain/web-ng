import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const Blog = (props) => {
    const lastPosts = props.data.posts.edges;
    const posts = lastPosts.map(({ node }) => {
        return {
            id: node.id,
            image: node.frontmatter.featuredImage,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            summary: node.excerpt,
        };
    });

  return (
    <Layout bodyClass='page-default-single'>
      <div className='container pb-6 pt-6'>
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
    }
`;

export default Blog;
