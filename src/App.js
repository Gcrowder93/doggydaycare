import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogList from './Views/Dogs/DogList';
import DogDetail from './Views/Dogs/DogDetails';
import DogEdit from './Views/Dogs/DogEdit';
import DogForm from './Components/DogCard/DogForm';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Admin />
        <Switch>
          <Route exact path="/" component={DogList}>
            <DogList />
          </Route>
          <Route exact path="/dogs/DogForm" component={DogForm}>
            <DogForm />
          </Route>
          <Route exact path="/dogs/:id/DogEdit" component={DogEdit}>
            <DogEdit />
          </Route>
          <Route exact path="/dogs/:id" component={DogDetail}>
            <DogDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
