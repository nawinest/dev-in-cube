import React, { Component } from 'react';
import { Grommet, Box } from 'grommet'
import './App.css';
import ProductListPage from './pages/ProductListPage'
import Checkout from './pages/Checkout'
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
class App extends Component {
  state = {
    query: ''
  }

  render() {
    return (
      <Router>
        <Grommet plain full>
          <Box direction="column" fill>
            <AppBar />
            <Switch>
              <Route exact path="/" component={ProductListPage} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/login" component={LoginPage} />
              <PrivateRoute path="/profile" exact component={ProfilePage} />
              <Route patch="**" component={() => <h1>Not Found</h1>} />
            </Switch>
          </Box>
        </Grommet>
      </Router>
    );
  }
}

export default App;
