import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import AuthentificationPage from './pages/authentification/AuthentificationPage';
import {auth} from './firebase/firebase.utils';

class App extends Component {

  state={
    currentUser:null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
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
