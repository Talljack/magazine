// compoments/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagName: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this._showError();
    },
    _showError() {
      wx.showToast({
        title: '目前小程序为测试版本，不可进行跳转哦~',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  }
})
