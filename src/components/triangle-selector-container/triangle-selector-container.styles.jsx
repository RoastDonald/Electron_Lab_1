import styled,{css} from 'styled-components';
import {ReactComponent as Action} from './button.svg';
import {ReactComponent as LeftBottom} from './left-bottom.svg';
import {ReactComponent as Top} from './top.svg';
import {ReactComponent as RightTop} from './right-top.svg';
import {ReactComponent as BottomLeft} from './right-bottom.svg';

const iconSisze = css`
    width:55px;
    height:45px;
    position:relative;
    z-index:-20;
    opacity:.7;
    `
const rightTopFrame = css`
@keyframes anime {
	0% {  top: 100px; left:20px}
	50% {top:120px; left:30px;}
	100% {top: 100px; left:20px}
}
animation: anime 5s ease-in-out infinite;
`
const leftFrame = css`
@keyframes anime2 {
    0%{top:170px; }
    50%{top:150px;}
    100%{top:170px;}
}
animation: anime2 3s ease-in-out infinite;
`

const topFrame = css`
@keyframes anime3 {
    0%{left:40px;}
    50%{left:20px;}
    100%{left:40px;}
}
animation: anime3 3s ease-in-out infinite;
`

const bottomFrame = css`
@keyframes anime4 {
    0%{left:120px; top:125px;}
    50%{left:130px; top:110px;}
    75%{left:135px; top:105px;}
    100%{left:120px; top:125px;}
}
animation:anime4 5s ease-in-out infinite;

`

//top 125
//left 120
    
    
export const LeftItem = styled(LeftBottom)`
    ${iconSisze}
    ${leftFrame}
    top:170px;
    right:15px;

    `
    export const TopItem = styled(Top)`
    ${iconSisze}
    ${topFrame}
    top:105px;
    left:40px;
    `
    export const RightTopItem = styled(RightTop)`
    ${rightTopFrame}
    ${iconSisze}
    z-index:100 !important;
    top:120px;
    left:50px;
    `
    export const BottomLeftItem = styled(BottomLeft)`
    ${bottomFrame}
    ${iconSisze}
    top:125px;
    left:120px;
    `
    
    export const Container = styled.div`
    margin-top:-100px;
    width:200px;
    height:200px;
    `
    

export const ActionContainer  = styled(Action)`
    cursor:pointer;
    width:190px;

`

export const TriangleSelectorContainer = styled.div`
    margin-left:10%;
    display:flex;
    height:92vh;
    align-items:center;
`