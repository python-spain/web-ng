import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Evento = ({ data }) => {
    const { title } = data.markdownRemark.frontmatter;
    const image =
        data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData;
    const { fullDate } = data.markdownRemark.frontmatter;
    const { website } = data.markdownRemark.frontmatter;
    const { html, excerpt } = data.markdownRemark;

    return (
        <Layout bodyClass='page-default-single'>
            <SEO title={title} description={excerpt} image={image} />
            <div className='container my-4'>
                <div className='row justify-content-start'>
                    <div className='col-12 col-md-8'>
                        <GatsbyImage
                            className='w-100'
                            image={image}
                            alt={title}
                        />
                    </div>
                </div>
                <div className='row justify-content-start'>
                    <div className='col-12 col-md-8 mt-3'>
                        <h1 className='mb-1'>{title}</h1>
                        <h3>
                            {fullDate} <span className='ms-1'>|</span>
                            <a className='ms-1' href={website} target='_blank'>
                                Enlace a la web
                            </a>
                        </h3>
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
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                date
                fullDate
                website
            }
            fields {
                slug
            }
            html
            excerpt
        }
    }
`;

export default Evento;
