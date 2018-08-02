import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default
      },
      {
        "path": "/overview",
        "exact": true,
        "component": require('../overview/index.js').default,
        "Route": require('/Users/zuohao/codes/github/umi-scaffold/src/components/Auth/AuthRoute.js').default
      },
      {
        "component": () => React.createElement(require('/Users/zuohao/codes/github/umi-scaffold/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/login","exact":true,"component":"./src/pages/login/index.js"},{"path":"/login/model","exact":true,"component":"./src/pages/login/model.js"},{"path":"/login/service","exact":true,"component":"./src/pages/login/service.js"},{"path":"/overview","exact":true,"component":"./src/pages/overview/index.js"},{"path":"/overview/model","exact":true,"component":"./src/pages/overview/model.js"},{"path":"/overview/service","exact":true,"component":"./src/pages/overview/service.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
