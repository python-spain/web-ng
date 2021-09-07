import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

const EventsSlider = ({ slides }) => {

    return(
        <Carousel className='events-slider'>            
            {slides.map(slide => (
            <Carousel.Item>
                <img src={slide.image} alt={slide.title}/>
                    <Carousel.Caption>
                        <img src={slide.logo} alt={slide.title}/>
                        <div className='text'>
                            <h1>{slide.title}</h1>
                            <h4>{slide.date}</h4>
                        </div>
                    </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
    )
  };
  
  export default EventsSlider;
  
