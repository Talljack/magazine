// compoments/articleList/cmp.js

import {GetInfo} from '../../modules/getInfo.js'
const getInfo = new GetInfo();
import {SearchModule} from '../../modules/search.js';
const searchModule = new SearchModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
      },
    maganizeId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type:''
  },
  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length - 1;
    let type = '';
    if(curPages[index].route === 'pages/search/search') {
      type = 'search';
    } else {
      type = 'index';
    }
    this.setData({
      type
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {

      this.setData({
        noMoreData: false
      })
      if(this._getLockStatus() || this.data.noMoreData) {
        return ;
      }
      this._setLock();
      this.getMoreData();
      
    },
    getMoreData() {
      const start = this.data.articleList.length;
      let getMore = null;
      if(this.data.type === 'search') {
          const word = this.data.word;
          
         getMore =  searchModule.getSearchArticleList(word, start);
      } else {
        const maganizeId = this.data.maganizeId;
        getMore = getInfo.getArticleList(maganizeId, start);
      }
      getMore.then(res => {
        this._setMoreData(res);
        // console.log(this.data.articleList);    后面的请求的数据的tag值为''
        this._unSetLock();
      })
    },
    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },
    _getLockStatus() {
      return this.data.loading;
    },
    _setLock() {
      this.setData({
        loading: true
      })
    },
    _unSetLock() {
      this.setData({
        loading: false
      })
    },
    _setMoreData(list) {
      const combineList = this.data.articleList.concat(list);
      if(combineList.length === this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
        return ;
      }
      this.setData({
        articleList: combineList,
      })
    }
  }
})
