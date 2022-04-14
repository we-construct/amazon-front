import Register from './components/auth/register';
import Login from './components/auth/login';
import MyPage from './components/auth/myPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/navbars/Header';
import { useEffect } from 'react';
import { checkAuthRequest } from './store/auth/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthRequest());
  }, []);

  return (
    <>
      {
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/my-page" component={MyPage} />
              <Route path="/login" component={Login} />
            </Switch>
          </Router>
        </div>
      }
    </>
  );
}

export default App;
