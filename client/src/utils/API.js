import axios from 'axios';
import filterParams from './filterParams';

export default {
    //get all NYT articles
    getArticles: function(params) {
        return axios.get('/api/nyt', { params: filterParams(params) });
    },
    //save article in our DB
    saveArticle: function(articleData) {
        return axios.post('/api/articles', articleData)
    },
    //getsaved articles
    getSavedArticles: function(savedArticles) {
        return axios.get('/api/articles');
    }
};