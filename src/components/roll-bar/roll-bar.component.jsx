import React from 'react';

import ElementsList from '../element-list/element-list.component';
import ToggleableForm from '../toggleable-form/toggleable-form.component';
import {OuterWrapperContainer, ElementListContainer} from './roll-bar.styles';

const RollBar = () =>   
       (
        <OuterWrapperContainer>
            <ElementListContainer>
                <ElementsList/>
                <ToggleableForm isOpen={false} />
            </ElementListContainer>
        </OuterWrapperContainer>
        )

        

export default RollBar;

