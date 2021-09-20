import React from 'react';
import { Carousel } from 'react-bootstrap';
import EventSlide from './EventSlide';
import EventPost from './EventPost';

const FeaturedEvents = ({ eventos }) => {

    return(
        
        <div className='featured-events'>
            <div className='container'>
                <div className='row row-cols-1'>
                    <Carousel variant='dark' className='featured-events-slider'>            
                    {eventos.map(evento => (
                    <Carousel.Item>  
                        <EventSlide evento={evento} key={evento.id}/>
                    </Carousel.Item>
                    ))}
                    </Carousel>
                </div>
            </div>
            <div className='featured-events-mobile'>
                <div className='container py-4'>
                    <div className='row row-cols-1 mx-n2'>
                        {eventos.map(evento => (
                            <EventPost evento={evento} key={evento.id} featured={true}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
  };
  
  export default FeaturedEvents;
  
