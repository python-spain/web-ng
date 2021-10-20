import React from 'react';
import { Link } from 'gatsby';

const EventSlide = ({ evento }) => {

  return(
    <div key={evento.id} className='mb-0'>
      <div className='event-slide'>
        <img className='img-fluid event-image' src={evento.image}></img>
        <div className='content'>
          <div className='event-logo'>
            <img src={evento.logo} alt={evento.title}/>
          </div>
          <div className="mt-1">
            <h3>{evento.date}</h3>
            <h2 className="title">{evento.title}</h2>
            <p>{evento.text}</p>
            <Link to={evento.link} className="button">Más información</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EventSlide;
