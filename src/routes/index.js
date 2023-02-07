import loadable from '@loadable/component';
import Main from '@/layouts';

const baseTitle = 'XXXX ';

const routeConfig = [
  {
    path: '/about',
    exact: true,
    component: loadable(() => import('@/pages/about')),
    meta: {
      title: `${baseTitle}关于XXXX`,
    },
  },
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: '/home',
        exact: true,
        component: loadable(() => import('@/pages/home')), // 首页
        meta: {
          title: `${baseTitle}首页`,
        },
      },
      {
        path: '/not-found',
        exact: true,
        component: loadable(() => import('@/pages/notFound/index')), // 404
      },
    ],
  },
];

export default routeConfig;
