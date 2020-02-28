import React from 'react';
import image from './watch.jpg';
import {UserPageContainer, Prompt,TabContainer} from './user.styles';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signInWithGoogle, auth, createUserProfile} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {currentSelector} from '../../redux/user/user.selectors';
import { css } from "@emotion/core";
import {PacmanLoader} from "react-spinners";


const override = css`
  display: block;
  margin:10px;
`;

class UserPage extends React.Component {

    state = {
        toggleForm:true,
    };


    // shouldComponentUpdate(prevProps,{toggleForm: previous}){
    //     const {toggleForm: current} = this.state; 
    //     if(current === previous)
    //         return false
    //     else 
    //         return true;
    // }


    handleSignInForm =()=>{
        this.setState({toggleForm:true});
    }

    handleSignUpForm = ()=>{
        this.setState({toggleForm:false});
    }


    handleRegistration = async (data)=>{
        this.setState({loading:true});
        const {name, password, confirmPassword, email} = data;
        console.table(data);
        if(password !== confirmPassword){
            console.log('incorrect password repeat');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user,{name});
        }catch(e){
            console.log(e);
        }finally{
            this.setState({loading:false});
        }
    }

    handleAuth = async data =>{
        const {email,password} = data;
        this.setState({loading:true});
        try {
            auth.signInWithEmailAndPassword(email,password);

        }catch(e){
            console.log(e);
        }finally{
            this.setState({loading:false})
        }
    }




    render(){
        const {currentUser} = this.props;
        console.log(currentUser);
        if(!currentUser){
        return(
            <UserPageContainer image={image}>
                <Prompt>
                    <TabContainer>
                        <div onClick={this.handleSignInForm}><span>Sign in</span></div>
                        <div onClick={this.handleSignUpForm}><span>Sign up</span></div>
                    </TabContainer>
                            {
                            this.state.toggleForm ?
                                <SignInReduxForm
                                    onSubmit={this.handleAuth}
                                /> 
                            :
                                <SignUpReduxForm
                                    onSubmit={this.handleRegistration}
                                />
                            } 
                </Prompt>
    
            </UserPageContainer>
        )
        }else{
            return (<div>user profile</div>)
        }
    }
}







class  SignUpForm extends React.Component{

    state = {
        loading:false
    }
    
    
    render(){
        const {handleSubmit} = this.props;
        return(
            <form>
                <div>
                    <label>Display Name</label>
                    <Field component='input' type='text' name='name'/>
                </div>

                <div>
                    <label>Email</label>
                    <Field component='input' type='email' name='email'/>
                </div>

                <div>
                    <label>Password</label>
                    <Field component='input' type='password' name='password'/>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <Field component='input' type='password' name='confirmPassword'/>
                </div>

                <div>
                    <input type="submit" value="Sign Up" onClick={handleSubmit}/>
                    <PacmanLoader
                        size={16}
                        color='#502f54'
                        css={override}
                        loading={this.state.loading}
                    />
                </div>
            </form>
    )
    }
}


class SingInForm extends React.Component{
    
    state={
        loading:false
    } 

    render(){
        console.log(this.state);
        const {handleSubmit} = this.props;
    return (
        <form>
            <div>
                <label>Login</label>
                <Field component='input' type='email' name='email'/>
            </div>

            <div>
                <label>Password</label>
                <Field component='input' type='password' name='password'/>
            </div>

            <div>
                <input type="submit" value="Sign In" onClick={handleSubmit}/>
                <PacmanLoader
                    size={16}
                    color='#502f54'
                    css={override}
                    loading={this.state.loading}
                />
            </div>
        </form>
    )
    }
}

const SignInReduxForm = reduxForm({form:'sign-in'})(SingInForm);
const SignUpReduxForm = reduxForm({form:'sign-up'})(SignUpForm);


const mapStateToProps = createStructuredSelector({
    currentUser:currentSelector
});

export default connect(mapStateToProps)(UserPage);