import React from 'react';
import { Link } from 'gatsby';
import Eventos from '../pages/eventos';

const EventSlide = ({ evento }) => {

  return(
    <div key={evento.id} className='mb-0'>
      <Link to={evento.link} className='event-slide'>
        <img className='img-fluid event-image' src={evento.image}></img>
        <div className='content'>
          <div className='logo'>
            <img src={evento.logo} alt={evento.title}/>
          </div>
          <div>
            <h1>{evento.title}</h1>
            <h3>{evento.date}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
};

export default EventSlide;
