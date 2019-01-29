// pages/index/index.js
import {random} from '../../utils/random.js';
import {GetInfo} from '../../modules/getInfo.js'
const getInfo = new GetInfo();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    recommend: {},
    markList: [],
    getMore: '',
    maganizeId: 0,
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    // wx.showLoading();
  },
  onNav(e) {
    const index = e.detail.index;
    this.setMaganizeId(index);
    this.resetData();
    this.scrollPageToTop();
    
    this.getData(index);
  },
  onCatelog() {
    wx.switchTab({
      url: '/pages/catelog/catelog'
    })
  },
  onReachBottom() {
    this.setData({
      getMore: random(20)
    })
  },
  
  getData(maganizeId) {
    const articleList = getInfo.getArticleList(maganizeId);
    const recommend = getInfo.getRecommendInfo(maganizeId);
    const markList = getInfo.getMarkType(maganizeId);

    Promise.all([articleList, recommend, markList]).then(res => {
      this.setData({
        articleList: res[0],
        recommend: res[1],
        markList: res[2]
      })
      this.hideLoading();
    })
  }, 

  hideLoading() {
    this.setData({
      loading: false
    })
  },

  resetData() {
    this.setData({
      articleList: [],
      recommend: {},
      markList: []
    })
  },

  setMaganizeId(index) {
    this.setData({
        maganizeId: index
    })
  },

  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  }
})