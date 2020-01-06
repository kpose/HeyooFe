import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
//components
import Navbar from './components/Navbar'

//pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#339ba5',
      main: '#00838f',
      dark: '#005b64',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f6734b',
      main: '#f4511e',
      dark: '#aa3815',
      contrastText: '#000',
    }
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
      <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={home}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/signup" component={signup}/>
        </Switch>
        </div>

      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
