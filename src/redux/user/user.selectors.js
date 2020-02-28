import {createSelector} from 'reselect';


const userSelector = state =>state.user;


export const currentSelector = createSelector(
    [userSelector],
    user=>user.currentUser
);