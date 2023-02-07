import axios from 'axios';

import { indexStore } from '@/store/index';

export const getListData = (params) => {
  axios
    .get(`api/get-demo`, {
      ...params,
    })
    .then((data) => {
      indexStore.setIndexData(data);
    })
    .catch((e) => {
      console.log('get data error:', e);
    });
};
