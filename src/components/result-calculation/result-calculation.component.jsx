import React from 'react';
import './result-calculation.styles.scss';


const Result = (props)=>{
    let {from, to} = this.props.result;
    return (
        <div>
            <span>from:{from} to:{to}</span>
        </div>
    )
}

export default Result;