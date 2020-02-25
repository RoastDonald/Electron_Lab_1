import React from 'react';

import RollBar from '../../components/roll-bar/roll-bar.component';
import OperationForm from '../../components/operation-form/operation-form.component';
import {MainContainer} from './basic.styles';


const Basic = ()=>(
    
    <MainContainer>
        <RollBar/>
        <OperationForm/>
    </MainContainer>
    )

export default Basic;

