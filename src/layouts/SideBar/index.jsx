import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Card } from 'antd';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { commonUser } from '@/store';

const { Sider } = Layout;

const SideBar = ({ showTag }) => {
  const { businessFlag } = commonUser.userInfo.customerBaseInformation;

  const menus = [
    {
      tag: 'account',
      title: '用户中心',
      children: [
        {
          title: '用户概览',
          path: '/user-center',
        },
      ],
    },
    {
      tag: 'account',
      title: '订单中心',
      children: [
        {
          title: '我的订单',
          path: '/my-order',
        },
        {
          title: '发票管理',
          path: '/invoice-manage',
        },
      ],
    },
    {
      tag: 'account',
      title: '我的信息',
      children: [
        {
          title: '我的门店',
          path: '/my-store',
        },
        {
          title: '企业信息',
          path: '/enterprise-information',
        },
        {
          title: '收藏/常购清单',
          path: '/goods-of-collection',
        },
        {
          title: '收货地址',
          path: '/receiving-goods-address',
        },
        {
          title: '增票资质',
          path: '/VAT-invoice-qualification',
        },
        {
          title: '收票地址',
          path: '/receiving-ticket-address',
        },
        {
          title: '退款信息',
          path: '/refund',
        },
      ],
    },
    {
      tag: 'account',
      title: '我的账期',
      children: [
        {
          title: '账期信息',
          path: '/account-info',
        },
        {
          title: '我的账单',
          path: '/my-bill',
        },
      ],
    },
    {
      title: '售后中心',
      tag: 'account',
      children: [
        {
          title: '申请售后',
          path: '/after-sales-apply-list',
        },
        {
          title: '售后查询',
          path: '/after-sales-order-list',
        },
      ],
    },
    {
      title: '下载中心',
      tag: 'account',
      children: [
        {
          title: '下载列表',
          path: '/download-list',
        },
      ],
    },
    {
      title: '我的钱包',
      tag: 'account',
      hidden: businessFlag !== 2,
      children: [
        {
          title: '企业钱包',
          path: '/enterprise-wallet',
        },
      ],
    },
  ];

  const location = useLocation();

  return (
    <div>
      <Card className='sss' bordered={false}>
        <Sider width={130} className='sss'>xxxx</Sider>
      </Card>
    </div>
  );
};

export default observer(SideBar);
