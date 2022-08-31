import React, { createContext } from "react";

const AuthContext = createContext({
    user: { name: 'Kapil Bastola', email: '', address: ''}
});

// changing the context display name. this is for dev purposes
// this name will be reflected in the profiler tab of dev tools
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({user, ...props}) => {
    return <AuthContext.Provider value={user} {...props}/>
}

export const useAuth = () => {
    return React.useContext(AuthContext)
}