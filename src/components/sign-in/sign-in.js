import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';
import "./sign-in.scss";
import CustomButton from '../custom-button/custom-button';

 class SignIn extends Component {
     state = {
         email:"",
         password:""
     }

     handleSubmit = async event =>{
         event.preventDefault();
         const {email, password} = this.state;
         try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"", password:""})
         } catch (error) {
             alert(error);
         }
     
     }

     handleChange = event => {
         const {value, name} = event.target
         this.setState({[name]:value});
     }
    render() {
        return (
            <div>
                <div className="sign-in">
                    <h2 className="title">I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" value={this.state.email} required handleChange={this.handleChange} label="email"/>
                        <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>
                        <div className="buttons">
                            <CustomButton type="submit">Sign In</CustomButton>
                            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;