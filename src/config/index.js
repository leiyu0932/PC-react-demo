// antd 样式前缀
export const ANT_PREFIX = 'j';
// 外部样式前缀
export const PREFIXCLS = 'xxx';

// 布局组件范围
const routesGroup1 = [
  '/',
  '/search',
  '/list',
  '/recommend',
  '/contracted-goods',
  '/bargaining-cooperation',
  '/batch-place-order',
  '/goods-detail',
];
const routesGroup2 = [
  '/user-center',
  '/user-center/:id',
  '/my-order',
  '/my-order/detail',
  '/invoice-manage',
  '/invoice-manage/detail/:id',
  '/my-bill',
  '/my-bill/:id',
  '/purchase-order',
  '/purchase-order/:id',
  '/my-store',
  '/goods-of-collection',
  '/enterprise-information',
  '/receiving-goods-address',
  '/VAT-invoice-qualification',
  '/receiving-ticket-address',
  '/account-info',
  '/apply-after-sales',
  '/after-sales-search',
  '/after-sales-search/:id',
  '/after-sales-details',
  '/after-sales-search/details',
  '/after-sales-apply-list',
  '/after-sales-apply-list-more',
  '/after-sales-apply-service',
  '/after-sales-order-list',
  '/download-list',
  '/after-sales-order-list/detail',
  '/enterprise-wallet',
  '/refund',
  '/change-password',
  '/station-mail',
  '/cost-center',
];
const aboutRoutes = [
  '/about-introduce',
  '/about-advantage',
  '/about-cooperation',
  '/about-joinus',
];

const sideBarRoutes = [
  {
    tags: ['account'],
    routes: routesGroup2,
  },
  {
    tags: ['about'],
    routes: aboutRoutes,
  },
];

export const layoutRoutesRange = {
  topNav: routesGroup1,
  sideBar: sideBarRoutes,
  suspension: routesGroup1,
};
