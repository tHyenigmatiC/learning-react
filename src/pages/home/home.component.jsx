import React from 'react';
import { Link } from 'react-router-dom';

import { Links, useLinkWrapper } from '../../hooks/use-link';

const Home = () => {
    const { getLinkWrapperProps } = useLinkWrapper();
    return (
        <Links className='grid grid-cols-3 gap-8 grid-rows-8 h-min'>
            <Link
                {...getLinkWrapperProps({
                    to : 'hoc-example',
                    text: 'HOC Example'
                })}
            />
            <Link
                {...getLinkWrapperProps({
                    to : 'react-concepts',
                    text: 'React Concepts'
                })}
            />
            <Link
                {...getLinkWrapperProps({
                    to : 'hooks',
                    text: 'Hooks'
                })}
            />
            <Link
                {...getLinkWrapperProps({
                    to : 'react-patterns',
                    text: 'React Patterns'
                })}
            />
        </Links>
    )
}

export default Home;