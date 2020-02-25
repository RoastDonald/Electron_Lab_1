import styled from 'styled-components';
import {ReactComponent as AddButton} from './add-button.svg';

export const AddButtonContainer = styled(AddButton)`
    cursor:pointer;
    width:70px;
    height:70px;
    transition:all .8s ease-out ;

    &:hover {
    transform:rotate(360deg);
    }
`
