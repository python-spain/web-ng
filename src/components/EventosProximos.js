import { Link } from 'gatsby';
import React from 'react';

const EventosProximos = props => (
  <>
    {props.eventosProximos.length > 0 && (
      <div>
        <div className='pb-6'>
          <div>
            {props.eventosProximos.map(({ node }) => (
              <div key={node.id} className='mb-3'>
                <div className='eventos-proximos align-items-start'  style={{ backgroundImage: `url(${node.frontmatter.image})` }}>
                  <Link className='eventos-proximos-box' to={node.fields.slug}>
                    <div className="eventos-proximos-content">
                      {node.frontmatter.image && (
                        <div className='eventos-proximos-logo'>
                          <img src={node.frontmatter.logo} alt={node.frontmatter.title}/>
                        </div>
                      )}
                      <div className='eventos-proximos-title'>
                        <h1>{node.frontmatter.title}</h1>
                        <h3>{node.frontmatter.date}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
);

export default EventosProximos;
