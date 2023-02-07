import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import classNames from 'classnames';
// import { parse } from 'qs';

import { Layout } from 'antd';

import myRenderRoutes from '@/routes/renderRoutes';

import Header from './Header';
import Footer from './Footer';

const SideBar = loadable(() => import('./SideBar'));

const { Content } = Layout;

const Main = ({ route }) => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {});

  return (
    <Layout
      className={classNames({
        main: true,
      })}
    >
      <Header />
      <Layout
        className={classNames({
          container: true,
        })}
      >
        <SideBar />
        <Content>
          {myRenderRoutes({
            routes: route?.routes || [],
            authed: isLogin,
          })}
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Main;
