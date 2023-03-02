import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import Create from './Create';
import './style/home.css';
import axios from 'axios';
import Trending from './Trending';

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
        return this.state.posts.slice().reverse().map(currentcomment => {
            return <Comment props = {{username:currentcomment.username, likes:currentcomment.likes, content:currentcomment.content, dislikes:currentcomment.dislikes, date: currentcomment.date}}/>;
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
                    <Comment props={{username: "Dberweger", likes: 3000, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dislikes: 3000}} />
                    <Comment props={{username: "Dberweger", likes: 3000, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dislikes: 3000}} />
                    <Comment props={{username: "Dberweger", likes: 3000, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dislikes: 3000}} />
                    <Comment props={{username: "Dberweger", likes: 3000, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dislikes: 3000}} />
                    <Comment props={{username: "Dberweger", likes: 3000, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dislikes: 3000}} />
                    <Create />
                </div>
                <div className='trending'>
                    <h1>Hot Topics</h1>
                    <div className="scrollable">
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                        <Trending />
                    </div>
                </div>
            </div>
        );
    }
}