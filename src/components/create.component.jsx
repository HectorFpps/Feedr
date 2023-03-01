import './style/comment.css'
import React from 'react'
import { Link } from 'react-router-dom'

//TO DO:
// - Add a button to create a comment in create.component.jsx
// - Rename the comment.css to also include create and link it correcly to both comment.component.jsx and create.component.jsx
// - Create a post request to the backend to create a comment
// - Create a get request to the backend to get the comments

export default class Create extends React.Component {
    render() {
        return (
            <div className='comment-wrapper'>
                <div className='user'>
                    <a className='profile-pic' href='#'><img src='src/Assets/profilepic.jpg'/></a>
                    <span className='username'>{/* TODO: Persons username*/}@User</span>
                </div>
                <div className="comment">
                    <input type="text" placeholder="This is your comment"></input>
                </div>
            </div>
        );
    }
}

