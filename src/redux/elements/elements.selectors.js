import {createSelector} from 'reselect';

export const superSelect = state =>state.basicOperations;

export const selectElements = createSelector(
    [superSelect],
    elements=>elements.elements
);
