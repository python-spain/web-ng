import React from 'react';
import { Link } from 'gatsby';

const Post = ({ post, i }) => {
    return (
        <div key={post.id} className='mb-3 col'>
            <div className='list-post align-items-start '>
                {!!post.image && (
                    <div className='mb-1'>
                        <img
                            src={post.image}
                            className='img-fluid cover-img'
                            alt={`picture-${post.id}`}
                        />
                    </div>
                )}
                <h2 className='text-dark'>
                    <Link to={post.link} className='post-title'>
                        {post.title}
                    </Link>
                </h2>
                <p>{post.date}</p>
                <div className='post-content'>
                    {post.summary} <Link to={post.link}>Leer más</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
