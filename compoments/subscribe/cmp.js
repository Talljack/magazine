// compoments/subscribe/cmp.js
import {SubscribeModule} from '../../modules/subscribeModule.js';
const subscribeModule = new SubscribeModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList: []
  },
  attached() {
    this.judgeTag();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      let tagList = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }
      
      if(this.data.class == 'common') {
        let myTagList = this.getMyTag();
        myTagList.push(tagList);
        subscribeModule.setMyTag(myTagList);
      } else {
        subscribeModule.removeMyTag(tagList.tagId);
      }
      this.toggleClass();
      this.triggerEvent('tap');
    },
    getMyTag() {
      const myTagList = subscribeModule.getMyTag();
      this.setData({
        myTagList
      })
      return myTagList;
    },
    judgeTag() {
      const myTagList = this.getMyTag();
      myTagList.forEach((item, index) => {
        if(item.tagId == this.properties.tagId) [
          this.setData({
            class: 'subscribe'
          })
        ]
      })
    },
    toggleClass() {
      let className = '';
      if(this.data.class == 'common') {
        className = 'subscribe';
      } else {
        className = 'common';
      }
      this.setData({
        class: className
      })
    }
  }
})
