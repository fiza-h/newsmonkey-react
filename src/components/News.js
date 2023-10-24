import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log("constructor from news component")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=951f445d71f444159bcea0f1c36ffb45&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handleNextClick = async ()=>{
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))
        {

        }
        else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=951f445d71f444159bcea0f1c36ffb45&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            }
        )
        }
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=951f445d71f444159bcea0f1c36ffb45&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false,
            }
        )
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=> {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem source={element.source.name} author={element.author?element.author:"Unknown"} date={element.publishedAt} title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 88):""} url={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
