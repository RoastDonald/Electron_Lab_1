import styled from 'styled-components';
import {ReactComponent as Triangle} from './triangle.svg';
import {ReactComponent as Trash} from './rubbish.svg';

export const TrashIcon = styled(Trash)`
    width:20px;
    height:20px;
    cursor:pointer;
    transition: .6s;
    visibility: visible;
    opacity: 1;

    // &:hover{  
    //     visibility: visible;
    //     opacity: 1;
    // }
`

export const TringleFigure = styled(Triangle)`
    cursor:pointer;
    width:70px;
    height:70px;

`;

