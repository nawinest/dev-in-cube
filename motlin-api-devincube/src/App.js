import React, { Component } from 'react';
import { Grommet, Box } from 'grommet'
import './App.css';
import ProductListPage from './pages/ProductListPage'
import Checkout from './pages/Checkout'
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route exact path="/" component={ProductListPage} />
            <Route path="/checkout" component={Checkout} />
            
          </Box>
        </Grommet>
      </Router>
    );
  }
}

export default App;
