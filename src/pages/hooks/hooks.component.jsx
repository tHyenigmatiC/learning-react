import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HooksPage = () => (
    <>
        <nav className='grid grid-cols-3 gap-8 grid-rows-8 h-min'>
            <Link
                className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='/custom-hooks'
            >
                <h5
                    className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
                >
                    Custom Hook
                </h5>
            </Link>
            <Link
                className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='/use-reducer'
            >
                <h5
                    className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
                >
                    useReducer
                </h5>
            </Link>
        </nav>
    </>
);

export default HooksPage;