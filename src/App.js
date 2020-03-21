import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import { Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
     </>
  );
}

export default App;
