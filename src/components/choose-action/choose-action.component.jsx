import React from 'react';
import {connect} from 'react-redux';
import {PopUp, PlusFigure, MinusFigure} from './choose-action.styles';
const ChooseAction = (props)=>(
    <div>
        <PopUp/>
        <PlusFigure onClick={props.plusAction}/>
        <MinusFigure onClick={props.minusAction}/>
    </div>
);

const mapDispatchToProps = dispatch =>({
    plusAction:()=>dispatch({type:'PLUS_ACTION'}),
    minusAction:()=>dispatch({type:'MINUS_ACTION'})
});


export default connect(null,mapDispatchToProps)(ChooseAction);