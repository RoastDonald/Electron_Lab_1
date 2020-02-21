import React from 'react';
import './main.styles.scss';

import RollBar from '../roll-bar/roll-bar.component';
import OperationForm from '../operation-form/operation-form.component';
export default class Main extends React.Component {
    
    state = {
        elements:[],
     }
 
    
    createOperation = (action)=>{
        const actionElement = this.createAction(action);
        
        this.setState(()=>({
            elements:this.state.elements.concat(actionElement)
        }));
        
    }



    deleteElement = (id) =>{
        console.log(id);
         this.setState({
             elements:this.state.elements.filter(t=>t.id !==id)
         });
     }
 
     createElement = (element)=>{
         const point = this.createPoint(element);
         this.setState({
             elements:this.state.elements.concat(point)
         });
     }

     updateElement = (attrs)=>{
        
        this.setState({
            elements:this.state.elements.map((element)=>{
    
                if(element.id === attrs.id){
                    return Object.assign({},element,{
                        name:attrs.name,
                        from:attrs.from,
                        to:attrs.to,
                        // inverted:attrs.inverted,
                        // negative:attrs.negative
                    }); 
                }
                else{
                    return element;
                }
            })
        });
    }


    updateAction = (attrs) =>{
 
        this.setState({elements:this.state.elements.map((action)=>{
            if(action.id === attrs.id){
                return Object.assign({},action,{
                    action:attrs.action
                })
            }else{
                return action;
            }
        })
      })

    }


    
    updateInversion = (attrs)=>{
       this.setState({
           elements:this.state.elements.map((element)=>{
               if(element.id === attrs.id){
                   return Object.assign({},element,{
                       inverted:attrs.inverted,
                      
                   });
               }
               else{
                   return element;
               }
           })
       });
       
   }


   updateNegative = (attrs)=>{

    this.setState({
        elements:this.state.elements.map((element)=>{
            if(element.id === attrs.id){
                return Object.assign({},element,{
                    negative:attrs.negative
                });
            }
            else{
                return element;
            }
        })
    });
    
}




    isLastELementOperand = ()=>{
        const elements = this.state.elements;
        const isEmpty = Boolean(elements.length);
        if(!!isEmpty){
          return elements[elements.length-1].type === 'operand';
        }
    }

    iterator = 1;
    createPoint = ({name, from, to, id, inverted, negative})=>{
       
        const point = {
            type:'operand',
            name:name || 'name',
            to:to || 'to',
            from:from || 'from',
            id:id||this.iterator,
            inverted:inverted || false,
            negative:negative || false,
            isCorrect:true

            
        };
        this.iterator++;

        return point;
    }

    createAction = ({id,action})=>{

        const actionElement = {
            type:"action" || null,
            action:action || null,
            id:id || this.iterator,
            
        };
        
        this.iterator++;
        return actionElement;
    }


    handleEditFormSubmit = (attrs)=>{
        
        this.updateElement(attrs);
    }

    handleTrashClick = (elementId) =>{
        this.deleteElement(elementId);
    }





    handleCreateActionFormSubmit = (element)=>{
        this.createOperation(element);
    }


    handleCreateFormSubmit = (element)=>{
        this.createElement(element);
    }


/*-------------------------------------------------------------*/
    render(){
    return(
    <div className="main">
    <RollBar
        createOperation={this.isLastELementOperand}
        
        handeUpdateInversion={this.updateInversion}
        handleUpdateNegative={this.updateNegative}
        handleUpdateAction={this.updateAction}

        isLastELementOperand={this.isLastELementOperand}
        handleEditFormSubmit={this.handleEditFormSubmit}
        handleTrashClick={this.handleTrashClick}
        handleCreateFormSubmit={this.handleCreateFormSubmit}

        handleCreateActionFormSubmit={this.handleCreateActionFormSubmit}

        elements={this.state.elements}
    />
    <OperationForm
        pushLight={this.isIncorrect}
        elements={this.state.elements}
    />
    </div>
    )}

}

