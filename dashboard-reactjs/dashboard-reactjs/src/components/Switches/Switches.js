import React from 'react'
import {Switch, Route } from "react-router-dom";
import Settings from '../../Views/Settings/Settings';
import Profile from '../../Views/Profile/Profile';
import Dashboard from '../../Views/Dashboard/Dashboard';

export default function Switches() {
    return (
        <Switch>
          <Route path="/admin/settings"  component={Settings}/>
          <Route path="/admin/profile"   component={Profile} />
          <Route path="/admin/dashboard" component={Dashboard}/>
       </Switch>
    )
}
