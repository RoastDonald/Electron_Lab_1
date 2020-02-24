import styled, {css} from 'styled-components';


const GradientKeyFrame = css`
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`

export const OuterWrapperContainer = styled.div`
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    
    background-color:#0093D1;
    
    z-index: 1;
    
    scrollbar-width: none;
    -ms-overflow-style: none;
`
export const ElementListContainer = styled.div`
    ${GradientKeyFrame}
    display: flex;
    width:200vw;
    overflow: scroll;
    flex-direction: row;
    border-bottom:5px solid #4373D3;
    
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
    
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    animation: gradient 10s ease infinite;
    background-size: 400% 400%;

`