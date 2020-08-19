import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './Pages/Welcome ';
import Autenticacao from './Pages/Autenticacao';
import HomeAdmin from './Pages/HomeAdmin';
import HomeUser from './Pages/HomeUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>

        <Route exact path="/autenticacao">
          <Autenticacao />
        </Route>

        <Route exact path="/user">
          <HomeUser />
        </Route>

        <Route exact path="/admin">
          <HomeAdmin />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
