import React from "react"

export const useLinkWrapper = () => {

    const getLinkWrapperProps = ({to, ...props}) => {
        return{
            'aria-label': to.split('/').join(' ').split('-').join(' ').trim(),
            to,
            ...props,
        }
    }

    return {
        getLinkWrapperProps
    }
}

export const InternalLink = ({text}) => {
    const className="mb-2 text-xl font-light tracking-tight text-center text-gray-900 dark:text-white";

    return <h5 className={className}>{text}</h5>
}

export const Links = ({ children, ...props }) => {
    const className = 'block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:text-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
    return (
        <div {...props}>
            {
                React.Children.map(children, (child, index) => {
                    const { text } = child.props;
                    const children = <InternalLink text={text} />;
                    const newChild = React.cloneElement(child,{
                        className,
                        children,
                        text: null
                    })

                    return newChild;
                })
            }
        </div>
    )
    
}