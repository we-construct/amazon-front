import logo from './logo.svg';
import Register from "./components/register";
import Login from "./components/login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
