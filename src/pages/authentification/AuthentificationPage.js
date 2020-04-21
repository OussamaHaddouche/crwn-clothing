import React from 'react'
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './AuthentificationPage.scss';

 const AuthentificationPage = () => {
    return (
        <div className="authentification">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default AuthentificationPage