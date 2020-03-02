import styled, {css} from 'styled-components';
import {ReactComponent as Update} from './update-container.svg';


export const UpdateTriangleContainer = styled.div`

    input {
        max-width: 300px;
        background: none;
        border: none;
        border-bottom: 1px solid #2700ff;
        box-shadow: 0 0 black;
        padding: 15px;
        font-size: 16px;
    }


`

export const UpdateTringle = styled(Update)`
    width:300px;
    height:300px;

`;

