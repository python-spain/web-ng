import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Basic = ({ data }) => {
    const { title } = data.markdownRemark.frontmatter;
    const { html, excerpt } = data.markdownRemark;
    return (
        <Layout bodyClass='page-default-single'>
            <SEO title={title} description={excerpt} />
            <div className='container my-6'>
                <div className='row justify-content-start'>
                    <div className='col-12 col-md-8'>
                        <h1 className='title'>{title}</h1>
                        <div
                            className='content'
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
                path
            }
            fields {
                slug
            }
            html
            excerpt
        }
    }
`;

export default Basic;
