import React from 'react';
import './calculation-formula.styles.scss';


const  CalculationFormula = ({_firstVar,_secondVar,_thirdVar,_fourthVar,firstSign,secondSign,firstIndex,secondIndex,thirdIndex,fourthIndex})=>(
    <div>
    <span className="arrayStart">[</span>

        <span className="variable">{_firstVar}<span className="indexVar">{firstIndex}</span></span>
        <span className="actionIcon">{firstSign}</span>
        <span className="variable">{_secondVar}<span className="indexVar">{secondIndex}</span></span>
         <span className="coma">,</span>

        <span className="variable">{_thirdVar}<span className="indexVar">{thirdIndex}</span></span>
         <span className="actionIcon">{secondSign}</span>
        <span className="variable">{_fourthVar}<span className="indexVar">{fourthIndex}</span></span>

        <span className="arrayEnd">]</span>
    </div>
)

export default CalculationFormula;