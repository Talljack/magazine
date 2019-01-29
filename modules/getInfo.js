import {Request} from '../utils/request.js'
class GetInfo extends Request {
    getArticleList(magazineId = 0, start = 0) {
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }

    getRecommendInfo(magazineId = 0) {
        return this.getData({
            url: `/getRecommendInfo/${magazineId}`
        })
    }

    getMarkType(magazineId = 0) {
        return this.getData({
            url: `/getMarkTypeList/${magazineId}`
        })
    }
}

export {GetInfo}