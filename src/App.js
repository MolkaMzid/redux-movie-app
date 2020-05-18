import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieBox from './components/MovieBox';
import Description from './components/Description';

function App() {
  return (<Fragment>
    <Router>
    <Route exact path="/" render={()=><Header/>}/>
    <Route exact path="/" component={MovieBox} />
    <Route path='/movie/:id' component={Description}/>
    </Router>
  </Fragment>
  );
}

export default App;
