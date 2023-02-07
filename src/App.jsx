import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/routes';
import { observer, inject } from 'mobx-react';
const App = ({ commonUser }) => {
  // if (!commonUser?.isLogin && window.location.pathname !== '/login') {
  //   window.location.href = '/login';
  // }
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

export default inject('commonUser')(observer(App));
