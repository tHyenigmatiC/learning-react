import React from 'react';
import { Link } from 'react-router-dom';

const ReactPatternsPage = () => (
    <div className='grid grid-cols-3 gap-8 h-min'>
        <Link
            className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/context-module-function'
        >
            <h5
                className="mb-2 text-xl text-center font-light tracking-tight text-gray-900 dark:text-white"
            >
                Context Module Function
            </h5>
        </Link>
    </div>
)

export default ReactPatternsPage;