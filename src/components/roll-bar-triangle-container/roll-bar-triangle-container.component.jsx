import React from 'react';
import {RollBarTriangleContainer} from './roll-bar-triangle-container.styles';
import ToggleableTriangle from '../togglable-triangle/togglable-triangle.component';
import TrianglesList from '../triangles-list/triangles-list.component';


const RollBarTriangle = ()=>(
    <RollBarTriangleContainer>
      <ToggleableTriangle/>
      <TrianglesList/>
    </RollBarTriangleContainer>
)

export default RollBarTriangle;