import React from 'react';
import {connect} from 'react-redux';
import {selectTringlesElements} from '../../redux/triangles/tringles.selectors';
import {createStructuredSelector} from 'reselect';
import {TrianglesListContainer} from './triangles-list.styles.jsx';
import EditableTriangle from '../editable-triangle/editable-triangle.component';

const TringlesList = ({triangles}) =>{
    
    return (
        <TrianglesListContainer>
        {
            triangles.map(({id})=>{
                return (
                    <EditableTriangle
                        key={id}
                        id={id}
                    />
                )
            })
        }
        </TrianglesListContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    triangles:selectTringlesElements
});

export default connect(mapStateToProps)(TringlesList);
