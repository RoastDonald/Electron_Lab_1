import React from 'react';
import {
    ActionContainer,
    TriangleSelectorContainer,
 
    LeftItem,
    TopItem,
    RightTopItem,
    BottomLeftItem,
    Container
} from  './triangle-selector-container.styles.jsx';

const TriangleSelector = ()=>(
    <TriangleSelectorContainer>

        <Container>
            <LeftItem/>
            <TopItem/>
            <RightTopItem/>
            <BottomLeftItem/>
            <ActionContainer/>
        </Container>


    </TriangleSelectorContainer>
);

export default TriangleSelector;