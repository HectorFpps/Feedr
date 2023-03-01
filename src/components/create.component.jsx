import './style/comment.css'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//TO DO:
// - Add a button to create a comment in create.component.jsx
// - Rename the comment.css to also include create and link it correcly to both comment.component.jsx and create.component.jsx
// - Create a post request to the backend to create a comment
// - Create a get request to the backend to get the comments

export default class Create extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const inputField = document.getElementById('comment-input');
        if (inputField.value == '') {
            console.log("Input field is empty")
            return;
        }
        const inputValue = inputField.value;
        const data = { 
            "picture": "none",
            "username": "User",
            "content": inputValue,
            "likes": 0,
            "dislikes": 0,
            "date": "2023-02-28T22:25:01.012Z" 
        };

        axios.post("http://localhost:27017/posts/add", data)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          });
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='comment-wrapper'>
                <div className='user'>
                    <a className='profile-pic' href='#'><img src='src/Assets/profilepic.jpg'/></a>
                    <span className='username'>{/* TODO: Person username*/}@User</span>
                </div>
                <div className="comment">
                    <input type="text" id="comment-input" placeholder="This is your comment"></input>
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

