import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import withAuth from './providers/withAuth';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/home';

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
            <Route path="/" exact={true} component={Home} />
            <Redirect to="/" />
            </Switch>
          </div>
          </Router>
          </MuiThemeProvider>
      </div>
    );
  }
}
