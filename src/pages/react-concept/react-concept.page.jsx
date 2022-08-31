import React from 'react';
import { Link } from 'react-router-dom';

import { useLinkWrapper, Links } from '../../hooks/use-link';


function ReactConcept() {

    const { getLinkWrapperProps } = useLinkWrapper();

    return (
        <>
            <Links className='grid grid-cols-3 gap-8 h-min'>
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/control-rerendering',
                        text: 'Control Rerendering'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/use-memo',
                        text: 'Use Memo'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : 'render-eventhandler',
                        text: 'Render EventHandler'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/render-effects',
                        text: 'Render Effects'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/state-get-latest',
                        text: 'State Get Latest Value'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/functional-update-state',
                        text: 'Functional Update State'
                    })}
                />
                <Link
                    {...getLinkWrapperProps({ 
                        to : '/demo',
                        text: 'Any Demo'
                    })}
                />
            </Links>
        </>
    );
}

export default ReactConcept;
