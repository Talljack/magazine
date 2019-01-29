// compoments/showVideo/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc: String,
    posterSrc: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
    attached() {
      this._getVideoInfo();
    }
  },
  methods: {
    changePlay() {

      this._toggleVideoPoster();
      this.video.play();
    },
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    },

    changeStop() {
      this._toggleVideoPoster();

      this.video.seek(0);
      this.video.stop();
    },
    onVideoEnd() {
      this._toggleVideoPoster();
    }
  }
})
