import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-3 gap-8 grid-rows-8 h-min'>
            <Link
                className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='hoc-example'
            >
                <h5
                    className="mb-2 text-center text-xl font-light tracking-tight text-gray-900 dark:text-white"
                >
                    HOC Example
                </h5>
            </Link>
            <Link
                className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='react-concepts'
            >
                <h5
                    className="mb-2 text-center  text-xl font-light tracking-tight text-gray-900 dark:text-white"
                >
                    React Concepts
                </h5>
            </Link>
            <Link
                className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='hooks'
            >
                <h5
                    className="mb-2 text-xl text-center font-light tracking-tight text-gray-900 dark:text-white"
                >
                    Hooks
                </h5>
            </Link>
        </div>
    )
}

export default Home;