import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const withRouter = WrappedComponent => {
    const WithRouter = props => {
        const navigate = useNavigate();
        const location = useLocation();
        return <WrappedComponent {...props} navigate={navigate} location={location} />;
    }
    return WithRouter;
}

export default withRouter;