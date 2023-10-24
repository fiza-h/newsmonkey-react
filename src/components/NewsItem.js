import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let {title, description, url, newsUrl} = this.props;
        return (
            <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={!url?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/10/0/0/Wall-St..jpg?ve=1&tl=1":url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">
                    {description}...
                </p>
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
