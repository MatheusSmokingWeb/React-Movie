import React, { Component } from 'react';
import MoviesHero from './Movies-hero';
import MoviesBest from './Movies-best';
import './styles/css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { movies: null };
  }
  render() {
    return (
      <main>
        <MoviesHero />
        <MoviesBest />
      </main>

    );
  }
}

export default App;
