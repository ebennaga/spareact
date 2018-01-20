import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register'
import Home from './components/Home';
import Login from './components/Login';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
     return (
        <Router>
           <div>
           <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <AppBar title="Single Page Application" />
            </MuiThemeProvider>            
              <ul>
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/Login'}>Login</Link></li>
                 <li><Link to={'/Register'}>Register</Link></li>
              </ul>
              <hr />
              
              <Switch>
                 <Route exact path='/' component={Home} />
                 <Route exact path='/Login' component={Login} />
                 <Route exact path='/Register' component={Register} />
              </Switch>
           </div>
        </Router>
     );
  }
}





export default App;
