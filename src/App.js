import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import AuthentificationPage from './pages/authentification/AuthentificationPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {

  state={
    currentUser:null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef =  createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot=>{
          this.setState({
            currentUser : {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }else{
        this.setState({currentUser:null})
      }
     
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={AuthentificationPage} />
        </Switch>
     </>
  );
  }
  
}

export default App;
