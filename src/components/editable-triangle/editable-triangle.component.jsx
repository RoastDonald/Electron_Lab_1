import React from 'react';
import {TringleFigure} from './editable-triangle.styles';
const EditableTriangle = ()=>{

    return(
        <TringleFigure
            onClick={()=>console.log('called')}
        />
    )
}

export default EditableTriangle;