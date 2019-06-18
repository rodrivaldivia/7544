import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import withAuth from './providers/withAuth';
import withAdmin from './providers/withAdmin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuAppBar from './components/menuAppBar'
import Home from './pages/home';
import About from './pages/about';
import Landing from './pages/landing';
import Contact from './pages/contact';
import Login from './pages/login';
import Backoffice from './pages/backoffice';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';
import AddPrinciple from './pages/addPrinciple';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#67c9d6',
    },
    secondary: {
      main: '#67d68a',
    },
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

          <MenuAppBar/>
            <Route path="/productos" exact={true} component={withAuth(Home)} />
            {/*<Route path="/" exact component={Home} />*/}
            <Route path="/login" exact={true} component={Login} />
            <Route path="/acerca" exact={true} component={About} />
            <Route path="/" exact={true} component={Landing} />
            <Route path="/contacto" exact={true} component={Contact} />
            <Route path="/subir/producto"  component={withAdmin(AddProduct)} />
            <Route path="/subir/principio"  component={withAdmin(AddPrinciple)} />
            <Route path="/backoffice"  component={withAdmin(Backoffice)} />
            <Route path="/editar/:id"  component={withAdmin(EditProduct)} />
            {/*<Redirect to="/" />*/}
          </Router>
          </MuiThemeProvider>
      </div>
    );
  }
}
