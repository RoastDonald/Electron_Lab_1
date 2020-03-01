import styled, {css} from 'styled-components';
import {ReactComponent as Container} from './action2.svg';
import {ReactComponent as Plus} from './plus.svg';
import {ReactComponent as Minus} from './minus.svg';
export const PopUp = styled(Container)`
    width:150px;
    height:200px;
`;

const buttonStyles = css`
    width:30px;
    height:30px;
    z-index:100;
`

export const PlusFigure = styled(Plus)`
${buttonStyles}
`;

export const MinusFigure = styled(Minus)`
${buttonStyles}
`;