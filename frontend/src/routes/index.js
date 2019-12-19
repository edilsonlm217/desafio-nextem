import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AddTask from '../pages/AddTask';
import EditTask from '../pages/EditTask';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add" component={AddTask} />
            <Route path="/edit" component={EditTask} />
        </Switch>
    );
}