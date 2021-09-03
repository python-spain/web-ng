import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import FeaturedEvent from '../components/FeaturedEvent'

const Evento = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { subtitle } = data.markdownRemark.frontmatter;
  const { logo } = data.markdownRemark.frontmatter;
  const { date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  

  return (
    <Layout bodyClass="page-eventos-single">
      
      <div className="container pb-6 pt-6 pt-md-10 pb-md-10">
        <div className="row justify-content-start">
          <div className="logo-container col-12 col-md-2">
              <img src={logo} alt={title}></img>
          </div>
          <div className="col-12 col-md-8">
              <h1 className="title">{title}</h1>
              <h2>{subtitle}</h2>
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
        subtitle
        logo
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
