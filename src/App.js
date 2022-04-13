import logo from './logo.svg';
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import MyPage from "./components/auth/myPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/my-page' component={MyPage} />
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
