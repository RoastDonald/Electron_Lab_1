import React from 'react'; 
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';



const MenuItem = ({title,complexity, history,match})=>(
    <div className="menu-item" onClick={()=>{console.log(111111,`${match.path}${title}`);history.push(`${match.path}${title}`)}}>
        <div className="title-container">
            <span className="title">{title}</span>
        </div>

        <div className="complexity-container">
            <span className="complexity">{complexity}</span>
        </div>
    </div>
);

export default withRouter(MenuItem);