import  React from 'react';
import {AddButtonContainer} from './togglable-triangle.styles';
import {connect} from 'react-redux';
import trianglesType from '../../redux/triangles/triangles.type';



const ToggleableTriangle = ({openCreate})=>(
        <AddButtonContainer onClick={openCreate}/>
    )


    
const mapDispatchToProps = dispatch=>({
    openCreate: ()=>dispatch({type:trianglesType.OPEN_CREATE})
});

export default connect(null,mapDispatchToProps)(ToggleableTriangle);