import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import EventosProximos from '../components/EventosProximos';

const Eventos = (props) => {
    const eventosProximos = props.data.eventosProximos.edges;
    const eventosPasados = props.data.eventosPasados.edges;

    return (
        <Layout bodyClass='page-services'>
            <SEO title='Eventos' />

            <div className='container pt-6'>
                <div className='row'>
                    <div className='col-12'>
                        <EventosProximos eventosProximos={eventosProximos} />
                    </div>
                </div>
            </div>

            <div className='container pb-6'>
                <h1>Eventos Pasados</h1>
                <div className='row'>
                    {eventosPasados.map((edge) => (
                        <div key={edge.node.id} className='col-12 col-md-4 mb-1'>
                            <h2>
                                <Link to={edge.node.fields.slug}>
                                    {edge.node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>{edge.node.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query EventosQuery {
        eventosProximos: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/eventos/.*/" }, frontmatter: { featured: {eq: true}} }
            sort: { fields: [frontmatter___date], order: DESC }
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
                        date(formatString: "DD MMMM YYYY")
                        logo
                    }
                }
            }
        }
        eventosPasados: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/eventos/.*/" }, frontmatter: { featured: {eq: false}} }
            sort: { fields: [frontmatter___date], order: DESC }
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
                        date(formatString: "DD MMMM YYYY")
                    }
                }
            }
        }
    }
`;

export default Eventos;