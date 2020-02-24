import React from 'react';
import './main.styles.scss';

import RollBar from '../roll-bar/roll-bar.component';
import OperationForm from '../operation-form/operation-form.component';
import {MainContainer} from './main.styles';


const Main = ()=>(
    
    <MainContainer>
        <RollBar/>
        <OperationForm/>
    </MainContainer>
    )

export default Main;

