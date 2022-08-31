import React from 'react';
import { Link } from 'react-router-dom';


function ReactConcept() {
  return (
    <>
      <div className='grid grid-cols-3 gap-8 h-min'>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/control-rerendering'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Control Rerendering
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/use-memo'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Use Memo
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/render-eventhandler'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Render EventHandler
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/render-effects'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Render Effects
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/state-get-latest'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                State Get Latest Value
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/functional-update-state'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Functional Update State
            </h5>
        </Link>
        <Link
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            to='/demo'
        >
            <h5
                className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white"
            >
                Any Demo
            </h5>
        </Link>
      </div>
    </>
  );
}

export default ReactConcept;
