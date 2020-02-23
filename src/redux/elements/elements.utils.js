
let ITERATOR = 1;


//-------------------CREATE OPERATION-----------------------------
export const handleCreationOperation = ({elements}, {id, action})=>{
    const actionElement = {
        type:'action' || null,
        action:action || null,
        id:id || ITERATOR
    }
    ITERATOR++;

    return elements.concat(actionElement);
}


//-------------------UPDATE OPERATION-----------------------------

export const handleUpdateOperation = ({elements},{id,action})=>{
    return elements.map((element)=>{
        if(element.id === id){
            return {
                    ...element,
                    action:action
                }
        }else{
            return element;
        }
    });
}



//-------------------DELETE ELEMENT-----------------------------

export const handleDelition = ({elements},id)=>{
    return elements.filter(element=>element.id !== id);
}




//-------------------CREATE OPERAND-----------------------------

export const handleCreationOperand = ({elements}, {name, from, to, id, isInverted, isNegative})=>{
    console.log(22222,elements);
    const operand = {
        type:'operand',
        name:name|| 'name',
        to:to || null,
        id: id ? id : ITERATOR,
        from:from || null,
        isInverted:isInverted || false,
        isNegative: isNegative || false
    }

    ITERATOR++;
    console.log(1111,elements);
    return elements.concat(operand);
}
//-------------------UPDATE OPERAND-----------------------------

export const handleUpdatingOperand = ({elements},{id,name,from,to})=>{
    return elements.map(element=>{
        if(element.id === id){
            return {
                ...element,
                from,
                to,
                name
            }
        }else{
            return element;
        }
    });
}



//-------------------UPDATE NEGATIVE-----------------------------

export const handleUpdateNegative = ({elements},{id,isNegative})=>{
    return elements.map(element=>{
        if(element.id === id){
            return {
                ...element,
                isNegative
            }
        }else{
            return element
        }
    })
};
//-------------------UPDATE  INVERSION-----------------------------

export const handleUpdatingInversion = ({elements},{id,isInverted})=>{
    return elements.map(element=>{
        if(element.id === id){
            return {
                ...element,
                isInverted
            }
        }else{
            return element;
        }
    })
}
//-------------------ADDIT OPERATION-----------------------------

export const isLastOperand = (elements)=>{
    if(elements.length){
        return elements[elements.length-1].type === 'operand';
    }
}






