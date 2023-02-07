/**
 * 利用react-router4的react-router-config做路由守卫工作
 * 可查看react-router-config使用
 */
import { Route, Redirect, Switch } from 'react-router-dom';
import indexStore from '@/store/indexStore';
import commonUser from '@/store/common/user';

import { useEffect } from 'react';

const RenderRoute = ({
  route,
  props,
}) => {
  useEffect(() => {
    indexStore.setRouteMeta(route?.meta || {});
    document.title = route?.meta?.title || 'XXXX';
  }, [route?.meta]);

  return <route.component {...props} route={route} />;
};

const renderRoutes = ({
  routes,
  authed,
  authPath = '/login',
  // 主页面地址，已经登录
  mainPath = '/',
}) => {
  // console.log('location = useLocation();', useLocation())

  return routes ? (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            return (
              <RenderRoute
                route={route}
                props={props}
                authed={authed}
                authPath={authPath}
                mainPath={mainPath}
              />
            );
          }}
        />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  ) : null;
};

// export default inject("commonUser")(observer(renderRoutes));
export default renderRoutes;
