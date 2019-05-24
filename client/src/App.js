import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import withAuth from './providers/withAuth';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/home';
import AltaProductos from './pages/altaProductos';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
});

export default class App extends Component {


  componentDidMount(){
    document.title = "Pharma Products"
  }


  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
          <div>
            <Switch>
            {/*<Route path="/" exact={true} component={withAuth(Home)} />*/}
            <Route path="/products" exact={true} component={Home} />
            <Route path="/subir" exact={true} component={AltaProductos} />
            <Redirect to="/products" />
            </Switch>
          </div>
          </Router>
          </MuiThemeProvider>
      </div>
    );
  }
}
