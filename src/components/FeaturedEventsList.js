import React from 'react';
import FeaturedEvent from './FeaturedEvent';

const FeaturedEventsList = ({ eventos }) => {
    return (
        <div className='container'>
            {eventos.map(evento => (
                <FeaturedEvent evento={evento} key={evento.node.id}/>
            ))}
        </div>
    );
};

export default FeaturedEventsList;