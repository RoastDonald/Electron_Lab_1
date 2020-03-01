import React from 'react';
import image from './watch.jpg';
import {UserPageContainer, Prompt,TabContainer} from './user.styles';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {signInWithGoogle, auth, createUserProfile} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {currentSelector} from '../../redux/user/user.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';


class UserPage extends React.Component {

    state = {
        toggleForm:true,
        loading:false
    };


    shouldComponentUpdate({currentUser: prevUser},{toggleForm: previousForm}){
        const {toggleForm: currentForm} = this.state; 
        const {currentUser} = this.props;
        if(currentForm === previousForm && currentUser === prevUser )
            return false
        else 
            return true;
    }


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
        this.setState({loading:true});
        const {email,password} = data;
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
                                    isLoading={this.state.isLoading}
                                    /> 
                                    :
                                    <SignUpReduxForm
                                    onSubmit={this.handleRegistration}
                                    isLoading={this.state.isLoading}
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
                </div>
            </form>
    )
}
}


class SingInForm extends React.Component{
    
  

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
            </div>
        </form>
    )
    }
}

const SignInReduxForm = withSpinner(reduxForm({form:'sign-in'})(SingInForm));
const SignUpReduxForm = withSpinner(reduxForm({form:'sign-up'})(SignUpForm));


const mapStateToProps = createStructuredSelector({
    currentUser:currentSelector
});

export default connect(mapStateToProps)(UserPage);