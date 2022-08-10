import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HooksPage = () => (
    <>
        <nav>
            <Link
                className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                to='/custom-hooks'
            >
                <h5
                    className="mb-2 text-center  text-xl font-light tracking-tight text-gray-900 dark:text-white"
                >
                    Custom Hook
                </h5>
            </Link>
        </nav>
    </>
);

export default HooksPage;