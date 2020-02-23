import React from 'react';
import './operation-form.styles.scss';
import Plot from 'react-plotly.js';
import {ReactComponent as Graph} from './graph.svg'
import {ReactComponent as Operation} from './operations.svg'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectElements} from '../../redux/elements/elements.selectors';
import CalculationFormula from '../calculationFormula/calculation-formula.component';

class OperationForm extends React.Component {
    

    state = {
        hypSupport:false,
        inv:false
    }

   

    VALUE_EXPRASSION = {
        from:null,
        to:null
    }
    show = false;


    hypotheses = [];



    handleChecker = () =>{
        let target =  document.querySelector("svg[class~='operation-icon']");
        let name = target.className.baseVal;
        
    
        if(name.search('active') !== -1){
            target.classList.remove('active');
        }
        else {
            target.classList.add('active');
        }
        this.setState({hypSupport:!this.state.hypSupport});
    }


    middlewareInversion = (side) =>{
        if(side.from > 0 && side.to > 0 || side.from < 0 && side.to < 0){
            return  Object.assign({},side,{
                from:(1/side.to),
                to:(1/side.from)
            })
        }
        return side;

        
    }

    middlewareNegative = (side)=>{
        return  Object.assign({},side,{
                from:this.onNegative(side.to),
                to:this.onNegative(side.from)
        })
    }

    
    middlewareTypeError = (side) =>{
        return (side.from > side.to)
    }


  
    handleAction = (action) =>{

      
       
        //Main vars
       let  _from = this.VALUE_EXPRASSION.from;
       let  _to = this.VALUE_EXPRASSION.to;


        //Conversion 
        this.right.from = Number(this.right.from);
        this.right.to = Number(this.right.to);
        
        this.left.from = Number(this.left.from);
        this.left.to = Number(this.left.to);


        try {
            switch (action) {
                case 'minus':
                    _from = this.left.from - this.right.to;
                    _to = this.left.to - this.right.from;
                    break;
                case 'plus':
                    _from = this.left.from + this.right.from;
                    _to = this.left.to + this.right.to;
                    break;
                case 'multiply':
                    let scannedDataMultiply = this.handleHighOrderOperation('multiply');
                     {
                        let {min, max} = scannedDataMultiply;
                        _from = min;
                        _to = max;
                     }
                    

                        break;

                case 'divide':

                    _from = this.left.from/this.right.to;
                    _to = this.left.to/this.right.from;

                    if(this.state.hypSupport){
                        let scannedDataDivide = this.handleHighOrderOperation('divide');
                        {
                            let {min, max} = scannedDataDivide;
                            _from = min;
                            _to = max;
                        }
                    }
                        break;
                case 'conj':
                        _from = Math.min(this.left.from,this.right.from);
                        _to = Math.min(this.left.to,this.right.to);
                        break;
                case 'disj':
                        _from = Math.max(this.left.from,this.right.from);
                        _to = Math.max(this.left.to,this.right.to);
                        break;
                default:
                    console.log('no such operation');
            }
        }catch(err){
            console.log(err);
        }finally{
            this.show = true;
        }


        this.VALUE_EXPRASSION.from = _from;
        this.VALUE_EXPRASSION.to = _to;
        
    }
    


    handleHighOrderOperation = (type)=>{
            let res = this.scanAllOptions(
            [this.left.to,this.left.from],
            [this.right.to,this.right.from],
            type
            )
            return res;
    }



    handleCall = (left,right,action)=>{
        if(this.VALUE_EXPRASSION === undefined
            || left === undefined
            || right === undefined)return;
        
            
           

            
            if(left.isNegative)left  = this.middlewareNegative(left);
            if(right.isNegative)right  = this.middlewareNegative(right);
           

            if(left.isInverted)left = this.middlewareInversion(left);
            if(right.isInverted)right = this.middlewareInversion(right);
          



            //Check minus -5 == -1 || 5 ===1
            
            this.left = left;
            this.right = right;
         
            this.handleAction(action);
            
            if(!this.fs){
                this.setState({inv:this.state.inv})
                this.fs = true;
            }

          

    }



    

    scanAllOptions = (left,right,action)=>{
        let res = [];
        if(action === 'multiply'){
          for( let number of left){
            res.push(number*right[0]);
            res.push(number*right[1]);
          }
        }
        else if(action === 'divide'){
            for( let number of left){
                res.push(number/right[0]);
                res.push(number/right[1]);
              }
        }

         return {
                min:Math.min.apply(null,res),
                max:Math.max.apply(null,res)
                }
        
    }
          

  

    onNegative = (number)=>-Math.abs(number);


  

    render(){
        
        this.VALUE_EXPRASSION = {
            from:null,
            to:null
        }

        let configs = {
            showLink: false,
            displayModeBar: false
          };

          

          let elementsFor = this.props.elements;
        
          let stepBack = false;
          let actionToFollow = undefined;

          for(let i = 0; i< elementsFor.length; i++){
           

            if(stepBack){
                if(this.VALUE_EXPRASSION.to !== null && this.VALUE_EXPRASSION.from !== null ){
                    

                    if(actionToFollow === 'minus')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'minus');
                    
                    if(actionToFollow === 'plus')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'plus');

                    if(actionToFollow === 'multiply')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'multiply');

                    if(actionToFollow === 'divide')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'divide');

                    if(actionToFollow === 'conj')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'conj');
                    
                    
                    if(actionToFollow === 'disj')
                    this.handleCall(this.VALUE_EXPRASSION,elementsFor[i],'disj');



                }else{

                    if(actionToFollow === 'minus')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'minus');
                    
                    if(actionToFollow === 'plus')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'plus');

                    if(actionToFollow === 'multiply')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'multiply');

                    if(actionToFollow === 'divide')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'divide');

                    if(actionToFollow === 'conj')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'conj');

                    if(actionToFollow === 'disj')
                    this.handleCall(elementsFor[i-2],elementsFor[i],'disj');


                    

                }
                stepBack = false;
            }

              if(elementsFor[i].action){
                  

                  if(elementsFor[i].action === 'minus' && elementsFor[i+1] !==undefined){
                      actionToFollow = 'minus';
                      stepBack = true;
                  }

                  if(elementsFor[i].action === 'plus' && elementsFor[i+1] !==undefined){
                    actionToFollow = 'plus';
                    stepBack = true;
                  }

                  
                  if(elementsFor[i].action === 'multiply' && elementsFor[i+1] !==undefined){
                    actionToFollow = 'multiply';
                    stepBack = true;
                  }

                  if(elementsFor[i].action === 'division' && elementsFor[i+1] !==undefined){
                    actionToFollow = 'divide';
                    stepBack = true;
                  }

                  if(elementsFor[i].action === 'conj' && elementsFor[i+1] !==undefined){
                    actionToFollow = 'conj';
                    stepBack = true;
                  }

                  if(elementsFor[i].action === 'disj' && elementsFor[i+1] !==undefined){
                    actionToFollow = 'disj';
                    stepBack = true;
                  }


              }
          }




          let data = this.props.elements.filter(({type,from,to})=>{
              return type === 'operand' && !isNaN(Number(from)) && !isNaN(Number(to));    
          }).map(({to, from, name,id},index)=>{
           

            return (
                {
                    x:[Number(from),Number(to)],
                    y:[index+3,index+3],
                    mode:'lines',
                    marker:{color:'white'},
                    name:name || 'name',
                    
                }
         )
          });

          if(this.show){

            const {from, to} = this.VALUE_EXPRASSION;
              let result = {
                x:[Number(from),Number(to)],
                y:[2,2],
                mode:'lines',
                marker:{color:'black'},
                name:'result',
              }

              data.push(result);
            
          }
          

       const sizeIcon = 40;


       let isAnyMinus = false;
       let isAnyPlus = false;
        
       this.props.elements.forEach(element => {
           if(element.action === 'minus')isAnyMinus = true;
           if(element.action === 'plus')isAnyPlus = true;

       });


       let layout = {
           width: 420,
            height: 300,
            paper_bgcolor: '#0093D1',
            plot_bgcolor:'#0093D1'
       }


       

       return(
    
        <div className="operation-form">
            
            <div className="graph-data">

            <div className="top-info">
            <Graph width={sizeIcon} height={sizeIcon} className="graph-icon"/>
            <span className="text-info">The graph will be displayed below</span>
            </div>

            <Plot
               data={data}
                    layout={layout}
                    config={configs}
                 />
            </div>

            <div className="meta-data">

            <div className="top-info">
              
           
                <Operation width={sizeIcon} height={sizeIcon} className="operation-icon" onClick={this.handleChecker}/>
               
                

                <span className="text-info">Formula(s) in use</span>
                
                </div>

                <div className="calculation">

                
                 {isAnyPlus? 
                <CalculationFormula
                    _firstVar = 'a'
                    _secondVar ='b'
                    _thirdVar ='a'
                    _fourthVar ='b'
                    firstSign ='+'
                    secondSign ='+'
                    firstIndex ='1'
                    secondIndex ='1'
                    thirdIndex ='2'
                    fourthIndex ='2'

                />
                :
                null
                 }


                {isAnyMinus? 
                <CalculationFormula
                    _firstVar = 'a'
                    _secondVar ='b'
                    _thirdVar ='a'
                    _fourthVar ='b'
                    firstSign ='-'
                    secondSign ='-'
                    firstIndex ='1'
                    secondIndex ='2'
                    thirdIndex ='2'
                    fourthIndex ='1'

                />
                :
                null
                 }
                
               
               
                    
                {this.show
                ?

                    isNaN(this.VALUE_EXPRASSION.from && this.VALUE_EXPRASSION.to)
                    ?
                     `Please Fix point(s) `
                    :
                        (this.VALUE_EXPRASSION.from === null || this.VALUE_EXPRASSION.to === null)? `Please Fix point(s) `:


                     `Result: from:${(this.VALUE_EXPRASSION.from.toFixed(2))}  to:${(this.VALUE_EXPRASSION.to.toFixed(2))}`

                :null
                }   

                
                {/* <div class="markers">
                    <p>type error</p>
                    <p>inccorect numbers</p>
                    <p>inversion error</p>
                </div> */}


                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    elements:selectElements
})

export default  connect(mapStateToProps)(OperationForm);