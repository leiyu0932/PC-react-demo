import { makeAutoObservable } from 'mobx'
// 建模应用状态
class IndexStore {
  constructor() {
    makeAutoObservable(this)
  }
  indexData = {
    data: '更改前',
  }
  setIndexData = (data) => {
    this.indexData ={
      ...this.indexData,
      data,
    }
  }
  // 路由元信息
  routeMeta = {}
  setRouteMeta = (data) => {
    this.routeMeta = {
      ...data
    }
  }
};

const indexStore = new IndexStore();
export default indexStore;
