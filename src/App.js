import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogList from './Views/Dogs/DogList';
import DogDetail from './Views/Dogs/DogDetails';
import DogEdit from './Views/Dogs/DogEdit';
// import DogForm from './Components/DogCard/DogForm';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';
import CreateDog from './Views/DogAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Admin />
        <Switch>
          <Route exact path="/">
            <DogList />
          </Route>
          <Route exact path="/dogs/DogForm">
            <CreateDog />
          </Route>
          <Route exact path="/dogs/:id/DogEdit">
            <DogEdit />
          </Route>
          <Route exact path="/dogs/:id">
            <DogDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
