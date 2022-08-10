import React from 'react';


import Post from './post.component';
import User from './user.component';

const CustomHook = () => {
    return (
        <div className='grid grid-cols-2 gap-x-12 h-3/4'>
            <User userId={5}/>
            <Post postId={15}/>
        </div>
    );
}

export default CustomHook;