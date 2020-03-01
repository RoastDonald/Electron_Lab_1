import React from 'react';

import RollBar from './roll-bar/roll-bar.component';
import OperationForm from './operation-form/operation-form.component';
import {MainContainer} from './basic.styles';


const Basic = ()=>(
    <MainContainer>
        <RollBar/>
        <OperationForm/>
    </MainContainer>
    )

export default Basic;

