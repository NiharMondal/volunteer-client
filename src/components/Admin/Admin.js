import { Grid, } from '@material-ui/core';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import React from 'react';
import './Admin.css'
import Default from './Default/Default'
import TopicId from './TopicId/TopicId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import logo from '../../components/Home/Header/Group 1329.png'
const Admin = () => {
  let {path,url} = useRouteMatch()
  return (
    <Grid container spacing={2}>
      <Grid item md={3} sm={12} xs={12} >
        <div >
        <Link to="/">
        <img className="logo py-5 pl-5" src={logo} alt=""/>
        </Link>
        <ul >
         
          <Link to={`${url}/volunteer-list`} className="link">
            <li className="px-4 py-2 link1"><FontAwesomeIcon icon={faUsers} /> Volunteer List</li>
          </Link>
          <Link to={`${url}/add-event`} className="link">
            <li className="px-4 py-2 link2 "><FontAwesomeIcon icon={faPlus} /> Add event</li>
          </Link>
          </ul>
        </div>
       
      </Grid>
      <Grid item md={9} sm={12} xs={12} className="pt-5 border">
        <Switch>
          <Route exact path={path}>
            <Default />
          </Route>
          <Route path={`${path}/:topicId`}>
              <TopicId/>
          </Route>
        </Switch>
     </Grid>
    </Grid>
  );
};

export default Admin;