/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from '../containers/Login';
import AppContainer from '../containers/AppContainer';
import Home from '../containers/Home';
import Detail from '../containers/Detail';

const history = createBrowserHistory();

const authRoutes = [
  {
    path: '/login',
    component: Login,
  },
  // {
  //   path: '/forgot-password',
  //   component: ForgotPassword,
  // }
];

const appRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:id',
    component: Detail,
  },
];

const RouteConfig = () => (
  <Router history={history}>
    <>
      <ToastContainer autoClose={5000} position={toast.POSITION.TOP_CENTER} />
      <Switch>
        {authRoutes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}

        <AppContainer history={history}>
          {appRoutes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </AppContainer>
      </Switch>
    </>
  </Router>
);

const RouteWithSubRoutes = route => {
  return (
    <Route
      exact
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default RouteConfig;
