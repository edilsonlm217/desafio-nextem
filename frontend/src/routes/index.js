import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AddTask from '../pages/AddTask';
import EditTask from '../pages/EditTask';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/create" component={AddTask} isPrivate />
            <Route path="/edit/:taskId" component={EditTask} isPrivate />
        </Switch>
    );
}