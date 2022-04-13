import logo from './logo.svg';
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import MyPage from "./components/auth/myPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {useEffect, useState} from "react";
import {checkAuthRequest} from "./store/auth/action";
import {useDispatch, useSelector} from "react-redux";

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
       dispatch(checkAuthRequest())
   }, [])

  return <>
      {
          <div className="App">
              <Router>
                  <Switch>
                      <Route path='/register' component={Register} />
                      <Route path='/my-page' component={MyPage} />
                      <Route path='/' component={Login} />
                  </Switch>
              </Router>
          </div>
      }
  </>;
}

export default App;
