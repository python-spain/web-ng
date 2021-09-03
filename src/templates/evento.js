import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

const Evento = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { subtitle } = data.markdownRemark.frontmatter;
  const { logo } = data.markdownRemark.frontmatter;
  const { image } = data.markdownRemark.frontmatter;
  const { date } = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;
  const { html } = data.markdownRemark;
  

  return (
    <Layout bodyClass="page-eventos-single">
  
      {image && (<div className='container pt-3 image-container' style={{ backgroundImage: `url(${image})` }}></div>)}
      <div className="container py-3">
        <div className="row justify-content-start">
          <div className="col-12 col-md-4">
            <div className="logo-container">
              <img src={logo} alt={title}></img>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <h1 className="title">{title}</h1>
            <h3>{date}</h3>
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
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Evento;
