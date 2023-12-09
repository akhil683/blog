import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const {id, thumbnail, title, data, author} = post;

  return (
    <div className='hover:opacity-100 opacity-90 duration-200 bg-gray-300 border border-gray-600 w-full sm:w-72 rounded-sm'>
      <Link key={id} to={`/posts/${post.id}`} >
        <div className='w-30 h-25'>
          <img src={thumbnail} alt={title} className='h-48 w-full object-cover' />
        </div>
        <h3 className='text-xl px-2 pt-2'>{title}</h3>
          <div className='flex justify-between px-2'>
          <p>
            {post.data.length <= 25 
            ? post.data 
            : `${post.data.slice(0,25)}...`
            }
          </p>
          <span className='text-green-800 font-bold'>By {author}</span>
        </div>
      </Link>
    </div>
  )
}

export default Post
