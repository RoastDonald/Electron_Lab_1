import { v1 as uuidv1 } from 'uuid';


export const hanldeCreation = (state,element)=>{
    const {triangles} = state;
    console.log(state,triangles);
    return triangles.concat({
        ...element,
        id:uuidv1()
    });
}
export const handleEdition = (state, element)=>{
    const {triangles} = state;
    const editElement = triangles.find((triangle)=>triangle.id === element );
    return editElement;
}

export const handleDelition = (state,element)=>{
    const {triangles} = state;
    return triangles.filter((triangle)=>triangle.id !== element)
}