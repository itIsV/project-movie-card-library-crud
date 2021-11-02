import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <main className="bg-black-black">
        <div className="bg-blue-special pb-4 rounded-b-full">
          <h1 className="text-yellow-special text-8xl text-center">
            Movie Card Library CRUD
          </h1>
        </div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </main>  
    </Router>
  );
}

export default App;
