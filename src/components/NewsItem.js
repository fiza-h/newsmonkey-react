import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let {title, description, url, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-3">
            <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1', left: '85%'}}>
                    {source}
                </span>
                <img src={!url?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/10/0/0/Wall-St..jpg?ve=1&tl=1":url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title}... </h5>
                <p className="card-text">
                    {description}...
                </p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                    Read More
                </a>
                </div>
            </div>
            </div>
        );
    }
}

export default NewsItem;
