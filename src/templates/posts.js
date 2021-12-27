import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Post = ({ data }) => {
    const { title, image } = data.markdownRemark.frontmatter;
    const { html, excerpt } = data.markdownRemark;
    const { date } = data.markdownRemark.frontmatter;
    return (
        <Layout bodyClass='page-default-single'>
            <SEO title={title} description={excerpt} image={image} />
            <div className='container my-6'>
                <div className='row justify-content-start'>
                    <div className='col-12 col-md-8'>
                        <h1 className='title mb-1'>{title}</h1>
                        <h3>{date}</h3>
                        <div
                            className='content mt-2'
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                image
            }
            fields {
                slug
            }
            html
            excerpt
        }
    }
`;

export default Post;
