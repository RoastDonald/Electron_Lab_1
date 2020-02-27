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
    flex: 1 1 33vw;
    `
    

export const ActionContainer  = styled(Action)`
    cursor:pointer;
    width:190px;

    path {
        transition:all .3s .3s;
    }
    
    &:hover path {
        d:path("M309 16.5C298.891 48.3442 343.742 98.7705 262 120C164.852
            120 3 139.849 3 103C3 66.151 -22.1477 2 75 2C172.148 2 316.381
            -6.75132 309 16.5Z");
    }

`

export const TriangleSelectorContainer = styled.div`
    width:25vw;
    display:flex;
    height:92vh;
    align-items:center;
`