import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register'
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
     return (
        <Router>
           <div>
              <h2>Single Page Application</h2>
              <ul>
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/Login'}>Login</Link></li>
                 <li><Link to={'/Register'}>Register</Link></li>
              </ul>
              <ul>
                <ListItem quantity="1" name="Bread" />
                <ListItem quantity="2" name="Egg" />
                <ListItem quantity="3" name="fruit"/>
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

class ListItem extends Component {
  render(){
    return (
      <li>
        {this.props.quantity}x{this.props.name}
      </li>
    );
  }
}




export default App;
