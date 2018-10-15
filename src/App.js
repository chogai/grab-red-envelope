import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SendPage from './containers/SendPage';
import Complete from './containers/Complete';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={SendPage} ></Route>
                <Route path='/complete' component={Complete}></Route>
              </Switch>
            </div>
          </Router>
        </Provider>
      )
    }
}

export default App;
