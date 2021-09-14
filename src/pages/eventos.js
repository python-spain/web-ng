import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import FeaturedEvents from '../components/FeaturedEvents';
import EventPost from '../components/EventPost';
import EventSlide from '../components/EventSlide';

const Eventos = (props) => {
    const eventosProximos = props.data.eventosProximos.edges.map(({ node }) => {
        return {
            id: node.id,
            image: node.frontmatter.image,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            logo: node.frontmatter.logo,
        };
    });
    const eventosPasados = props.data.eventosPasados.edges.map(({ node }) => {
        return {
            id: node.id,
            image: node.frontmatter.image,
            link: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            logo: node.frontmatter.logo,
        };
    });

    return (
        <Layout bodyClass='page-default-single'>
            <SEO title='Eventos' />           

            <div className='pt-3'>
                <FeaturedEvents eventos={eventosProximos}></FeaturedEvents>
            </div>


            <div className='container pt-5'>
                <h2 className='title'>Eventos Pasados</h2>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {eventosPasados.map(evento => (
                    <EventPost evento={evento} key={evento.id}/>
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
                    excerpt (pruneLength: 500)
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
                    internal {
                        content
                    }
                }
            }
        }
    }
`;

export default Eventos;
