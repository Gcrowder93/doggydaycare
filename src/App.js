import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import DogList from './Views/Dogs/DogList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home">
            Home
          </NavLink>
        </header>
        <Switch>
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
          <Route exact path="/">
            <DogList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
