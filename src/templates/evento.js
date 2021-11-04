import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

const Evento = ({ data }) => {
    const { title } = data.markdownRemark.frontmatter;
    const { logo } = data.markdownRemark.frontmatter;
    const { image } = data.markdownRemark.frontmatter;
    const { fullDate } = data.markdownRemark.frontmatter;
    const { website } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;

    return (
        <Layout bodyClass='page-eventos-single'>
            <div className='container my-4'>
                <div className='row justify-content-start'>
                    <div className='image-container col-12 col-md-8'>
                        <img src={image} alt={title}></img>
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
                logo
                image
                date
                fullDate
                website
            }
            fields {
                slug
            }
            html
        }
    }
`;

export default Evento;
