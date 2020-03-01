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
import ActionPopUp from '../choose-action/choose-action.component';
const TriangleSelector = ({formType, choosePopUp})=>{
    return (
            <TriangleSelectorContainer  >
                {renderComponent(formType,choosePopUp)}
            </TriangleSelectorContainer>
        )
}

const mapStateToProps = (state) => createStructuredSelector({
    formType:selectFormType
});

const mapDispatchToProps = dispatch =>({
    choosePopUp:()=>dispatch({type:'OPEN_POP_UP'})
});


/**
 * Returns component based on form prop
 * @param {string} formType
 */

 function renderComponent(formType,choosePopUp){
    switch(formType){
        case 'none':
            return(
                <Container>
                    <LeftItem/>
                    <TopItem/>
                    <RightTopItem/>
                    <BottomLeftItem/>
                    <ActionContainer onClick={choosePopUp}/>
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
        case 'choose':
            return (
                <Container>
                    <ActionPopUp/>
                </Container>
            )
        default:
                return (
                <Container>
                    nothing to render :(
                </Container>
                )
        }
 }




export default connect(mapStateToProps,mapDispatchToProps)(TriangleSelector);