import React from 'react';
import './roll-bar.styles.scss';

import ElementsList from '../element-list/element-list.component';
import ToggleableForm from '../toggleable-form/toggleable-form.component';


const RollBar = () =>   
       (
        <div className="outer-wrapper">
            <div className="element-list">
                <ElementsList/>
                <ToggleableForm isOpen={false} />
            </div>
        </div>
        )

        

export default RollBar;

