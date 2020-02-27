import { v1 as uuidv1 } from 'uuid';


export const hanldeCreation = (state,element)=>{
    const {triangles} = state;
    console.log(state,triangles);
    return triangles.concat({
        ...element,
        id:uuidv1()
    });
}