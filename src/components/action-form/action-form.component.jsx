import React from 'react';
import './action-form.styles.scss';
import PictureSlider from '../picture-slider/picture-slider.component';


class ActionForm extends React.Component {
 
        //Issue with async : added to TODO
        state = {
            action: 'minus'
        };


    handleActionString =(string)=>{
        this.setState(()=>({
            action:string
        }));
    }

    handleActionSubmit = ()=>{
        this.props.onActionFormSubmit({
            id:this.props.id || null,
            action:this.state.action
        });
        this.handleActionCancel();
    }

    handleActionCancel = ()=>{
        this.props.onActionFormClose();
    }

    render(){
       return (
        <div className="element-form action">
            <div className="content">
                <div className="action-frame">
                    <div className="desc">
                        <span className="desc-text">Choose action</span>
                        <p className="advice">(click icon to choose)</p>
                    </div>

                    <div className="picture-pull">
                        <PictureSlider
                            onString={this.handleActionString}
                        />
                    </div>


                </div>



            <div className="btns">
                        <button 
                            className="btn submit"
                                onClick={this.handleActionSubmit}

                            >Submit</button>
                        <button 
                            className="btn cancel"   
                                onClick={this.handleActionCancel}                       
                            >Cancel</button>
                    </div>
            </div>
        </div>
       )
    }
}

export default ActionForm;