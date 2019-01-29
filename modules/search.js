import {Request} from '../utils/request.js';

class SearchModule extends Request {
    getSearchRecommend(word) {
        return this.getData({
            url:`/searchArticleRecommend/${word}`
        });
    }
    getSearchArticleList(word, start = 0) {
        return this.getData({
            url: `/searchArticleList/${word}/${start}`
        })
    }
}

export {SearchModule}