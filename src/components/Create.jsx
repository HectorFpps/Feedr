import './style/comment.css'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style/Create.css'


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
            "date": new Date() 
        };

        axios.post("http://localhost:27017/posts/add", data)
          .then(response => {
            console.log(response)
            location.reload();
          })
          .catch(error => {
            console.log(error)
          });
      }


    render() {
        return (
            <div className="create-wrapper">
                <button className="comment-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <form onSubmit={this.handleSubmit}>
                    <div className='comment-wrapper'>
                    <div className='user'>
                        <a className='profile-pic' href='#'><img src='src/Assets/profilepic.jpg'/></a>
                        <span className='username'>{/* TODO: Person username*/}@User</span>
                    </div>
                    <div className="comment">
                        <input type="text" id="comment-input" className="input-comment" placeholder="This is your comment"></input>
                    </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

