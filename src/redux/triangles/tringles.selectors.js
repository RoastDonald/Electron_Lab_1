import {createSelector} from 'reselect';


export const selectTriangles = state =>state.tringleOperations;

export const selectTringlesElements = createSelector(
    [selectTriangles],
    tringles=>tringles.triangles
);



export const selectFormType = createSelector(
    [selectTriangles],
    trianglesSection=>trianglesSection.formType
)

export const selectCurrentEdit = createSelector(
    [selectTriangles],
    triangles=>triangles.currentEdit
)
