import triangleTypes from './triangles.type';


export const createTringle = (triangle)=>({
        type:triangleTypes.CREATE_TRIANGLE,
        payload:triangle
});

export const updateTriangle = (triangle)=>({
    type:triangleTypes.UPDATE_TRIANGLE,
    payload:triangle
});




