class SubscribeModule {
    setMyTag(value) {
        wx.setStorageSync('subscribeList', value);
    }
    getMyTag() {
        return wx.getStorageSync('subscribeList') || [];
    }
    removeMyTag(tagId) {
        let tagList = this.getMyTag();
        let myIndex = 0;
        tagList.forEach((item, index) => {
            if(item.tagId == tagId) {
                myIndex = index;
            } else {
                return;
            }
        })
        tagList.splice(myIndex, 1);
        this.setMyTag(tagList);
    }
}
export {SubscribeModule}