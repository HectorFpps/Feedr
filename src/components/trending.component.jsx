import React from "react";
import { Link } from "react-router-dom";
import './style/trending.css'

export default class Trending extends React.Component {
    render() {
        return (
            <div className="trending-wrapper">
                <span className="category">Food - Hot</span>
                <span className="hashtag">Pizza</span>
                <span className="nr-comments">54K Comments</span>
            </div>
        );
    }
}