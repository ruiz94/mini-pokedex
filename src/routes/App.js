import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store';

import '../App.css';

import Pokedex from '../containers/Pokedex';
import NotFound from '../containers/NotFound';
import AddPokemon from '../containers/AddPokemon';
import CreatePokemon from '../containers/CreatePokemon';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Pokedex} />
            <Route exact path="/createPokemon" component={CreatePokemon} />
            <Route exact path="/addPokemon" component={AddPokemon} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
