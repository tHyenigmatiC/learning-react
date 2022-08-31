import React from 'react';
import { Link } from 'react-router-dom';

import { Links, useLinkWrapper } from '../../hooks/use-link';

const ReactPatternsPage = () => {

    const { getLinkWrapperProps } = useLinkWrapper();
    return (
        <Links className='grid grid-cols-3 gap-8 h-min'>
            <Link
                {...getLinkWrapperProps({
                    to: '/context-module-function',
                    text: 'Context Module Function'
                })}
            />
        </Links>
    )
}

export default ReactPatternsPage;