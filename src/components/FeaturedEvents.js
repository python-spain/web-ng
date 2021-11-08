import React from 'react';
import { Carousel } from 'react-bootstrap';
import EventSlide from './EventSlide';
import EventPost from './EventPost';

const FeaturedEvents = ({ eventos }) => {
    return (
        <div className='featured-events'>
            <Carousel className='featured-events-slider'>
                {eventos.map((evento) => (
                    <Carousel.Item key={evento.id}>
                        <EventSlide evento={evento} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='featured-events-mobile'>
                <div className='row cols-1 row-cols-sm-2 g-3'>
                    {eventos.map((evento) => (
                        <EventPost
                            evento={evento}
                            key={evento.id}
                            featured={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedEvents;
