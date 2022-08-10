import React from 'react';


import UserProfile from '../user-profile/user-profile.component';
import UserList from '../user-list/user-list.component';


const HOCExample = () => {
    return (
        <>
        <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
        <UserProfile
            name='Yihua'
            email='yihuazhang@gmail.com'
            dataSource='https://jsonplaceholder.typicode.com/posts'
        />
      </>
    );
}

export default HOCExample;