import triangleTypes from './triangles.type';


export const createTringle = (triangle)=>(
    {
        type:triangleTypes.CREATE_TRIANGLE,
        payload:triangle
    }
);



