import React from 'react';
import {TrianglePageContainer, Test} from './triangle.styles';
import RollBarTriangleContainer from '../../components/roll-bar-triangle-container/roll-bar-triangle-container.component';
import TriangleSelectorContainer from '../../components/triangle-selector-container/triangle-selector-container.component';
import GotoGraph from '../../components/goto-graph-container/goto-graph-container.component';
const Triangle = ()=>(
    <TrianglePageContainer>
        <RollBarTriangleContainer/>

        <Test>
            <TriangleSelectorContainer/>
            <GotoGraph/>
        </Test>

    </TrianglePageContainer>

)

export default Triangle;