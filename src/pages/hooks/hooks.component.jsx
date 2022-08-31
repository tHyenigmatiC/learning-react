import React from 'react';
import { Link } from 'react-router-dom';

import { useLinkWrapper, Links } from '../../hooks/use-link';

const HooksPage = () => {

    const { getLinkWrapperProps } = useLinkWrapper();
    return (
        <Links className='grid grid-cols-3 gap-8 grid-rows-8 h-min'>
            <Link
                {...getLinkWrapperProps({ 
                    to: '/custom-hooks',
                    text: 'Custom Hook'
                })}
            />
            <Link
                {...getLinkWrapperProps({ 
                    to: '/use-reducer',
                    text: 'useReducer'
                })}
            />
        </Links>
    );
}

export default HooksPage;