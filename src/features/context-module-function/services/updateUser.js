import {api} from '../api';

const updateUser = (dispatch, user, updates) => {
    // as we are performing optimistic update we are passing the updates interally to 
    // the reducer in the belief that our request will successfully return those data
    dispatch({ type: 'start update', updates: updates});
    api.updateUser('/user', { ...user, ...updates })
        .then( updatedUser => {
            console.log(updatedUser);
            dispatch({ type: 'finish update', updatedUser});
            return updatedUser
        })
        .catch(error => {
            dispatch({type: 'update fail', error});
        })
    
}

export default updateUser;