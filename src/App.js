
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './component/home';
import Navbar from './component/navebar';
import show from './component/show';

import reducer from './Store/reducer/reducer';




function App() {

  const rootReducer= combineReducers({
          data:reducer,
  })


  const store = createStore(rootReducer);

  return(
<Provider store={store}>
  
<Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/show' component={show}></Route>
    </Switch>
  </Router>
</Provider>
  
  );
      
}


export default App;
