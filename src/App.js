import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Admin from './components/Admin/Admin';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Auth from './components/Auth/Auth';
import { createContext, useState } from 'react';
import Privateroute from './components/Privateroute/Privateroute';
import Event from './components/Event/Event';
import NotFound from './components/NotFound/NotFound';
export const UserContext = createContext()
function App() {
  const [user,setUser]=useState({})
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
       <Switch>
         <Route path="/auth">
           <Auth/>
          </Route>
          <Privateroute path="/my-event">
            <Event/>
          </Privateroute>
         <Route path="/admin">
           <Admin/>
         </Route>
         <Privateroute path="/register-form">
           <RegisterForm/>
         </Privateroute>
         <Route exact path="/">
           <Home/>
          </Route>
          <Route  path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
