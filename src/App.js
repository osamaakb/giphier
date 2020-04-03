import React from 'react';
import './App.css';
import Nav from './components/NavBarComponent/NavBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GifComponent from './components/GifsComponents/GifComponent';
import SearchGif from './components/GifsComponents/SearchGif';
import RandomGifs from './components/GifsComponents/RandomGifs';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={GifComponent} />
          {/* <Route exact path="/random" component={RandomGif} /> */}
          <Route exact path="/search/:query" component={SearchGif} />
        </Switch>
      </Router>
    </div>
  );
}

const RandomGif = () => <RandomGifs new={true} />

export default App;
