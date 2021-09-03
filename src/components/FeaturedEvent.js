import { Link } from 'gatsby';
import React from 'react';
import Eventos from '../pages/eventos';

const FeaturedEvent = ({ evento }) => {

  return(
      <div key={evento.node.id} className='mb-0'>
        <div className='featured-event align-items-start'  style={{ backgroundImage: `url(${evento.node.frontmatter.image})` }}>
          <Link className='box' to={evento.node.fields.slug}>
            <div className='content'>
              <div className='logo'>
                <img src={evento.node.frontmatter.logo} alt={evento.node.frontmatter.title}/>
              </div>
              <div className='title'>
                <h1>{evento.node.frontmatter.title}</h1>
                <h3>{evento.node.frontmatter.date}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
};

export default FeaturedEvent;
