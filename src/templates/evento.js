import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

const Evento = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { logo } = data.markdownRemark.frontmatter;
  const { image } = data.markdownRemark.frontmatter;
  const { date } = data.markdownRemark.frontmatter;
  const { website } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  

  return (
    <Layout bodyClass="page-eventos-single">
      <div className="container py-3">
        <div className="row justify-content-start">
          <div className="image-container col-12 col-md-8 offset-md-2 mb-2">
              <img src={image} alt={title}></img>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-2">
              <div className="logo-container">
                <img src={logo} alt={title}></img>
              </div>
          </div>
          <div className="col-12 col-md-8">
              <h1 className="title">{title}</h1>
              <h3>{date}</h3>
              <a className="button" href={website} target="_blank">Enlace a la web</a>
              <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
          </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        logo
        image
        date(formatString: "DD MMMM YYYY")
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
