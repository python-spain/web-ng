import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Social = props => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allSocialJson {
        edges {
          node {
            name
            image
            link
            imageDark
          }
        }
      }
    }
  `);
  const dark = props.dark;
  return (
    <div className="social">
      {data.allSocialJson.edges.map(({ node }) => (
        <a key={node.name} href={node.link} target="blank"><img src={dark? node.imageDark : node.image} title={node.name} alt={node.name} /></a>
      ))}
    </div>
  );
};

export default Social;
