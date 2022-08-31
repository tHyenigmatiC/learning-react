import React from 'react';

import useFetch from '../../effects/use-fetch';

const Post = ({ postId }) => {
    const post = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);
    
    return (
        <div className='flex items-center justify-center p-4 bg-blue-100 rounded h-96 w-96'>
            {
                post ? (
                    <div>
                        <h1 className='mb-2 text-xl font-bold capitalize'>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ) : (
                    <p>Post not found</p>
                )
            }
        </div>
    );
}

export default Post