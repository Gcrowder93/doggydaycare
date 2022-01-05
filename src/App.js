import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import DogList from './Views/Dogs/DogList';
import DogDetail from './Views/Dogs/DogDetails';
import DogEdit from './Views/Dogs/DogEdit';

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
          {/* <Route path="/dogs/:id/edit">
            <DogEdit />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
