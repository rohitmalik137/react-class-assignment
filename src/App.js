import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Books from './components/books/books.component';
import Header from './components/header/header.component';
import Movie from './components/movie/movie.component';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Books />
        </Route>
        <Route exact path="/q3" component={Movie} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
