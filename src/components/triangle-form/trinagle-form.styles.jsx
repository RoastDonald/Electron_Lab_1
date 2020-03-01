import styled, {css} from 'styled-components';
import {ReactComponent as Set} from './set-button.svg';
import {ReactComponent as Reset} from './reset-button.svg';
import {ReactComponent as Close} from './close-button.svg';

const buttonStyles = css`
    cursor:pointer;
    position:relative;
`;


export const CloseButton =styled(Close)`
    ${buttonStyles}
    width:60px;
    height:60px;
`;

export const SetButton = styled(Set)`
    ${buttonStyles}
    width:70px;
    height:70px;
    top:-45px;
    left:110px;

`;
export const ResetButton = styled(Reset)`
    ${buttonStyles}
    width:55px;
    height:55px;
    left:45px;
    top:-90px;
`;