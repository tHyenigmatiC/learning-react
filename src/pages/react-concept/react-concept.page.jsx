import React from 'react';
import { Link } from 'react-router-dom';


function ReactConcept({ navigate, location}) {
  return (
    <>
      <div className='grid grid-cols-2 gap-8 h-min'>
        <Link
            className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/control-rerendering'
        >
            <h5
                className="mb-2 text-center text-xl font-light tracking-tight text-gray-900 dark:text-white"
            >
                Control Rerendering
            </h5>
        </Link>
        <Link
            className='block p-6 max-w-sm hover:text-white bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/use-memo'
        >
            <h5
                className="mb-2 text-center text-xl font-light tracking-tight text-gray-900 dark:text-white"
            >
                Use Memo
            </h5>
        </Link>

      </div>
    </>
  );
}

export default ReactConcept;
