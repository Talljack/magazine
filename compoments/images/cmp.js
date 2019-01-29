// compoments/images/cmp.js
import {myBeh} from '../behaviors/myBehavior.js';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBeh],
  properties: {
      imgArr: Array,
      mainTitle: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=967395617,3601302195&fm=27&gp=0.jpg',
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365018759,2226705862&fm=27&gp=0.jpg',
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49764040,3750999451&fm=27&gp=0.jpg',
              'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg',
              'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg',
              'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3853852840,331334549&fm=27&gp=0.jpg',
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=756318500,1648332548&fm=27&gp=0.jpg',
              'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4159165909,1334756567&fm=27&gp=0.jpg',
              'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=825595977,2574576731&fm=27&gp=0.jpg'
            ]
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(e) {
      const imgArr = this.data.imgArr;
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls: imgArr,
        current: imgArr[index]
      })
    }
  }
})
