// compoments/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    maganizeTypeArr: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂'],
    maganizeIndex: 0,
    maganizeId: 'maganize0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const lastIndex = this.data.maganizeIndex;
      const index = e.currentTarget.dataset.index;
      this.setData({
        maganizeIndex: index,
        maganizeId: `maganize${index === 0 ? 0 : index - 1}`
      })
      if(index === lastIndex) {
        return;
      }
      this.triggerEvent('nav', {
        index
      }, {});

    }
  }
})
