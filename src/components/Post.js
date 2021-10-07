import React from 'react';
import { Link } from 'gatsby';
import logo from '../../static/images/logo/logo.png';

const Post = ({ post }) => {
    return (
        <div key={post.id} className='mb-3 col'>
            <div className='list-post align-items-start '>
{/*                 <div
                    className='mb-1 d-flex justify-content-center align-items-center'
                    style={{ width: '100%', height: '100%' }}
                >
                    <img
                        src={post.image ?? logo}
                        className='img-fluid cover-img'
                        alt={`picture-${post.id}`}
                    />
                </div>
 */}
                <h2 className='text-dark mt-auto'>
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
