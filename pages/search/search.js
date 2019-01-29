// pages/search/search.js
import {SearchModule} from '../../modules/search.js';
import {random} from '../../utils/random.js';
const searchModule = new SearchModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord: '',
    more: '',
    searching: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const searchWord = options.searchWord;
    this.setData({
      searchWord
    })
    this.getData(searchWord);
  },
  getData(word) {
    const getSearchRecommend = searchModule.getSearchRecommend(word);
    const getSearchArticleList = searchModule.getSearchArticleList(word);
    Promise.all([getSearchRecommend, getSearchArticleList]).then(res => {
      // console.log(res[0], res[1]);
      this.setData({
        tag: res[0].tag,
        recommend: res[0].recommend,
        articleList: res[1],
        searching: false
      })
    })
  },
  onReachBottom() {
    this.setData({
      more: random(20)
    })
  }
})