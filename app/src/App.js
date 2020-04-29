import React from 'react';
import './App.sass';
import './App.css';
import Search from './pages/Search'
import Home from './pages/Home'

import Playlist from './pages/Playlist'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/playlist">
            <Playlist/>
          </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;
