import './style/comment.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.props.username,
            content: props.props.content,
            likes: props.props.likes,
            dislikes: props.props.dislikes,
            date: new Date(props.props.date)
        }
    }

    render() {
        return (
            <div className='comment-wrapper'>
                <div className='user'>
                    <a className='profile-pic' href='#'><img src='src/Assets/profilepic.jpg'/></a>
                    <span className='username'>{this.state.username}</span>
                    <span className='date'>{this.state.date.getFullYear()}/{this.state.date.getMonth() + 1}/{this.state.date.getDate()} - {this.state.date.getHours()}:{this.state.date.getMinutes()}</span>
                </div>
                <div className="comment">
                    <p>{this.state.content}</p>
                </div>
                <div className='interaction'>
                    <button className='like'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                    </button>
                    {/*NOTE: like class has not been created*/}
                    <span className='likes'>{this.state.likes}</span>
                    <button className='dislike'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
                    </button>
                    {/*NOTE: dislike class has not been created*/}
                    <span className='dislikes'>{this.state.dislikes}</span>
                    <button className='answer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </button>
                    {/*NOTE: answer class has not been created*/}
                    {/*TODO: add answers counter */}
                    <span className='answers'>0</span>
                </div>
            </div>
        );
    }
}

