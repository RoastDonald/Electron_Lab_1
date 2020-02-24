import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height:40px;
    z-index: 10000;
    position: relative;
    width: 100vw;
    padding-top: 5px;
    padding-bottom: 0;
    background-color:#0E1318 ;
    display: flex;
    -webkit-app-region:drag;
`

export const OptionContainer = styled(Link)`
    margin-right:${({start})=>start ?'auto':''};
    padding: 0 5px;
    -webkit-app-region:no-drag;
    cursor: pointer;
`;
