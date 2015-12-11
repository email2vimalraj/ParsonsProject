import React from 'react';
import {Route,Link,Router} from 'react-router';

import App from 'components/App';
import About from 'components/About';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Dashboard from 'components/Dashboard';
import NotFound from 'components/NotFound';
import UserStore from 'stores/UserStore';
import Assignments from 'components/Assignments';
import RandomProblem from 'components/RandomProblem';
import Statistics from 'components/Statistics';
import Profile from 'components/Profile';
import Inbox from 'components/Inbox';
import Settings from 'components/Settings';
import Chat from 'components/Chat';
import DashboardDisplay from 'components/DashboardDisplay';
import CreateProblem from 'components/CreateProblem';
import RProblem from 'components/RProblem';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/', null, { nextPathname: nextState.location.pathname });
  }
}

export default (
  <Router>
  <Route component={App}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Signup} />
    <Route path="/dashboard" component={Dashboard} >
      <Route path="/about" component={About}/>
      <Route path="/main" component={DashboardDisplay}/>
      <Route path="/profile" component={Profile}/>    
      <Route path="/assignments" component={Assignments}/>
      <Route path="/randomproblem" component={RandomProblem}/>
      <Route path="/randomproblem/:id" component={RProblem}/> 
      <Route path="/statistics" component={Statistics}/> 
      <Route path="/inbox" component={Inbox}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/chat" component={Chat}/>   
      <Route path="/createproblem" component={CreateProblem}/>       
      <Route path="*" component={NotFound}/>
  </Route>
  </Route>
  </Router>
);
