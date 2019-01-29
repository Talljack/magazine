// pages/catelog/catelog.js
import {tagInfoList} from '../../utils/tagList.js';
import {SubscribeModule} from '../../modules/subscribeModule.js';
const subscribeModule = new SubscribeModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  onSubscribe() {
    this.getData();
  },
  getData() {
    const myTagList = subscribeModule.getMyTag();
    this.setData({
      myTagList
    })
  },
  onShow() {
    this.setData({
      searchWord: ''
    })
  }
})





