import { Link } from 'gatsby';
import React from 'react';
import Eventos from '../pages/eventos';

const FeaturedEvent = ({ evento }) => {

  return(
      <div key={evento.id} className='mb-0'>
        <div className='featured-event align-items-start'  style={{ backgroundImage: `url(${evento.image})` }}>
          <Link className='box' to={evento.slug}>
            <div className='content'>
              <div className='logo'>
                <img src={evento.logo} alt={evento.title}/>
              </div>
              <div className='title'>
                <h1>{evento.title}</h1>
                <h3>{evento.date}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
};

export default FeaturedEvent;
