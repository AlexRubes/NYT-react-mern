import React, { Component } from 'react';
import API from './../../utils/API';
import Article from './../../Components/Article';

class Home extends Component {
    state = {
        articles: [],
        savedArticles: [],
        query: "",
        start_year: "",
        end_year: ""
    }

    componentDidMount() {
        this.getArticles();
        this.getSavedArticles();
    }

    //my methods
    getArticles = () => {
        API.getArticles({
            query: this.state.query,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
            .then(res =>
                this.setState({
                    articles: res.data
                })
            )
            .catch(err => console.log(err));
    }

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => {
            this.getArticles();
            this.getSavedArticles();
        });
    }
    //get saved articles
    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res =>
                this.setState({
                    savedArticles: res.data
                })
            )
            .catch(err => console.log(err))

    }

    //render gets fired when state changes
    render() {
        return (
            <div>
                <p>Articles</p>
                {this.state.articles.map(article => (
                    <Article
                        title={article.headline.main}
                        key={article._id}
                        _id={article._id}
                        url={article.web_url}
                        date={article.pub_date}
                        handleClick={this.handleArticleSave}
                        buttonText="Save Article"
                    />
                ))}
                 <p>Saved Articles</p>
                {this.state.savedArticles.map(article => (
                    <Article
                        title={article.title}
                        key={article._id}
                        _id={article._id}
                        buttonText="Delete Article"
                    />
                ))}
            </div>
        )
    }
};

export default Home;