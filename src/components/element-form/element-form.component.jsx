import React from 'react';
import './element-form.styles.scss';

class ElementForm extends React.Component {
 
    state={
        name:this.props.name || '',
        from:this.props.from || '',
        to:this.props.to || '',
        id:this.props.id || null,
    }


    componentDidMount(){
           

        if(isNaN(this.state.from))this.setState({from:"Error"});
        if(isNaN(this.state.to))this.setState({to:"Error" });
    }

    handleNameChange = (ee) =>{ 
        this.setState({name:ee.target.value})
    }

    handleFromChange = (ee) =>{ 
        
        this.setState({from:ee.target.value})
    }

    handleToChange = (ee) =>{ 
        
        this.setState({to:ee.target.value})
    }







    handleSubmit = () =>{
      

            this.props.onFormSubmit({
                name:this.state.name,
                id:this.state.id,
                from:this.state.from,
                to:this.state.to,
                inverted:this.props.isInverted
            });

           
    }


   

    render(){
        
        
        

        const submitText = this.props.id ? 'Update': 'Create';
        return (
            <div className="element-form">
                <div className="content">
                    <div className="field">
                        <label>Name it</label>
                        <input type="text" 
                             
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>


                    <div className="field">
                        <label>From</label>
                        <input type="text" 
                            
                            value={this.state.from}
                            onChange={this.handleFromChange}
                        />
                    </div>

                    <div className="field">
                        <label>To</label>
                        <input type="text" 
                            
                            value={this.state.to}
                            onChange={this.handleToChange}
                        />
                    </div>

                    <div className="btns">
                        <button 
                            className="btn submit"
                            onClick={this.handleSubmit}
                            >{submitText}</button>
                        <button 
                            className="btn cancel"
                            onClick={this.props.onFormClose}
                            >Cancel</button>
                    </div>


                </div>
            </div>
        )
    }
}

export default ElementForm;