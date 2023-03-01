import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './comment.component';
import Create from './create.component';
import './style/home.css';
import axios from 'axios';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:27017/posts/')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    commentList() {
        return this.state.posts.map(currentcomment => {
            console.log(currentcomment)
            return <Comment props = {{username:currentcomment.username, likes:currentcomment.likes, content:currentcomment.content, dislikes:currentcomment.dislikes}}/>;
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='feed'>
                    <select className='dropdown' name="Sort By" id="SortBy" placeholder='Sort By'>
                        <option value="recent">Most Recent</option>
                        <option value="liked">Most Liked</option>
                        <option value="disliked">Most Disliked</option>
                        <option value="commented">Most Commented</option>
                    </select>
                    { this.commentList() }
                    {/* TODO: Create a footer like functionality for the create */}
                    <Create />
                </div>
                <div className='trending'>
                    Trending Topic
                </div>
            </div>
        );
    }
}