import { useReducer, createContext, useContext } from 'react';
import { useAuth } from '../../../context/auth-context';

// creating context
const UserContext = createContext();
UserContext.displayName = 'UserContext';


// initial state for our reducer
const initialState = {
    status: null,
    user: null,
    storedUser: null,
    error: null,
}

// reducer
const userReducer = (state, action) => {
    switch(action.type){
        case 'start update': {
            return {
                ...state,
                status: 'pending',
                storedUser: state.user,
                user: {...state.user, ...action.updates},
            }
        }
        case 'finish update': {
            return {
                ...state,
                status: 'resolved',
                user: action.updatedUser,
                storedUser: null,
                error: null
            }
        }
        case 'update fail': {
            return {
                ...state,
                error: action.error,
                user: state.storedUser,
                status: 'rejected',
                storedUser: null
            }
        }
        case 'reset': {
            return {
                ...state,
                status: null,
                error: null
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

// context provider
export const UserProvider = ({children}) => {
    const { user } = useAuth();
    const [state, dispatch] = useReducer(userReducer, {
        ...initialState,
        user,
        storedUser: user
    });

    const value = [state, dispatch];

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// plain useUser hook that is responsible for returning usercontext
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined ){
        throw new Error('useUser must be used within UserProvider')
    }
    return context
}