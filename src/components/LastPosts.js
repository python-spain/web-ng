import { Link } from 'gatsby';
import React from 'react';

const LastPosts = props => (
  <>
    <h2 className='text-center subHeader mb-2'>ÚLTIMOS POSTS</h2>
    {props.posts.length > 0 && (
      <div>
        <div className='pb-2'>
          <div>
            {props.posts.map(({ node }) => (
              <div key={node.id} className='mb-3'>
                <div className='posts align-items-start'>
                  {node.frontmatter.featuredImage && (
                    <div className='mb-1'>
                      <img src={node.frontmatter.featuredImage} />
                    </div>
                  )}
                  <h2 className='text-dark'>
                    <Link to={node.fields.slug} className='post-title'>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{node.frontmatter.date}</p>
                  <div className='post-content'>
                    {node.excerpt}{' '}
                    <Link to={node.fields.slug} className='post-title'>
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
);

export default LastPosts;
