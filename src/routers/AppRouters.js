import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersPage from '../Pages/Admin/UsersPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AccountPage from '../Pages/AccountPage';
import ProjectsPage from '../Pages/ProjectsPage';
import ProjectPage from '../Pages/ProjectPage';
import NotFountPage from '../Pages/NotFountPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

export default function AppRouters() {
  
    return (

        <Switch>

            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute exact path={routes.login} component={LoginPage} />
            <PublicRoute exact path={routes.register} component={RegisterPage} />
            <PrivateRoute exact path={routes.account} component={AccountPage} />
            <PrivateRoute exact path={routes.projects} component={ProjectsPage} />
            <PrivateRoute exact path={routes.project()} component={ProjectPage} />
            <PrivateRoute hasRole={roles.admin} exact path={routes.admin.users} component={UsersPage}/>

            <Route exact path='*' component={NotFountPage}/>

        </Switch>

  )
}