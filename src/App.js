import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import { Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/Header';
import AuthentificationPage from './pages/authentification/AuthentificationPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef =  createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot=>{
          setCurrentUser({
            currentUser : {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
     
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" render={()=>this.props.currentUser ? <Redirect to='/' /> : <AuthentificationPage/>} />
        </Switch>
     </>
  );
  }
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
