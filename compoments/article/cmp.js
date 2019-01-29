// compoments/article/cmp.js
import {LikeModule} from '../../modules/like.js';
let likeModule = new LikeModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },
  attached() {
    const articleDetail = this.data.articleDetail;
    let artId = articleDetail.artId;

    //从缓存中取出，来渲染该文章是否问喜欢状态
    const likeStatus = likeModule.getLikeStatus(artId);
    this.setData({
      likeStatus
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e) {
      const articleDetail = this.data.articleDetail;
      const like = e.detail.like;
      let artId = articleDetail.artId;
      if(like) {
        //将喜欢的文章添加进喜欢列表以便于到mark 页面进行渲染
        likeModule.addLikeList(articleDetail);
      } else {
        likeModule.removeLikeList(artId);
      }
    }
  }
})
