import React from 'react';
import {
    ActionContainer,
    TriangleSelectorContainer,
    // shallow components for choose button
    LeftItem,
    TopItem,
    RightTopItem,
    BottomLeftItem,
    Container
} from  './triangle-selector-container.styles.jsx';
import {createStructuredSelector} from 'reselect';
import {selectFormType} from '../../redux/triangles/tringles.selectors';
import {connect} from 'react-redux';
import EditTriangleContainer from '../edit-triangle-container/edit-triangle-container.component';
import CreateTriangleContainer from '../create-tringle-container/create-tringle-container.component';

const TriangleSelector = ({formType})=>{
    return (
            <TriangleSelectorContainer  >
                {renderComponent(formType)}
            </TriangleSelectorContainer>
        )
}

const mapStateToProps = (state) => createStructuredSelector({
    formType:selectFormType
});


/**
 * Returns component based on form prop
 * @param {string} formType
 */

 function renderComponent(formType){
    switch(formType){
        case 'none':
            return(
                <Container>
                    <LeftItem/>
                    <TopItem/>
                    <RightTopItem/>
                    <BottomLeftItem/>
                    <ActionContainer/>
                </Container>
            );
        case 'create' :
            return (
                <Container>
                    <CreateTriangleContainer/>
                </Container>
            );
        case 'edit':
            return (
                <Container>
                    <EditTriangleContainer/>
                </Container>
            );
        default:
                return (
                <Container>
                    nothing to render :(
                </Container>
                )
        }
 }




export default connect(mapStateToProps)(TriangleSelector);