import { Link } from 'gatsby';
import React from 'react';

const LastPosts = (props) => {
    return (
        <>
            <h2>ÚLTIMOS POSTS</h2>
            {props.posts.length > 0 && (
                <div>
                    <div className='pb-6'>
                        <div>
                            {props.posts.map(({ node }) => (
                                <div key={node.id} className='mb-2'>
                                    <div className='posts align-items-start'>
                                        {node.frontmatter.featuredImage && (
                                            <div className='mb-1'>
                                                <img
                                                    src={
                                                        node.frontmatter
                                                            .featuredImage
                                                    }
                                                />
                                            </div>
                                        )}
                                        <h2 className='text-dark'>
                                            <Link
                                                to={node.fields.slug}
                                                className='post-title'
                                            >
                                                {node.frontmatter.title}
                                            </Link>
                                        </h2>
                                        <p>{node.frontmatter.date}</p>
                                        <div className='post-content'>
                                            {node.excerpt}
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
};

export default LastPosts;
